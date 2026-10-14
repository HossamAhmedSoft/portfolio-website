"use client";

import React, { useState, useEffect, useId } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  servicesCatalog, 
  budgetRanges, 
  projectStages, 
  projectPlatforms, 
  priorityLevels 
} from "@/data/services";
import { useLanguage } from "./LanguageProvider";
import { trackEvent } from "@/lib/analytics";
import { 
  Check, 
  Copy, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Send, 
  ShieldCheck, 
  Clock, 
  FileText, 
  ExternalLink,
  ChevronRight
} from "lucide-react";

export function ServiceRequestWorkflow() {
  const searchParams = useSearchParams();
  const initialServiceFromUrl = searchParams.get("service") || "website-development";
  const { isAr } = useLanguage();
  const honeypotId = useId();

  // Active step (1 to 6)
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    primaryService: initialServiceFromUrl,
    secondaryService: "",
    projectTitle: "",
    description: "",
    projectGoals: "",
    targetAudience: "",
    platforms: ["web"] as string[],
    projectStage: "idea",
    preferredTechnologies: "",
    referenceUrl: "",
    contextualAnswers: {} as Record<string, string>,
    budgetRange: "undecided",
    startDate: "",
    targetDeadline: "",
    deadlineFlexibility: "flexible",
    priority: "normal",
    clientName: "",
    clientEmail: "",
    organization: "",
    preferredCommunication: "email" as "email" | "whatsapp" | "phone",
    contactHandle: "",
    countryOrTimezone: "",
    additionalNotes: "",
    preferredLanguage: (isAr ? "ar" : "en") as "en" | "ar",
    referralSource: "",
    consentGiven: false,
    website_hp: "", // Honeypot field for bot detection
  });

  // UI States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    reference: string;
    message: string;
    estimatedResponseTime: string;
  } | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Synchronize preselected service from URL if available
  useEffect(() => {
    const s = searchParams.get("service");
    if (s && servicesCatalog.some((item) => item.id === s)) {
      setFormData((prev) => ({ ...prev, primaryService: s }));
    }
  }, [searchParams]);

  // Find active service metadata
  const selectedService = servicesCatalog.find((s) => s.id === formData.primaryService) || servicesCatalog[0];

  const handleContextualChange = (questionId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      contextualAnswers: {
        ...prev.contextualAnswers,
        [questionId]: value,
      },
    }));
  };

  const handlePlatformToggle = (platformId: string) => {
    setFormData((prev) => {
      const exists = prev.platforms.includes(platformId);
      const updated = exists
        ? prev.platforms.filter((p) => p !== platformId)
        : [...prev.platforms, platformId];
      return { ...prev, platforms: updated };
    });
  };

  // Step Validation
  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!formData.primaryService) {
        newErrors.primaryService = isAr ? "يرجى اختيار الخدمة الأساسية" : "Please select a primary service.";
      }
    }

    if (stepNumber === 2) {
      if (!formData.projectTitle.trim() || formData.projectTitle.trim().length < 3) {
        newErrors.projectTitle = isAr ? "عنوان المشروع يجب أن يكون 3 أحرف على الأقل" : "Project title must be at least 3 characters.";
      }
      if (!formData.description.trim() || formData.description.trim().length < 15) {
        newErrors.description = isAr ? "يرجى كتابة وصف أولي للمشروع (15 حرفاً على الأقل)" : "Please describe your project (at least 15 characters).";
      }
      if (formData.referenceUrl && !/^https?:\/\//i.test(formData.referenceUrl)) {
        newErrors.referenceUrl = isAr ? "الرابط يجب أن يبدأ بـ http:// أو https://" : "URL must start with http:// or https://";
      }
      // Check required contextual questions
      selectedService.contextualQuestions.forEach((q) => {
        if (q.required && !formData.contextualAnswers[q.id]?.trim()) {
          newErrors[`ctx_${q.id}`] = isAr ? `يرجى الإجابة على: ${q.label}` : `Please answer: ${q.label}`;
        }
      });
    }

    if (stepNumber === 4) {
      if (!formData.clientName.trim() || formData.clientName.trim().length < 2) {
        newErrors.clientName = isAr ? "يرجى كتابة اسمك أو اسم المؤسسة" : "Please enter your full name.";
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.clientEmail.trim() || !emailRegex.test(formData.clientEmail.trim())) {
        newErrors.clientEmail = isAr ? "يرجى كتابة بريد إلكتروني صحيح" : "Please enter a valid email address.";
      }
    }

    if (stepNumber === 5) {
      if (!formData.consentGiven) {
        newErrors.consentGiven = isAr ? "يرجى الموافقة على معالجة البيانات للتواصل" : "Please agree to the consent terms to process your request.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      trackEvent("ServiceRequest", "step_advanced", `Step ${currentStep} to ${currentStep + 1}`);
      setCurrentStep((prev) => Math.min(prev + 1, 6));
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final comprehensive validation
    if (!validateStep(1) || !validateStep(2) || !validateStep(4) || !validateStep(5)) {
      setCurrentStep(2);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      trackEvent("ServiceRequest", "submission_attempt", formData.primaryService);

      const res = await fetch("/api/services/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        trackEvent("ServiceRequest", "submission_success", data.reference);
        setSubmissionResult({
          reference: data.reference,
          message: data.message,
          estimatedResponseTime: data.estimatedResponseTime || "Within 24 business hours",
        });
        setSubmitSuccess(true);
        window.scrollTo({ top: 120, behavior: "smooth" });
      } else {
        trackEvent("ServiceRequest", "submission_error", data.error || "Failed");
        setErrors({ form: data.error || "Submission failed. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setErrors({ form: "Network error occurred. Please verify your connection or contact directly via WhatsApp." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyReference = () => {
    if (submissionResult?.reference) {
      navigator.clipboard.writeText(submissionResult.reference);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  // SUCCESS VIEW
  if (submitSuccess && submissionResult) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0F172A] border border-emerald-500/30 shadow-2xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-400 text-emerald-500 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/20">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold block">
              {isAr ? "تم استلام الطلب بنجاح" : "Service Request Confirmed"}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {isAr ? "شكراً لتواصلك وثقتك المهنية" : "Thank You, Your Request Has Been Logged"}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              {submissionResult.message}
            </p>
          </div>

          {/* Reference Box */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-slate-800 max-w-md mx-auto space-y-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">
              {isAr ? "الرقم المرجعي الموحد لطلبك:" : "Unique Tracking Reference:"}
            </span>
            <div className="flex items-center justify-center gap-3">
              <span className="text-xl sm:text-2xl font-mono font-extrabold text-sky-600 dark:text-sky-400">
                {submissionResult.reference}
              </span>
              <button
                type="button"
                onClick={handleCopyReference}
                className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-sky-500 transition-colors"
                title="Copy Reference Code"
                aria-label="Copy Reference Code"
              >
                {copiedRef ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copiedRef && (
              <span className="text-xs text-emerald-500 font-mono block">
                {isAr ? "تم نسخ الرقم المرجعي للحافظة!" : "Copied to clipboard!"}
              </span>
            )}
          </div>

          {/* SLA & Direct Follow-up */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-start max-w-lg mx-auto pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-500" />
                <span>{isAr ? "زمن المراجعة المتوقع" : "Expected Response Time"}</span>
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white block">
                {submissionResult.estimatedResponseTime}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>{isAr ? "متابعة الحالة" : "Request Lookup"}</span>
              </span>
              <Link
                href={`/services/request/status?ref=${encodeURIComponent(submissionResult.reference)}`}
                className="text-xs font-semibold text-sky-500 hover:underline flex items-center gap-1 mt-0.5"
              >
                <span>{isAr ? "فحص حالة الطلب لاحقاً" : "Track status online"}</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-all shadow-md shadow-sky-500/20"
            >
              {isAr ? "العودة للرئيسية" : "Return to Homepage"}
            </Link>
            <a
              href={`https://wa.me/201286677999?text=${encodeURIComponent(
                `Hello Hossam, I just submitted project request ${submissionResult.reference} regarding ${formData.projectTitle}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all"
            >
              {isAr ? "متابعة فورية عبر واتساب" : "Direct WhatsApp Notification"}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // STEP WIZARD FORM
  const stepTitles = [
    { num: 1, title: isAr ? "اختيار الخدمة" : "Service Type" },
    { num: 2, title: isAr ? "تفاصيل المشروع" : "Project Scope" },
    { num: 3, title: isAr ? "الميزانية والجدول" : "Budget & Timeline" },
    { num: 4, title: isAr ? "بيانات العميل" : "Contact Details" },
    { num: 5, title: isAr ? "الموافقة والملاحظات" : "Notes & Consent" },
    { num: 6, title: isAr ? "المراجعة والإرسال" : "Review & Submit" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Progress Stepper Bar */}
      <div className="mb-10">
        <div className="grid grid-cols-6 gap-2 sm:gap-3 text-center">
          {stepTitles.map((step) => {
            const isActive = currentStep === step.num;
            const isCompleted = currentStep > step.num;

            return (
              <button
                key={step.num}
                type="button"
                onClick={() => {
                  if (step.num < currentStep) setCurrentStep(step.num);
                }}
                disabled={step.num > currentStep}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-xl text-xs transition-all ${
                  isActive
                    ? "text-sky-600 dark:text-sky-400 font-bold"
                    : isCompleted
                    ? "text-emerald-600 dark:text-emerald-400 font-semibold cursor-pointer"
                    : "text-slate-400 opacity-60 cursor-not-allowed"
                }`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-bold border ${
                    isActive
                      ? "bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/30"
                      : isCompleted
                      ? "bg-emerald-500 text-white border-emerald-400"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-300 dark:border-slate-700"
                  }`}
                >
                  {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.num}
                </div>
                <span className="hidden sm:inline text-[11px] leading-tight truncate max-w-full">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Horizontal Progress Fill */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
          <div
            className="bg-sky-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${((currentStep - 1) / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* General Form Error Banner */}
      {errors.form && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 flex items-center gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errors.form}</span>
        </div>
      )}

      {/* Multi-step Container Card */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
        
        {/* Invisible Honeypot Field */}
        <div style={{ display: "none" }} aria-hidden="true">
          <label htmlFor={honeypotId}>Do not fill this field</label>
          <input
            id={honeypotId}
            type="text"
            name="website_hp"
            value={formData.website_hp}
            onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* ================= STEP 1: SERVICE SELECTION ================= */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isAr ? "الخطوة 1: اختيار الخدمة الأساسية" : "Step 1: Choose Primary Service"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {isAr ? "حدد الخدمة التي تطابق جوهر متطلبات مشروعك التقني." : "Select the category that best fits the core objective of your project."}
              </p>
            </div>

            {errors.primaryService && (
              <span className="text-xs text-rose-500 font-medium block">{errors.primaryService}</span>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesCatalog.map((service) => {
                const isSelected = formData.primaryService === service.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, primaryService: service.id })}
                    className={`p-4 rounded-2xl border text-start transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "border-sky-500 bg-sky-50/50 dark:bg-sky-950/40 ring-2 ring-sky-400/40"
                        : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/40 dark:bg-slate-900/30"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          {isAr ? service.ar.name : service.name}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-sky-500 bg-sky-500 text-white" : "border-slate-400"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {isAr ? service.ar.shortDescription : service.shortDescription}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Optional Secondary Service */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                {isAr ? "خدمة ثانوية إضافية (اختياري)" : "Secondary Service (Optional Add-on)"}
              </label>
              <select
                value={formData.secondaryService}
                onChange={(e) => setFormData({ ...formData, secondaryService: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">{isAr ? "-- لا يوجد / خدمة واحدة فقط --" : "-- None / Single Service Only --"}</option>
                {servicesCatalog
                  .filter((s) => s.id !== formData.primaryService)
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {isAr ? s.ar.name : s.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        )}

        {/* ================= STEP 2: PROJECT DETAILS ================= */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isAr ? "الخطوة 2: مواصفات وتفاصيل المشروع" : "Step 2: Project Specifications"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {isAr ? "كلما كانت المتطلبات أوضح، كان التقييم التقني والتقدير الزمني أدق." : "Provide structural context and specifications to tailor the architecture."}
              </p>
            </div>

            {/* Project Title */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                {isAr ? "عنوان أو اسم المشروع *" : "Project Title or Working Name *"}
              </label>
              <input
                type="text"
                required
                placeholder={isAr ? "مثال: نظام إدارة حجوزات العيادات الطبية" : "e.g., Enterprise Logistics Management REST API"}
                value={formData.projectTitle}
                onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  errors.projectTitle ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                }`}
              />
              {errors.projectTitle && (
                <span className="text-xs text-rose-500 mt-1 block">{errors.projectTitle}</span>
              )}
            </div>

            {/* Problem & Description */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                {isAr ? "المشكلة المراد حلها أو وصف الفكرة *" : "Problem to Solve or Idea Description *"}
              </label>
              <textarea
                rows={4}
                required
                placeholder={isAr ? "صف المشكلة التشغيلية أو الفكرة التي ترغب في بنائها..." : "Describe the operational workflow, problem to solve, or system you want to construct..."}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  errors.description ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                }`}
              />
              {errors.description && (
                <span className="text-xs text-rose-500 mt-1 block">{errors.description}</span>
              )}
            </div>

            {/* Project Goals & Core Features */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                {isAr ? "الأهداف والميزات الأساسية المتوقعة" : "Expected Key Features & Goals"}
              </label>
              <textarea
                rows={3}
                placeholder={isAr ? "مثال: 1. مصادقة آمنة للمستخدمين، 2. توليد تقارير PDF، 3. لوحة تحكم إحصائية" : "e.g., 1. User authentication with roles, 2. Automated PDF invoice generation, 3. Real-time telemetry dashboard"}
                value={formData.projectGoals}
                onChange={(e) => setFormData({ ...formData, projectGoals: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Project Stage & Target Platforms Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "مرحلة المشروع الحالية" : "Current Project Stage"}
                </label>
                <select
                  value={formData.projectStage}
                  onChange={(e) => setFormData({ ...formData, projectStage: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {projectStages.map((stage) => (
                    <option key={stage.id} value={stage.id}>
                      {isAr ? stage.labelAr : stage.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "الجمهور أو المستخدمين المستهدفين" : "Target Audience / Users"}
                </label>
                <input
                  type="text"
                  placeholder={isAr ? "مثال: موظفو الشركة، طلاب الجامعة، عملاء المتجر" : "e.g., Internal company employees, college students, consumers"}
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Target Platforms */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                {isAr ? "المنصات المطلوبة" : "Required Target Platforms"}
              </label>
              <div className="flex flex-wrap gap-2">
                {projectPlatforms.map((p) => {
                  const isChecked = formData.platforms.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handlePlatformToggle(p.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer flex items-center gap-1.5 ${
                        isChecked
                          ? "bg-sky-500 text-white border-sky-400"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3" />}
                      <span>{isAr ? p.labelAr : p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preferred Technologies & Reference URL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "التقنيات المفضلة (إن وجدت)" : "Preferred Technologies (if any)"}
                </label>
                <input
                  type="text"
                  placeholder={isAr ? "مثال: Java, Spring Boot, Next.js, Oracle" : "e.g., Java 21, Spring Boot, PostgreSQL, Next.js"}
                  value={formData.preferredTechnologies}
                  onChange={(e) => setFormData({ ...formData, preferredTechnologies: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "رابط مرجعي أو مستودع قائم (اختياري)" : "Reference URL / Repository (Optional)"}
                </label>
                <input
                  type="url"
                  placeholder="https://example.com or GitHub URL"
                  value={formData.referenceUrl}
                  onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.referenceUrl ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                  }`}
                />
                {errors.referenceUrl && (
                  <span className="text-xs text-rose-500 mt-1 block">{errors.referenceUrl}</span>
                )}
              </div>
            </div>

            {/* Contextual Service-Specific Questions */}
            {selectedService.contextualQuestions.length > 0 && (
              <div className="p-4 rounded-2xl bg-sky-50/40 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/50 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-700 dark:text-sky-300">
                  <ShieldCheck className="w-4 h-4 text-sky-500" />
                  <span>
                    {isAr
                      ? `أسئلة تفصيلية خاصة بخدمة: ${selectedService.ar.name}`
                      : `Contextual Questions for ${selectedService.name}`}
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedService.contextualQuestions.map((q) => {
                    const val = formData.contextualAnswers[q.id] || "";
                    const err = errors[`ctx_${q.id}`];

                    return (
                      <div key={q.id}>
                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                          {q.label} {q.required && "*"}
                        </label>
                        {q.type === "select" && q.options ? (
                          <select
                            value={val}
                            onChange={(e) => handleContextualChange(q.id, e.target.value)}
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                          >
                            <option value="">{q.placeholder}</option>
                            {q.options.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : q.type === "textarea" ? (
                          <textarea
                            rows={2}
                            placeholder={q.placeholder}
                            value={val}
                            onChange={(e) => handleContextualChange(q.id, e.target.value)}
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                        ) : (
                          <input
                            type="text"
                            placeholder={q.placeholder}
                            value={val}
                            onChange={(e) => handleContextualChange(q.id, e.target.value)}
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                        )}
                        {err && <span className="text-xs text-rose-500 mt-1 block">{err}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= STEP 3: BUDGET AND TIMELINE ================= */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isAr ? "الخطوة 3: الميزانية التقديرية والجدول الزمني" : "Step 3: Budget Range & Timeline"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {isAr ? "خيارات الميزانية هي نقاط توافق أولية وليست عروض أسعار نهائية ملزمة." : "Initial budget brackets assist in architecting the scope and milestones."}
              </p>
            </div>

            {/* Budget Range Radio Grid */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                {isAr ? "نطاق الميزانية التقديري" : "Estimated Budget Bracket"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {budgetRanges.map((range) => {
                  const isChecked = formData.budgetRange === range.id;
                  return (
                    <button
                      key={range.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, budgetRange: range.id })}
                      className={`p-3.5 rounded-xl border text-start transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? "border-sky-500 bg-sky-50/60 dark:bg-sky-950/40 ring-1 ring-sky-400"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/20 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                        {isAr ? range.labelAr : range.label}
                      </span>
                      <div
                        className={`w-4 h-4 rounded-full border shrink-0 mx-2 flex items-center justify-center ${
                          isChecked ? "border-sky-500 bg-sky-500 text-white" : "border-slate-400"
                        }`}
                      >
                        {isChecked && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "تاريخ البدء المرغوب" : "Desired Start Date"}
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "الموعد النهائي المستهدف للتسليم" : "Desired Completion Deadline"}
                </label>
                <input
                  type="date"
                  value={formData.targetDeadline}
                  onChange={(e) => setFormData({ ...formData, targetDeadline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Flexibility & Priority */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "مرونة الموعد النهائي" : "Deadline Flexibility"}
                </label>
                <select
                  value={formData.deadlineFlexibility}
                  onChange={(e) => setFormData({ ...formData, deadlineFlexibility: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="flexible">{isAr ? "مرن (الأولوية للجودة الهندسية)" : "Flexible (Quality prioritized)"}</option>
                  <option value="moderate">{isAr ? "معتدل (ضمن أسبوعين إضافيين)" : "Moderate (Within +/- 2 weeks)"}</option>
                  <option value="strict">{isAr ? "صارم (موعد حرج لا يقبل التأخير)" : "Strict / Hard Deadline"}</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "أولوية المراجعة" : "Project Priority"}
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {priorityLevels.map((p) => (
                    <option key={p.id} value={p.id}>
                      {isAr ? p.labelAr : p.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Transparent Disclaimer Box */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">
                {isAr ? "شفافية التسعير والاتفاق:" : "Pricing Policy Transparency:"}
              </span>
              <p>
                {isAr
                  ? "السعر النهائي وجدول التسليم يتم اعتمادهما بعد الاتفاق على المواصفات التقنية الكاملة ونطاق العمل، ولا يتم احتساب أي تكلفة قبل الموافقة الخطية الصريحة."
                  : "Final cost estimation and milestones are confirmed after requirement discovery. No commercial commitment is incurred simply by submitting this request."}
              </p>
            </div>
          </div>
        )}

        {/* ================= STEP 4: CLIENT CONTACT DETAILS ================= */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isAr ? "الخطوة 4: بيانات التواصل" : "Step 4: Contact Information"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {isAr ? "لن يتم استخدام هذه البيانات سوى للرد على استفسارك ومناقشة متطلبات المشروع." : "Your contact details will only be used to discuss and reply to this inquiry."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "الاسم الكامل *" : "Full Name *"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isAr ? "الاسم الكامل" : "Your Name"}
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.clientName ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                  }`}
                />
                {errors.clientName && (
                  <span className="text-xs text-rose-500 mt-1 block">{errors.clientName}</span>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "البريد الإلكتروني *" : "Email Address *"}
                </label>
                <input
                  type="email"
                  required
                  placeholder="client@example.com"
                  value={formData.clientEmail}
                  onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.clientEmail ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                  }`}
                />
                {errors.clientEmail && (
                  <span className="text-xs text-rose-500 mt-1 block">{errors.clientEmail}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "الشركة أو المؤسسة (اختياري)" : "Company / Organization (Optional)"}
                </label>
                <input
                  type="text"
                  placeholder={isAr ? "اسم الشركة أو الجامعة" : "Organization or University"}
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "وسيلة التواصل المفضلة" : "Preferred Communication Method"}
                </label>
                <select
                  value={formData.preferredCommunication}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      preferredCommunication: e.target.value as "email" | "whatsapp" | "phone",
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="email">{isAr ? "البريد الإلكتروني (Email)" : "Email"}</option>
                  <option value="whatsapp">{isAr ? "واتساب (WhatsApp)" : "WhatsApp"}</option>
                  <option value="phone">{isAr ? "مكالمة هاتفية (Phone Call)" : "Direct Phone Call"}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "رقم الهاتف أو حساب التواصل (اختياري)" : "Phone / Handle / WhatsApp Number (Optional)"}
                </label>
                <input
                  type="text"
                  placeholder="+20 128 667 7999"
                  value={formData.contactHandle}
                  onChange={(e) => setFormData({ ...formData, contactHandle: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "الدولة أو المنطقة الزمنية (اختياري)" : "Country or Timezone (Optional)"}
                </label>
                <input
                  type="text"
                  placeholder={isAr ? "مصر (GMT+2)" : "Egypt / GMT+2"}
                  value={formData.countryOrTimezone}
                  onChange={(e) => setFormData({ ...formData, countryOrTimezone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 5: NOTES & CONSENT ================= */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isAr ? "الخطوة 5: ملاحظات إضافية والموافقة" : "Step 5: Additional Information & Consent"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {isAr ? "أي تفاصيل أخرى أو تفضيلات لغوية ترغب في إضافتها." : "Any final remarks or preferences regarding communication language."}
              </p>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                {isAr ? "ملاحظات إضافية" : "Additional Notes or Clarifications"}
              </label>
              <textarea
                rows={3}
                placeholder={isAr ? "أي معلومات أو شروط خاصة ترغب في توضيحها..." : "Add any specific context, hosting restrictions, or questions..."}
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "لغة النقاش المفضلة" : "Preferred Language"}
                </label>
                <select
                  value={formData.preferredLanguage}
                  onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value as "en" | "ar" })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="en">English</option>
                  <option value="ar">العربية (Arabic)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {isAr ? "كيف تعرفت على ملفي الشخصي؟ (اختياري)" : "How did you find my portfolio? (Optional)"}
                </label>
                <input
                  type="text"
                  placeholder={isAr ? "GitHub / LinkedIn / توصية شخصية" : "GitHub / LinkedIn / Search / Referral"}
                  value={formData.referralSource}
                  onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.consentGiven}
                  onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
                  className="w-4 h-4 mt-0.5 rounded text-sky-500 border-slate-300 focus:ring-sky-400 cursor-pointer"
                />
                <span className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isAr ? (
                    <>
                      أوافق على معالجة البيانات المقدمة لغرض دراسة متطلبات المشروع والتواصل بخصوص هذا الطلب وفقاً لـ{" "}
                      <Link href="/privacy" target="_blank" className="text-sky-500 hover:underline">
                        إشعار الخصوصية
                      </Link>
                      .
                    </>
                  ) : (
                    <>
                      I consent to the collection and processing of my project specifications and contact details solely for evaluating and replying to this request in accordance with the{" "}
                      <Link href="/privacy" target="_blank" className="text-sky-500 hover:underline">
                        Privacy Notice
                      </Link>
                      .
                    </>
                  )}
                </span>
              </label>
              {errors.consentGiven && (
                <span className="text-xs text-rose-500 mt-1 block">{errors.consentGiven}</span>
              )}
            </div>
          </div>
        )}

        {/* ================= STEP 6: REVIEW AND SUBMIT ================= */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isAr ? "الخطوة 6: مراجعة الطلب وتأكيد الإرسال" : "Step 6: Review & Confirm Submission"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {isAr ? "راجع ملخص تفاصيل المشروع قبل الاعتماد النهائي للإرسال." : "Review your intake details. You may return to any step to make modifications."}
              </p>
            </div>

            {/* Summary Review Grid */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-slate-600 dark:text-slate-400 block font-mono text-xs uppercase">{isAr ? "الخدمة الأساسية" : "Primary Service"}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedService.name}</span>
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400 block font-mono text-xs uppercase">{isAr ? "عنوان المشروع" : "Project Title"}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{formData.projectTitle || "—"}</span>
                </div>
              </div>

              <div>
                <span className="text-slate-600 dark:text-slate-400 block font-mono text-xs uppercase mb-1">{isAr ? "وصف المشروع" : "Project Summary"}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{formData.description || "—"}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-slate-600 dark:text-slate-400 block font-mono text-xs uppercase">{isAr ? "الميزانية" : "Budget Bracket"}</span>
                  <span className="font-medium text-slate-900 dark:text-white">
                    {budgetRanges.find((b) => b.id === formData.budgetRange)?.label || formData.budgetRange}
                  </span>
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400 block font-mono text-xs uppercase">{isAr ? "الأولوية" : "Priority"}</span>
                  <span className="font-medium capitalize text-slate-900 dark:text-white">{formData.priority}</span>
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400 block font-mono text-xs uppercase">{isAr ? "المنصات" : "Platforms"}</span>
                  <span className="font-medium text-slate-900 dark:text-white">{formData.platforms.join(", ") || "Web"}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-slate-600 dark:text-slate-400 block font-mono text-xs uppercase">{isAr ? "الاسم" : "Client Name"}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{formData.clientName}</span>
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400 block font-mono text-xs uppercase">{isAr ? "البريد الإلكتروني" : "Client Email"}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{formData.clientEmail}</span>
                </div>
              </div>
            </div>

            {/* SLA Notice */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                {isAr
                  ? "سيتم تسجيل طلبك وتوليد رقم مرجعي رسمي مع الرد التقني خلال 24 ساعة عمل."
                  : "Upon submission, a unique reference code will be generated and logged. Technical review guaranteed within 24 business hours."}
              </span>
            </div>
          </div>
        )}

        {/* Action Controls Navigation */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              disabled={isSubmitting}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isAr ? "السابق" : "Previous"}</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 6 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-md shadow-sky-500/20 transition-all cursor-pointer"
            >
              <span>{isAr ? "التالي" : "Next Step"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{isAr ? "جاري المعالجة والإرسال..." : "Submitting Request..."}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{isAr ? "تأكيد إرسال طلب المشروع" : "Confirm & Submit Project Request"}</span>
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
