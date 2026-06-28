export interface CaseStudy {
  slug: string;
  ref: string;
  title: string;
  oneLiner: string;
  problem: string;
  context: string;
  constraints: string[];
  architecture: string;
  decisions: string[];
  tradeoffs: string[];
  results: { value: string; label: string }[];
  lessons: string[];
}

// PERSONALIZE: these four are scoped to what I have on record. Tighten the
// architecture/decisions sections with real specifics (diagrams, named
// technologies, specific tradeoffs you made) before this goes live — a
// recruiter reading "Architecture" wants the actual shape of the system,
// not a paragraph that could apply to any program.

export const caseStudies: CaseStudy[] = [
  {
    slug: "pres",
    ref: "REF — PRES",
    title: "PrES — Privacy Engineering Services",
    oneLiner:
      "Turned privacy review from a bottleneck every product team waited on into a platform they could self-serve against.",
    problem:
      "Privacy review sat in the critical path of every product launch, and the team doing it couldn't scale with demand.",
    context:
      "Co-founded the function and scaled it from 1 engineer to 20, across a portfolio big enough that ad-hoc review didn't hold up.",
    constraints: [
      "Hard compliance deadline with no room to slip",
      "Team credibility crisis — had to earn trust while building in parallel",
      "Cross-functional and vendor friction at every integration point",
    ],
    architecture:
      "Spring Boot / Java platform that abstracted the underlying T-Mobile systems behind standardized APIs and event consumption patterns. Delivered a self-service review workflow with automated compliance checks, exposing privacy capabilities — Consents, Contactability, DSR Access/Delete, and Orchestration — as discrete, independently deployable services.",
    decisions: [
      "Deliberately launched as lightweight proxy services first to build credibility and get a foot in the door, rather than shipping complex orchestration upfront and risking scale failures before trust was established",
      "Phased in async, event-driven patterns over tightly coupled synchronous architecture — Orchestration, Validations, and loose coupling came after the foundation was proven in production",
    ],
    tradeoffs: [
      "Quick onboarding of resources to hit the compliance deadline meant accepting tech debt and late-night deployment calls",
      "Cutting vendor and cross-functional dependencies fast was the right call — but if any piece hadn't shipped, the team would have faced both non-compliance risk and a deeper credibility loss",
      "Breaking the status quo required disproportionate change management effort: more time managing process alignment than engineering execution",
    ],
    results: [
      { value: "1→20", label: "engineers on the team" },
      { value: "30%", label: "faster time-to-market" },
      { value: "15%", label: "lower total cost of ownership" },
    ],
    lessons: [
      "DevOps budget came in significantly higher than projected — cost model for infrastructure should be validated earlier in the program",
      "Would engage cross-functional partners and Product/Program Managers proactively from day one rather than letting friction accumulate into prolonged conflicts",
    ],
  },
  {
    slug: "ecpc",
    ref: "REF — ECPC",
    title: "Enterprise Consents & Preference Center (ECPC)",
    oneLiner:
      "The consent and preference backbone every downstream privacy control reads from — at carrier scale.",
    problem:
      "No single, trustworthy source of truth for what counted as PII or what a given subscriber had consented to, across a 120M+ subscriber base.",
    context:
      "Architected the system that classifies and tracks consent across the full enterprise data estate.",
    constraints: [
      "76B+ records — correctness errors are not a rounding issue at this scale",
      "Had to serve every downstream system without becoming the bottleneck itself",
    ],
    architecture:
      "Hub-and-spoke consent store with 15+ upstream feed types flowing in: 4 billing systems, device data, Federal and State Do-Not-Contact lists, marketing pipeline, phone opt-out, email opt-out, sales DNC, Do Not Sell signals, fraud detection, financial consents, public/scientific research consents, sensitive personal information consents, and biometric consents. Downstream consumers query ECPC via marketing API calls, ads system integrations, a Kafka stream to marketing, a last-mile check solution, and 6 distinct UI/UX API surfaces — plus event publish/consume patterns for near-real-time preference propagation.",
    decisions: [
      "Broke features horizontally (by capability layer) rather than vertically (by business domain) — kept the platform composable as new consent types were added",
      "Chose Kafka event-based distribution over file-based or direct API calls — decoupled producers from consumers and removed the synchronous bottleneck at scale",
      "Minimized data movement to Salesforce from 76B records down to 1.2B — filtered at the source rather than pushing the full estate and letting downstream sort it",
      "Built a shared Microapp deployed across all assisted channels (retail and care) instead of per-channel implementations — single consent UX, consistent behavior",
      "JWT-based authentication for external customers, Entra ID for internal users — right tool for each trust boundary without forcing a single auth model across both",
    ],
    tradeoffs: [
      "Cut scope by ~30% — deprioritized adding preferences, real-time marketing pipelines, and the legal rule-based UI in favor of legally required features ranked by value vs. effort",
      "Traded synchronous consent updates for optimistic responses with queue-based mutations — improved perceived latency significantly but added complexity to the consistency model",
    ],
    results: [
      { value: "76B+→1.2B", label: "records pushed to Salesforce" },
      { value: "120M+", label: "subscribers covered" },
    ],
    lessons: [
      "GraphQL's flexibility became a liability — consumers could over-fetch or under-fetch in ways that created unpredictable load patterns. REST with well-defined contracts would have been the right call for this use case.",
    ],
  },
  {
    slug: "privacy-dashboard",
    ref: "REF — DASHBOARD",
    title: "Privacy Dashboard",
    oneLiner:
      "The consumer-facing consent experience that turned compliance into a revenue lever.",
    problem:
      "Consent UX is usually built to satisfy a legal requirement, not to be used — and that shows up as low opt-in.",
    context:
      "Built the dashboard subscribers use to manage their own data and ad preferences, with an explicit opt-in target attached.",
    constraints: [
      "Had to clear a hard KPI (10% opt-in) while staying genuinely consent-first, not dark-pattern-driven",
    ],
    architecture:
      "PrES middleware services orchestrated consent writes to two backends: Customer DB and Network DB. Sprint-related consents published asynchronously to Customer DB; Kafka streamed those consents onward to Ads systems. Network DB consents propagated to Ads systems via batch files. A single UI/UX served all 3 T-Mobile brands despite each running a different IAM service, with an authorization interface to verify that a line is permitted to manage consents on behalf of other lines (PAH scenarios). Initially designed around eventual consistency between Customer DB and Network DB, but had to fall back to a synchronous interface calling both systems because caching wasn't available in time.",
    decisions: [
      "Deliberately carried the legacy experience for Do Not Sell and Kids line (COPPA) consents — backend integrations and compliance assessments couldn't be completed within the timeline, so they were explicitly scoped out rather than rushed",
      "Scoped out Limit The Use consents and full Assisted Channel functionality — neither would move the needle on the FCC consent decree deadline, and the cost and complexity would have put the whole launch at risk",
      "Changed the UI/UX mid-program when cookie values were found not to propagate correctly from DuckDuckGo and Safari — caught during testing rather than in production",
    ],
    tradeoffs: [
      "Fell back from eventual consistency to synchronous dual-DB writes when caching didn't land in time — accepted the latency cost to preserve correctness at launch",
      "Descoping Assisted Channel in full form and carrying legacy COPPA/Do Not Sell flows meant leaving work on the table, but it was the right call to hit the compliance deadline without introducing unvetted integrations",
    ],
    results: [
      { value: "$300M+", label: "ad revenue enabled" },
      { value: "18%", label: "opt-in rate vs. 10% KPI target" },
    ],
    lessons: [
      "Would invest in deeper investigation beyond A/B testing and POC when novel technology is introduced — the Adobe-based webpage stack for Privacy Dashboard had integration edge cases that weren't caught until late in the cycle",
    ],
  },
  {
    slug: "dsr-platform",
    ref: "REF — DSR",
    title: "Data Subject Rights Platform",
    oneLiner:
      "The centralized platform handling every access, deletion, and correction request — at a fraction of its old cost.",
    problem:
      "Fulfilling data subject rights requests was expensive, slow to find the right data, and inconsistent across teams.",
    context:
      "Lead the centralized DSR platform end to end, across the full request lifecycle — intake, identity resolution, fulfillment, audit.",
    constraints: [
      "Regulatory fulfillment deadlines that don't move",
      "Cost had to come down without fulfillment rate or accuracy coming down with it",
    ],
    architecture:
      "Intake layer aligned to the enterprise digital layer with a single sign-on experience spanning 4 different IAMs. Identity resolution mapped IAM ID to 8 additional attributes and connected data SORs (IAM, Billing, Marketing DB, Network DB) to resolve identity with confidence — fuzzy logic for name matching tuned to an 85% threshold with 14 rules covering former vs. current customers, middle name variations, suffixes/prefixes, foreign characters, and business names. Data minimization principles applied: only relevant data distributed to each of the 60 platforms in scope. Orchestration and fulfillment flows brought in-house to break vendor lock-in; metadata stored locally to reduce external dependencies. Async event-driven architecture throughout — replaced synchronous custom integrations. Platform features: automatic deduplication, auto-notification for failed requests, contextualized alerts with standardized error codes, retry queues, automatic deletion verification, and pre-validation of Access reports. Sensitive data masked and redacted automatically. Splunk-based continuous monitoring with SLA-based alerts; fulfillment tracked at the individual application level. Automated UI testing via Selenium and Karate frameworks. DSR Onboarding Priority Score created to rank the 60+ applications by data volume, metadata element count, business function criticality, and sensitive data presence. Full audit log table capturing every timestamped event from customer request submission through final confirmation.",
    decisions: [
      "Unified sign-on across 4 IAMs rather than maintaining separate intake paths — eliminated a major source of identity ambiguity at the front door",
      "Brought orchestration in-house instead of extending vendor contracts — reduced cost, cut the custom integration surface area, and removed a key dependency that was slowing fulfillment changes",
      "Chose async event-driven fulfillment over synchronous custom integrations — lowered development time per integration and made the platform resilient to downstream slowness",
      "Tuned identity resolution confidence threshold to 85% with 14 matching rules rather than a single high-confidence threshold — the rules (middle name, suffixes, foreign characters, business names) captured legitimate matches that a naive threshold would have missed, driving the 45%→86% search rate improvement",
    ],
    tradeoffs: [
      "In-housing orchestration required significant upfront engineering investment and pulled the team away from feature work — the long-term cost and stability gains justified it, but it added program risk in the short term",
      "Lowering the identity confidence threshold to 85% increased match rate but required the 14-rule framework to hold precision — more rules to maintain and audit over time",
      "Async architecture added operational complexity (retry queues, failure notifications, deduplication logic) that the team had to own; the cost and latency gains were worth it but came with a higher engineering surface to monitor",
    ],
    results: [
      { value: "$9M+ → $3.5M", label: "annual OpEx" },
      { value: "65%", label: "fewer incidents" },
      { value: "98%", label: "US/California fulfillment rate" },
      { value: "45%→86%", label: "data search rate" },
    ],
    lessons: [
      "Would have introduced the DSR Onboarding Priority Score earlier — it became an audit finding in 2025 and retrofitting it added friction that proactive adoption would have avoided",
      "Would have built the Audit Log table 6 months earlier — adding audit trail functionality late in the delivery flow is significantly harder than designing for it from the start",
    ],
  },
];
