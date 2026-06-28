export interface Metric {
  value: string;
  label: string;
}

// These are real, from my T-Mobile privacy portfolio. Update here only —
// every component that shows metrics reads from this file.
export const metrics: Metric[] = [
  { value: "76B+", label: "PII records governed" },
  { value: "120M+", label: "subscribers in scope" },
  { value: "$40M+", label: "program portfolio" },
  { value: "$3.5M", label: "DSR OpEx, down from $9M+" },
  { value: "65%", label: "fewer privacy incidents" },
  { value: "86%", label: "DSR search rate, from 45%" },
];
