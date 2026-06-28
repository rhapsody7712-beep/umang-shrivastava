export interface ExperienceItem {
  role: string;
  org: string;
  period?: string; // PERSONALIZE: add real dates if you want them shown
  summary: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Principal Privacy Architect & Group TPM",
    org: "T-Mobile USA",
    summary:
      "Own the centralized Data Subject Rights platform and the broader privacy portfolio end to end — a $40M+ program spanning 35+ teams, with six Senior Architects and TPMs reporting in. Set the technical direction and run the delivery machine behind it.",
    highlights: [
      "Architect and TPM on the same portfolio — not handed a design to deliver",
      "35+ cross-functional teams, 6 direct Senior Architect/TPM reports",
      "$40M+ program budget",
    ],
  },
  {
    role: "Development Manager / Solution Architect",
    org: "Ericsson — Luxembourg & USA",
    summary:
      "Led BSS/OSS billing and transformation programs for carrier clients across North America and Europe, moving between hands-on architecture and people management as each engagement required.",
    highlights: ["Carrier-scale BSS/OSS systems", "North America & Europe"],
  },
  {
    role: "Technology Consultant",
    org: "Accenture — Toronto",
    summary:
      "Delivered telecom transformation work across BSS/OSS systems for North American carrier clients.",
    highlights: ["BSS/OSS transformation", "North American carriers"],
  },
  {
    role: "Developer, DVCI",
    org: "Amdocs — Pune & Helsinki",
    summary:
      "Started in billing and transformation engineering for carrier clients across Asia Pacific and Europe — the foundation the rest of the career was built on.",
    highlights: ["Billing & transformation engineering", "APAC & Europe"],
  },
];

export interface Certification {
  name: string;
  status?: "in progress";
}

export const certifications: Certification[] = [
  { name: "SAFe CSPO/PM" },
  { name: "CSM" },
  { name: "Oracle GenAI Professional" },
  { name: "AWS SAA-C02" },
  { name: "CIPP/CIPM/CIPT", status: "in progress" },
  { name: "AIGP", status: "in progress" },
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "IIIT Allahabad",
};

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Domain",
    items: [
      "Privacy architecture",
      "Data subject rights",
      "Consent management",
      "Telecom BSS/OSS",
      "PII classification",
      "AI governance",
    ],
  },
  {
    label: "Practice",
    items: [
      "Technical program management",
      "Solution architecture",
      "Cross-team delivery (35+ teams)",
      "Vendor & platform strategy",
    ],
  },
];
