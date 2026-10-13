"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Lock, 
  Key, 
  Search, 
  Filter, 
  RefreshCw, 
  Download, 
  Edit3, 
  Save, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Mail, 
  Phone, 
  ExternalLink,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { ServiceRequestRecord, RequestStatus } from "@/lib/requestStorage";

export default function AdminRequestsPage() {
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [requests, setRequests] = useState<ServiceRequestRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequestRecord | null>(null);
  const [updatingRef, setUpdatingRef] = useState<string | null>(null);
  const [editStatus, setEditStatus] = useState<RequestStatus>("New");
  const [editNotes, setEditNotes] = useState("");
  const [updateFeedback, setUpdateFeedback] = useState<string | null>(null);

  const statuses: RequestStatus[] = [
    "New",
    "Under Review",
    "Waiting for Client",
    "Quoted",
    "Accepted",
    "In Progress",
    "Completed",
    "Declined",
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setIsLoading(true);

    try {
      const res = await fetch(`/api/admin/requests?token=${encodeURIComponent(token.trim())}`);
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setRequests(data.requests);
        sessionStorage.setItem("admin_token", token.trim());
      } else {
        setAuthError(data.error || "Authentication failed. Invalid secret key.");
      }
    } catch {
      setAuthError("Network error while verifying secret.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadRequests = async (activeToken = token) => {
    setIsLoading(true);
    try {
      const url = `/api/admin/requests?token=${encodeURIComponent(activeToken)}&status=${statusFilter}&q=${encodeURIComponent(searchQuery)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok && data.success) {
        setRequests(data.requests);
      }
    } catch {
      // Ignore
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_token");
    if (saved) {
      setToken(saved);
      loadRequests(saved).then(() => setIsAuthenticated(true));
    }
  }, []);

  const handleUpdateStatus = async (ref: string) => {
    setUpdatingRef(ref);
    setUpdateFeedback(null);

    try {
      const res = await fetch("/api/admin/requests", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          reference: ref,
          status: editStatus,
          internalNotes: editNotes,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setUpdateFeedback("Status updated successfully.");
        loadRequests(token);
        if (selectedRequest?.reference === ref) {
          setSelectedRequest(data.request);
        }
      } else {
        setUpdateFeedback(data.error || "Failed to update status.");
      }
    } catch {
      setUpdateFeedback("Network error while updating.");
    } finally {
      setUpdatingRef(null);
    }
  };

  const handleExportJson = () => {
    const blob = new Blob([JSON.stringify(requests, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `service_requests_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#080B11] p-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950 text-sky-500 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Admin Request Portal
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Enter your authorization key to inspect incoming project requests.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                Secret Key
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="Enter ADMIN_SECRET_KEY"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-mono text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <Key className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
              </div>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs">
                {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-md shadow-sky-500/25 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "Authenticating..." : "Unlock Portal"}
            </button>
          </form>

          <div className="text-center">
            <Link href="/" className="text-xs text-slate-400 hover:underline">
              ← Return to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED MANAGEMENT PORTAL
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080B11] text-slate-900 dark:text-white">
      {/* Top Admin Nav */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white">
            Requests Admin
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
            Authenticated
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => loadRequests()}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            title="Refresh Requests"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button
            onClick={handleExportJson}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            title="Export JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button
            onClick={() => {
              sessionStorage.removeItem("admin_token");
              setIsAuthenticated(false);
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/60"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        
        {/* Filters and Search Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 flex-1 min-w-[280px]">
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search by reference, title, or client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && loadRequests()}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
              }}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white"
            >
              <option value="ALL">All Statuses</option>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="text-xs font-mono text-slate-400">
            Total Logged: <strong>{requests.length}</strong>
          </div>
        </div>

        {/* Requests Table / Cards */}
        {requests.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-2">
            <FileText className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="font-bold text-base text-slate-900 dark:text-white">No Service Requests Found</h3>
            <p className="text-xs text-slate-400">
              Either no requests have been logged yet or none match your search filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* List Table (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              {requests.map((req) => {
                const isSelected = selectedRequest?.reference === req.reference;
                return (
                  <div
                    key={req.reference}
                    onClick={() => {
                      setSelectedRequest(req);
                      setEditStatus(req.status);
                      setEditNotes(req.internalNotes || "");
                      setUpdateFeedback(null);
                    }}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                      isSelected
                        ? "border-sky-500 bg-sky-50/40 dark:bg-sky-950/40 shadow-md ring-1 ring-sky-400"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A] hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
                          {req.reference}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                          {req.primaryService}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {req.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {req.projectTitle}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                        {req.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
                      <span>{req.clientName} ({req.clientEmail})</span>
                      <span>{new Date(req.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Request Detail Panel (5 cols) */}
            <div className="lg:col-span-5 sticky top-20 space-y-4">
              {selectedRequest ? (
                <div className="p-6 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-xl space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400">Detail View</span>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white font-mono">
                        {selectedRequest.reference}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                      {selectedRequest.status}
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="space-y-1.5 text-xs">
                    <span className="font-mono text-[10px] uppercase text-slate-400 font-bold block">Client Information</span>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">{selectedRequest.clientName}</div>
                    <div className="text-slate-600 dark:text-slate-300">{selectedRequest.clientEmail}</div>
                    {selectedRequest.contactHandle && (
                      <div className="text-slate-500 font-mono">Contact: {selectedRequest.contactHandle} ({selectedRequest.preferredCommunication})</div>
                    )}
                    {selectedRequest.organization && (
                      <div className="text-slate-500">Org: {selectedRequest.organization}</div>
                    )}
                  </div>

                  {/* Project Specifications */}
                  <div className="space-y-1.5 text-xs">
                    <span className="font-mono text-[10px] uppercase text-slate-400 font-bold block">Specifications</span>
                    <div className="font-bold text-slate-900 dark:text-white">{selectedRequest.projectTitle}</div>
                    <div className="text-slate-600 dark:text-slate-300 whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto p-2 rounded bg-slate-50 dark:bg-slate-900">
                      {selectedRequest.description}
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
                      <div>Budget: <strong>{selectedRequest.budgetRange}</strong></div>
                      <div>Priority: <strong>{selectedRequest.priority}</strong></div>
                    </div>
                  </div>

                  {/* Contextual Answers if available */}
                  {Object.keys(selectedRequest.contextualAnswers || {}).length > 0 && (
                    <div className="space-y-1 text-xs">
                      <span className="font-mono text-[10px] uppercase text-slate-400 font-bold block">Contextual Questions</span>
                      {Object.entries(selectedRequest.contextualAnswers).map(([k, v]) => (
                        <div key={k} className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-[11px]">
                          <strong className="text-slate-900 dark:text-white">{k}:</strong> {v}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Status & Internal Notes Editor */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                    <span className="font-mono text-[10px] uppercase text-slate-400 font-bold block">Update Status &amp; Notes</span>
                    
                    <div>
                      <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">Status</label>
                      <select
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value as RequestStatus)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white"
                      >
                        {statuses.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">Internal Notes</label>
                      <textarea
                        rows={2}
                        placeholder="Internal assessment notes (not visible to client)..."
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white"
                      />
                    </div>

                    {updateFeedback && (
                      <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        {updateFeedback}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => handleUpdateStatus(selectedRequest.reference)}
                      disabled={updatingRef === selectedRequest.reference}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-sm cursor-pointer disabled:opacity-50"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{updatingRef === selectedRequest.reference ? "Saving..." : "Save Status & Notes"}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
                  Select a request from the list to view its complete intake brief and update its status.
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
