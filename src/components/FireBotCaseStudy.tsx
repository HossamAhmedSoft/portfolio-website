"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Cpu, 
  Flame, 
  Radio, 
  MonitorPlay, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  ExternalLink,
  Code,
  ShieldCheck,
  Zap,
  Activity
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function FireBotCaseStudy() {
  const { t, isAr } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string>("/projects/firebot/04-control-room.png");

  const telemetryMetrics = [
    { 
      label: isAr ? "المتحكم الدقيق" : "Microcontroller", 
      value: "Arduino Mega / Uno", 
      detail: isAr ? "معالجة الحساسات بالزمن الفعلي" : "Real-time sensor loop" 
    },
    { 
      label: isAr ? "بث الكاميرا البصرية" : "Vision Streamer", 
      value: "ESP32-CAM (MJPEG)", 
      detail: isAr ? "بث الفيديو عبر سوكت HTTP/TCP" : "HTTP/TCP video socket" 
    },
    { 
      label: isAr ? "طبقة نقل البيانات" : "Telemetry Layer", 
      value: "WebSockets & Node.js", 
      detail: isAr ? "جسر ثنائي الاتجاه للحالة" : "Bidirectional state bridge" 
    },
    { 
      label: isAr ? "الحساسات الفيزيائية" : "Physical Sensors", 
      value: "Flame Array + Ultrasonic", 
      detail: isAr ? "مسح اتجاهي متعدد الزوايا" : "Multi-angle directional scan" 
    }
  ];

  const galleryImages = [
    { 
      src: "/projects/firebot/04-control-room.png", 
      title: isAr ? "غرفة التحكم عبر الويب" : "Web Control Room & Telemetry", 
      caption: isAr ? "واجهة المتصفح الحية لعرض تحكم المحركات ومؤشرات الحساسات وبث الكاميرا" : "Live browser dashboard displaying motor controls, telemetry dials, and video feed" 
    },
    { 
      src: "/projects/firebot/02-dashboard.png", 
      title: isAr ? "لوحة تحليلات النظام" : "System Analytics Dashboard", 
      caption: isAr ? "نظرة عامة على عتبات الحساسات وحالة العتاد والمتغيرات البيئية" : "Sensor thresholds, hardware status, and environmental parameters overview" 
    },
    { 
      src: "/projects/firebot/deployment.png", 
      title: isAr ? "بنية التوصيل والتشغيل الفعلي" : "Physical Deployment Architecture", 
      caption: isAr ? "التوصيل البيني للعتاد: المتحكمات، درايفرات المحركات، ESP32، وجسر السيرفر" : "Hardware interconnection: Microcontrollers, motor drivers, ESP32, and server bridge" 
    },
    { 
      src: "/projects/firebot/activity.png", 
      title: isAr ? "مخطط اتخاذ القرار بالفيرموير" : "Firmware Decision Workflow", 
      caption: isAr ? "منطق آلة الحالة لتتبع المسار، ورصد اللهب، وتفادي العوائق، وإجراءات الإخماد" : "State machine logic for line tracking, flame detection, obstacle bypass, and extinguishing" 
    }
  ];

  return (
    <section id="firebot-case-study" className="py-20 bg-slate-50/60 dark:bg-[#0B0F19]/60 border-y border-slate-200 dark:border-slate-800/80 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image 
                src="/assets/branding/troy-developers-logo.png" 
                alt="Troy Developers Emblem" 
                width={48}
                height={48}
                loading="lazy"
                className="w-12 h-12 rounded-full border-2 border-sky-400/50 shadow-md shadow-sky-500/20 bg-slate-900 shrink-0 object-cover" 
              />
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                  <Zap className="w-3 h-3 text-amber-500" />
                  <span>{isAr ? "فريق TROY DEVELOPERS · مشروع العتاد المميز" : "TROY DEVELOPERS · SIGNATURE HARDWARE PROJECT"}</span>
                </div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.firebot.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mt-2">
              {t.firebot.subtitle}
            </p>
          </div>

          <a
            href="https://github.com/HossamAhmedSoft/arduino-robotics-and-embedded-systems"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-sky-500 shadow-sm transition-all shrink-0"
          >
            <span>{isAr ? "عرض مستودع السيرفر والفيرموير" : "View Server & Firmware Repo"}</span>
            <ExternalLink className="w-4 h-4 text-sky-500" />
          </a>
        </div>

        {/* Telemetry Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {telemetryMetrics.map((item, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">{item.label}</div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-1">{item.value}</div>
              <div className="text-xs text-sky-600 dark:text-sky-400 font-medium mt-0.5">{item.detail}</div>
            </div>
          ))}
        </div>

        {/* Deep Dive Grid: Gallery + Architecture Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
              <Image
                src={selectedImage}
                alt="Troy FireBot System Visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                loading="lazy"
                className="object-contain bg-slate-950"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-4 text-white z-10">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-500/80 text-white mx-2">
                  {isAr ? "معاينة حية" : "Live Capture"}
                </span>
                <span className="text-sm font-medium">
                  {galleryImages.find(img => img.src === selectedImage)?.caption}
                </span>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img.src)}
                  aria-label={`Select ${img.title} view`}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === img.src
                      ? "border-sky-500 scale-95 shadow-md shadow-sky-500/20"
                      : "border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 25vw, 15vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Architecture Code Snippet (Firmware State Loop) */}
            <div className="p-4 rounded-xl bg-slate-900 dark:bg-black border border-slate-800 text-slate-300 font-mono text-xs overflow-x-auto text-left" dir="ltr">
              <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5 text-sky-400">
                  <Code className="w-3.5 h-3.5" />
                  <span>firebot.ino (Microcontroller State Loop)</span>
                </span>
                <span className="text-[10px]">C++ / Arduino AVR</span>
              </div>
              <pre className="text-[11px] leading-relaxed text-slate-300">
{`void loop() {
  readFlameSensors();   // Triangulate priority flame vector
  readUltrasonic();     // Scan obstacle safety envelope
  
  if (flameDetected && flameDistance < DANGER_THRESHOLD) {
    stopMotors();
    alignNozzleToVector(flameAngle);
    triggerWaterPumpRelay(EXTINGUISH_MS);
    broadcastTelemetry(STATUS_EXTINGUISHING);
  } else {
    trackNavigationalLine(); // Infrared reflectance loop
    broadcastTelemetry(STATUS_PATROLLING);
  }
}`}
              </pre>
            </div>
          </div>

          {/* Technical Implementation Breakdown (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* System Breakdown Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-sky-500" />
                <span>{isAr ? "كيف يعمل النظام تقنياً" : "How the System Operates"}</span>
              </h3>

              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <p>
                    <strong className="text-slate-900 dark:text-white">
                      {isAr ? "معالجة الحساسات على العتاد: " : "Edge Sensor Processing: "}
                    </strong>
                    {isAr 
                      ? "يقرأ Arduino مصفوفة حساسات اللهب بالأشعة تحت الحمراء، والمسافة عبر الموجات فوق الصوتية، وحساسات تتبع المسار عبر حلقات برمجية آمنة." 
                      : "Arduino reads infrared flame array angles, ultrasonic distance, and reflectance sensors via interrupt-safe loops."}
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <p>
                    <strong className="text-slate-900 dark:text-white">
                      {isAr ? "بث الفيديو ونقل القياسات: " : "Video & Telemetry Transmit: "}
                    </strong>
                    {isAr 
                      ? "تبث كاميرا ESP32-CAM فيديو MJPEG بصرياً مع ترحيل حزم بيانات الحساسات المشفرة عبر جسر WebSockets مخصص." 
                      : "ESP32-CAM broadcasts optical MJPEG video while relaying serialized sensor status packets over a dedicated WebSocket bridge."}
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <p>
                    <strong className="text-slate-900 dark:text-white">
                      {isAr ? "غرفة التحكم المركزية بالويب: " : "Central Web Control Room: "}
                    </strong>
                    {isAr 
                      ? "يقوم خادم Node.js بتشغيل واجهة العمليات، ورسم مؤشرات الحساسات بالزمن الحقيقي، ومعالجة أوامر التدخل اليدوي بزمن استجابة فائق." 
                      : "Node.js server serves the operational interface, plotting real-time sensor dials and handling low-latency operator commands."}
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </div>
                  <p>
                    <strong className="text-slate-900 dark:text-white">
                      {isAr ? "الإخماد والتوجيه الدقيق: " : "Targeted Actuation: "}
                    </strong>
                    {isAr 
                      ? "يتحكم درايفر L298N بمحركات الحركة ذات العزم العالي، بينما يقوم موديول الريلاي بتشغيل مضخة الإطفاء الغاطسة بجهد 12V." 
                      : "L298N H-Bridge controls high-torque DC drive motors; relay module actuates the submersible 12V firefighting pump."}
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Implementation vs Prototype Status Card */}
            <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-3">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{isAr ? "إفصاح هندسي شفاف عن حالة المشروع" : "Transparent Engineering Disclosure"}</span>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isAr ? "موثق على العتاد: " : "Hardware Verified: "}</strong>
                    {isAr 
                      ? "تم بناء وتعيير واختبار نظام التتبع الذاتي للمسار وتفادي العوائق فيزيائياً في مسابقة RoboCup MICA Egypt 2023." 
                      : "Autonomous line-following navigation and obstacle avoidance were physically built, calibrated, and field-tested in the RoboCup MICA Egypt 2023 competition."}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isAr ? "موثق في الاتصال: " : "Telemetry Verified: "}</strong>
                    {isAr 
                      ? "لوحة تحكم Node.js عبر WebSockets وجسر الاتصال بالسيريال يعملان بكفاءة في اختبارات الشبكة المحلية." 
                      : "Node.js WebSocket dashboard and serial-bridge communication function cleanly in local network trials."}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isAr ? "وحدة تجريبية: " : "Experimental Module: "}</strong>
                    {isAr 
                      ? "نظام الرؤية الحاسوبية بالذكاء الاصطناعي لكشف الأجسام هو نموذج أولي تجريبي للتقييم، وليس نظام إطفاء صناعي منشور." 
                      : "The AI computer vision detection subsystem is an experimental prototype implemented for evaluation, not a deployed industrial fire-suppression system."}
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
