/**
 * Privacy-friendly event and conversion tracking utility
 * Zero personally identifiable information (PII) is tracked.
 */

export type AnalyticsCategory = 
  | "Navigation"
  | "Service"
  | "Project"
  | "ServiceRequest"
  | "Contact";

export interface AnalyticsEvent {
  category: AnalyticsCategory;
  action: string;
  label?: string;
  value?: number;
}

export function trackEvent(
  category: AnalyticsCategory,
  action: string,
  label?: string,
  value?: number
) {
  // Safe console debug in development
  if (process.env.NODE_ENV === "development") {
    // Structured client debug
    console.debug(`[Analytics] [${category}] ${action}${label ? ` -> ${label}` : ""}`);
  }

  // Google Analytics gtag support if configured via window.gtag
  if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
    try {
      (window as unknown as { gtag: Function }).gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } catch {
      // Ignore tracker errors
    }
  }

  // Custom DOM custom event for listeners / local diagnostics
  if (typeof window !== "undefined") {
    try {
      const event = new CustomEvent("portfolio_analytics", {
        detail: { category, action, label, value, timestamp: Date.now() },
      });
      window.dispatchEvent(event);
    } catch {
      // Ignore
    }
  }
}
