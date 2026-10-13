"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Search, 
  Terminal, 
  Code, 
  FileText, 
  Moon, 
  Sun, 
  Copy, 
  ExternalLink, 
  Check, 
  X, 
  Briefcase, 
  Award, 
  GraduationCap, 
  Mail, 
  Zap,
  Bot,
  Phone,
  Send,
  Clock,
  Layers
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { GithubIcon } from "./icons/GithubIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCV: () => void;
}

interface CommandAction {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  shortcut?: string;
  run: () => void;
}

export function CommandPalette({ isOpen, onClose, onOpenCV }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedToast, setCopiedToast] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);

  const actions: CommandAction[] = [
    {
      id: "nav-services",
      title: "Explore Professional Engineering Services",
      category: t.commandPalette.navGroup,
      icon: Layers,
      run: () => {
        onClose();
        window.location.href = "/services";
      }
    },
    {
      id: "act-request-service",
      title: "Submit a Project / Service Request",
      category: t.commandPalette.actionsGroup,
      icon: Send,
      shortcut: "REQ",
      run: () => {
        onClose();
        window.location.href = "/services/request";
      }
    },
    {
      id: "act-track-request",
      title: "Track Service Request Status",
      category: t.commandPalette.actionsGroup,
      icon: Clock,
      run: () => {
        onClose();
        window.location.href = "/services/request/status";
      }
    },
    {
      id: "nav-projects",
      title: "View Featured Projects",
      category: t.commandPalette.navGroup,
      icon: Code,
      run: () => {
        onClose();
        if (window.location.pathname === "/") {
          document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = "/projects";
        }
      }
    },
    {
      id: "nav-ai-engineering",
      title: "Explore AI-Assisted Engineering & Workflows",
      category: t.commandPalette.navGroup,
      icon: Bot,
      run: () => {
        onClose();
        document.querySelector("#ai-engineering")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-firebot",
      title: "Explore Troy FireBot Case Study",
      category: t.commandPalette.navGroup,
      icon: Zap,
      run: () => {
        onClose();
        document.querySelector("#firebot-case-study")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-skills",
      title: "Inspect Technical Skills Matrix",
      category: t.commandPalette.navGroup,
      icon: Terminal,
      run: () => {
        onClose();
        document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-experience",
      title: "View GDG NCTU HR Community Experience",
      category: t.commandPalette.navGroup,
      icon: Briefcase,
      run: () => {
        onClose();
        document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-certs",
      title: "Inspect Verified Certifications & Credentials",
      category: t.commandPalette.navGroup,
      icon: Award,
      run: () => {
        onClose();
        document.querySelector("#certifications")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-education",
      title: "Academic Background & Education",
      category: t.commandPalette.navGroup,
      icon: GraduationCap,
      run: () => {
        onClose();
        document.querySelector("#education")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-contact",
      title: "Contact Hossam Ahmed",
      category: t.commandPalette.navGroup,
      icon: Mail,
      run: () => {
        onClose();
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "act-cv",
      title: t.commandPalette.openCV,
      category: t.commandPalette.actionsGroup,
      icon: FileText,
      shortcut: "CV",
      run: () => {
        onClose();
        onOpenCV();
      }
    },
    {
      id: "act-whatsapp",
      title: "Chat on WhatsApp (+20 128 667 7999)",
      category: t.commandPalette.actionsGroup,
      icon: WhatsAppIcon,
      shortcut: "WA",
      run: () => {
        window.open("https://wa.me/201286677999", "_blank");
        onClose();
      }
    },
    {
      id: "act-call",
      title: "Call Hossam Directly (01286677999 / +20 128 667 7999)",
      category: t.commandPalette.actionsGroup,
      icon: Phone,
      shortcut: "Call",
      run: () => {
        window.location.href = "tel:+201286677999";
        onClose();
      }
    },
    {
      id: "act-copy-phone",
      title: "Copy Phone Number (01286677999)",
      category: t.commandPalette.actionsGroup,
      icon: Copy,
      run: () => {
        navigator.clipboard.writeText("01286677999");
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 2000);
      }
    },
    {
      id: "act-theme",
      title: theme === "dark" ? t.commandPalette.toggleThemeLight : t.commandPalette.toggleThemeDark,
      category: t.commandPalette.actionsGroup,
      icon: theme === "dark" ? Sun : Moon,
      shortcut: "Theme",
      run: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: "act-email",
      title: t.commandPalette.copyEmail,
      category: t.commandPalette.actionsGroup,
      icon: Copy,
      run: () => {
        navigator.clipboard.writeText("Kabtinhosa@yahoo.com");
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 2000);
      }
    },
    {
      id: "link-github",
      title: t.commandPalette.openGitHub,
      category: t.commandPalette.linksGroup,
      icon: GithubIcon,
      shortcut: "GitHub",
      run: () => {
        window.open("https://github.com/HossamAhmedSoft", "_blank");
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Global Ctrl+K / Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      } else if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
        } else if (e.key === "Enter" && filteredActions[selectedIndex]) {
          e.preventDefault();
          filteredActions[selectedIndex].run();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, filteredActions, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50 dark:bg-[#131C31]">
          <Search className="w-5 h-5 text-sky-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.commandPalette.placeholder}
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-200 dark:bg-slate-800 rounded">
            ESC
          </kbd>
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500 dark:text-slate-400">
              {t.commandPalette.noResults} &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const Icon = action.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={action.id}
                  onClick={action.run}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                    isSelected 
                      ? "bg-sky-500 text-slate-950 font-semibold" 
                      : "hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-slate-950" : "text-sky-500"}`} />
                    <span className="text-xs sm:text-sm">{action.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {action.shortcut && (
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                        isSelected 
                          ? "bg-slate-950/20 text-slate-950" 
                          : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                      }`}>
                        {action.shortcut}
                      </span>
                    )}
                    <span className={`text-[10px] font-mono uppercase tracking-wider ${
                      isSelected ? "text-slate-950/70" : "text-slate-400"
                    }`}>
                      {action.category}
                    </span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Bar */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F19] flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span>{t.commandPalette.hintNavigate}</span>
            <span>{t.commandPalette.hintSelect}</span>
          </div>

          {copiedToast && (
            <span className="inline-flex items-center gap-1 text-emerald-500 font-semibold">
              <Check className="w-3.5 h-3.5" /> {t.commandPalette.emailCopied}
            </span>
          )}

          <div className="flex items-center gap-1.5 text-sky-500">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Quick Launcher</span>
          </div>
        </div>

      </div>
    </div>
  );
}
