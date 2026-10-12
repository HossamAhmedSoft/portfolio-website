"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MessageSquare,
  ShieldCheck,
  Clock
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const email = "Kabtinhosa@yahoo.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject || "Engineering Opportunity / Discussion")}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-[#0B0F19]/50 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
            <Mail className="w-3.5 h-3.5 text-sky-500" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Start a Conversation
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I am actively exploring software engineering and backend developer opportunities. Feel free to reach out directly via email or review my live code repositories on GitHub.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-left">
            {/* Primary Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Direct Email
              </span>
              <div className="font-mono text-sm font-semibold text-slate-900 dark:text-white break-all">
                {email}
              </div>
              <div className="flex gap-2 pt-1">
                <a
                  href={`mailto:${email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/HossamAhmedSoft"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm block hover:border-sky-500/60 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  GitHub Profile
                </span>
                <GithubIcon className="w-4 h-4 text-slate-600 dark:text-slate-300 group-hover:text-sky-500 transition-colors" />
              </div>
              <div className="font-mono text-sm font-semibold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                @HossamAhmedSoft
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                26 independent repositories, verified commits, and full source code.
              </p>
            </a>

            {/* Response Time Notice */}
            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <Clock className="w-4 h-4 text-sky-500 shrink-0" />
              <span>Standard response time: Within 24 hours</span>
            </div>
          </div>

          {/* Right Column: Direct Composer (7 cols) */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSendEmail}
              className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-4 text-left shadow-sm"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-500" />
                <span>Quick Mail Composer</span>
              </h3>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  placeholder="e.g. Software Developer Role at [Company]"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the opportunity, technical stack, or project discussion..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-md shadow-sky-500/20 hover:shadow-lg transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Mail Client & Send to {email}</span>
              </button>

              <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center">
                Launches your default email application with pre-filled content. Zero third-party trackers.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
