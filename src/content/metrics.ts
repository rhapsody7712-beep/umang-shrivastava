export interface Metric {
  value: string;
  label: string;
}

// These are real, from my T-Mobile privacy portfolio. Update here only —
// every component that shows metrics reads from this file.
export const metrics: Metric[] = [
  { value: "$4B+", label: "ad revenue business enabled" },
  { value: "120M+", label: "subscribers in scope" },
  { value: "76B+", label: "PII records governed" },
  { value: "$40M+", label: "program portfolio" },
  { value: "60%", label: "DSR op cost reduction" },
  { value: "18%", label: "consent opt-in vs. 10% KPI" },
];
