"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Search, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ChevronRight, 
  ShieldCheck, 
  Mail,
  ArrowRight
} from "lucide-react";

function StatusLookupContent() {
  const searchParams = useSearchParams();
  const initialRef = searchParams.get("ref") || "";

  const [reference, setReference] = useState(initialRef);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    reference: string;
    status: string;
    projectTitle: string;
    primaryService: string;
    createdAt: string;
    updatedAt: string;
    estimatedResponseTime: string;
  } | null>(null);

  const fetchStatus = async (refCode: string, emailAddr: string) => {
    if (!refCode.trim()) {
      setError("Please enter a valid request reference code.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const url = `/api/services/request/status?ref=${encodeURIComponent(refCode.trim())}${
        emailAddr.trim() ? `&email=${encodeURIComponent(emailAddr.trim())}` : ""
      }`;

      const res = await fetch(url);
      const data = await res.json();

      if (res.ok && data.success) {
        setResult(data.request);
      } else {
        setError(data.error || "No matching request found.");
      }
    } catch {
      setError("Network error while looking up request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (initialRef) {
      fetchStatus(initialRef, "");
    }
  }, [initialRef]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchStatus(reference, email);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New":
        return "bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-800";
      case "Under Review":
        return "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800";
      case "Quoted":
      case "Accepted":
      case "In Progress":
        return "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800";
      case "Completed":
        return "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800";
      default:
        return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700";
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
          <Clock className="w-3.5 h-3.5" />
          <span>Real-Time Request Tracker</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Track Your Project Request Status
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Enter the unique reference code provided upon submission to check the current review stage and history.
        </p>
      </div>

      {/* Search Input Box */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
        <div>
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
            Request Reference Code *
          </label>
          <input
            type="text"
            required
            placeholder="e.g., REQ-20261013-A8F2"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-mono text-sm text-slate-900 dark:text-white uppercase focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
            Client Email Address (for verification)
          </label>
          <input
            type="email"
            placeholder="client@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 flex items-center gap-2 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-md shadow-sky-500/20 cursor-pointer disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Checking Status...</span>
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              <span>Verify &amp; Lookup Request</span>
            </>
          )}
        </button>
      </form>

      {/* Result Card */}
      {result && (
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-sky-400/40 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">Reference Code</span>
              <span className="text-xl font-extrabold font-mono text-sky-600 dark:text-sky-400">{result.reference}</span>
            </div>
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border ${getStatusBadge(result.status)}`}>
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              <span>{result.status}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-xs font-mono text-slate-400 block uppercase">Project Title</span>
              <span className="font-bold text-slate-900 dark:text-white">{result.projectTitle}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block uppercase">Service</span>
              <span className="font-bold text-slate-900 dark:text-white">{result.primaryService}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block uppercase">Submitted Date</span>
              <span className="font-mono text-slate-700 dark:text-slate-300 text-xs">
                {new Date(result.createdAt).toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block uppercase">Last Updated</span>
              <span className="font-mono text-slate-700 dark:text-slate-300 text-xs">
                {new Date(result.updatedAt).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-600 dark:text-slate-400">Response SLA Status:</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">{result.estimatedResponseTime}</span>
          </div>

          <div className="pt-2 text-center">
            <a
              href={`https://wa.me/201286677999?text=${encodeURIComponent(
                `Hello Hossam, inquiring about request ${result.reference} (${result.projectTitle})`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Follow up directly on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RequestStatusPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#080B11] text-slate-900 dark:text-white transition-colors duration-200">
      <Navbar onOpenCV={() => {}} onOpenPalette={() => {}} />

      <main className="flex-1">
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F19]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Link href="/" className="hover:text-sky-500 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/services/request" className="hover:text-sky-500 transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 dark:text-white font-semibold">Request Status</span>
            </nav>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="flex justify-center items-center py-24">
              <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
            </div>
          }
        >
          <StatusLookupContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
