export interface CaseStudy {
  slug: string;
  ref: string;
  category: string;
  role: string;
  period: string;
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

export const caseStudies: CaseStudy[] = [
  {
    slug: "pres",
    ref: "REF — PRES",
    category: "PRIVACY PLATFORM",
    role: "Group TPM & Principal Enterprise Architect",
    period: "T-Mobile USA · 2022–Present",
    title: "PrES — Privacy Experience Services Platform",
    oneLiner:
      "Co-founded and architected T-Mobile's centralized privacy platform from a blank-sheet assessment — replacing fragmented manual processes with API-first infrastructure governing a $40M+ portfolio across 120M+ customers.",
    problem:
      "Privacy review sat in the critical path of every product launch across T-Mobile's 120M+ customer data estate. Compliance obligations were fragmenting across siloed workflows with no auditable, centralized infrastructure for CCPA, CPRA, or GDPR.",
    context:
      "Co-founded the Privacy Experience Services function from a blank-sheet assessment of existing gaps. Directed a 12-engineer team governing a $40M+ portfolio across 35+ cross-functional engineering, product, legal, and security teams. Established centralized, API-first privacy infrastructure to replace manual processes with a scalable, auditable platform.",
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
      { value: "30%", label: "faster time-to-market" },
      { value: "65%", label: "fewer incidents" },
      { value: "15%", label: "lower TCO" },
      { value: "35+", label: "teams onboarded" },
      { value: "$40M+", label: "portfolio governed" },
    ],
    lessons: [
      "DevOps budget came in significantly higher than projected — cost model for infrastructure should be validated earlier in the program",
      "Would engage cross-functional partners and Product/Program Managers proactively from day one rather than letting friction accumulate into prolonged conflicts",
    ],
  },
  {
    slug: "dsr-platform",
    ref: "REF — DSR",
    category: "IDENTITY & AI",
    role: "Group TPM & Principal Enterprise Architect",
    period: "T-Mobile USA · 2022–Present",
    title: "DSR Identity Resolution & AI-Powered Privacy Platform",
    oneLiner:
      "Designed and shipped an AI-powered operating model for Data Subject Rights — ML-based identity resolution across 120M+ subscribers, cutting operational costs 60% and driving a 5X engagement lift.",
    problem:
      "Fulfilling data subject rights requests was expensive, slow, and inconsistent. Identity resolution was unreliable across 120M+ subscribers, search rates were at 45%, and manual overhead was driving $9M+ in annual OpEx.",
    context:
      "Led the centralized DSR platform end-to-end across the full request lifecycle — intake, ML-based identity resolution, intelligent routing, automated fulfillment, and audit. Architected across 60 platforms and 4 IAM systems.",
    constraints: [
      "Regulatory fulfillment deadlines that don't move",
      "Cost had to come down without fulfillment rate or accuracy coming down with it",
    ],
    architecture:
      "Intake layer aligned to the enterprise digital layer with SSO spanning 4 IAMs. ML-based identity resolution mapped IAM ID to 8 additional attributes across data SORs (IAM, Billing, Marketing DB, Network DB) — fuzzy logic tuned to an 85% confidence threshold with 14 matching rules covering former vs. current customers, middle name variations, suffixes/prefixes, foreign characters, and business names. Data minimization applied: only relevant data distributed to each of the 60 platforms in scope. Orchestration brought in-house to break vendor lock-in; metadata stored locally. Async event-driven architecture replaced synchronous custom integrations. Platform features: AI-driven validation, intelligent routing, automatic deduplication, retry queues, auto-notification for failures, contextualized alerts, standardized error codes, automatic deletion verification, and pre-validation of Access reports. Sensitive data auto-masked and redacted. Splunk-based continuous monitoring with SLA-based alerts. DSR Onboarding Priority Score ranked 60+ applications by data volume, metadata elements, business criticality, and sensitive data. Full audit log table with timestamped activity from request submission to final confirmation.",
    decisions: [
      "Unified sign-on across 4 IAMs rather than maintaining separate intake paths — eliminated a major source of identity ambiguity at the front door",
      "Brought orchestration in-house instead of extending vendor contracts — reduced cost, cut the custom integration surface area, and removed a dependency slowing fulfillment changes",
      "Chose async event-driven fulfillment over synchronous custom integrations — lowered development time per integration and made the platform resilient to downstream slowness",
      "Tuned identity resolution confidence to 85% with 14 matching rules — captured legitimate matches a naive threshold would have missed, driving the 45%→86%→+96% YoY search rate improvement",
    ],
    tradeoffs: [
      "In-housing orchestration required upfront engineering investment and pulled the team from feature work — the long-term cost and stability gains justified it, but added short-term program risk",
      "Lower confidence threshold increased match rate but required the 14-rule framework to hold precision — more rules to maintain and audit over time",
      "Async architecture added operational complexity (retry queues, failure notifications, deduplication) that the team had to own",
    ],
    results: [
      { value: "+96%", label: "DSR search rate YoY" },
      { value: "60%", label: "op cost reduction" },
      { value: "5X", label: "engagement lift" },
      { value: "98%", label: "US/CA fulfillment rate" },
      { value: "120M+", label: "subscribers covered" },
    ],
    lessons: [
      "Would have introduced the DSR Onboarding Priority Score earlier — it became an audit finding in 2025 and retrofitting it added friction that proactive adoption would have avoided",
      "Would have built the Audit Log table 6 months earlier — adding audit trail functionality late in the delivery flow is significantly harder than designing for it from the start",
    ],
  },
  {
    slug: "privacy-dashboard",
    ref: "REF — DASHBOARD",
    category: "PRODUCT & PLATFORM",
    role: "Lead Architect & TPM",
    period: "T-Mobile USA · 2022–Present",
    title: "Privacy Dashboard & Project Genius Portfolio",
    oneLiner:
      "Launched a $15M+ consumer-facing privacy dashboard that turned consent management into a $300M+ revenue lever — 18% opt-in vs. a 10% KPI — while leading the broader $40M+ Project Genius portfolio.",
    problem:
      "Consent UX is usually built to satisfy a legal requirement, not to be used — and that shows up as low opt-in and zero revenue return. T-Mobile needed a privacy experience that was genuinely useful to subscribers while clearing a hard compliance deadline.",
    context:
      "Lead Architect and TPM for the $15M+ Privacy Dashboard enabling transparent consent management and self-service data controls for millions of T-Mobile customers. Simultaneously led the broader $40M+ Project Genius portfolio, managing 6 Senior Architects and boosting cross-team delivery productivity 25% through structured OKR governance and executive reporting.",
    constraints: [
      "Had to clear a hard KPI (10% opt-in) while staying genuinely consent-first, not dark-pattern-driven",
      "FCC consent decree deadline — non-negotiable compliance date",
      "Single UI/UX had to serve 3 T-Mobile brands, each with a different IAM",
    ],
    architecture:
      "PrES middleware services orchestrated consent writes to two backends: Customer DB and Network DB. Sprint-related consents published asynchronously to Customer DB; Kafka streamed those onward to Ads systems. Network DB consents propagated to Ads systems via batch files. A single UI/UX served all 3 T-Mobile brands despite each running a different IAM service, with an authorization interface to verify that a line is permitted to manage consents on behalf of other lines (PAH scenarios). Initially designed around eventual consistency between Customer DB and Network DB, but fell back to a synchronous interface calling both systems because caching wasn't available in time.",
    decisions: [
      "Explicitly scoped out Do Not Sell and Kids line (COPPA) legacy experiences — backend integrations and compliance assessments couldn't be completed within the timeline, scoping out was safer than rushing",
      "Scoped out Limit The Use consents and full Assisted Channel functionality — neither moved the needle on the FCC consent decree deadline, and the cost and complexity would have put the whole launch at risk",
      "Changed the UI/UX mid-program when cookie values were found not to propagate correctly from DuckDuckGo and Safari — caught during testing rather than in production",
    ],
    tradeoffs: [
      "Fell back from eventual consistency to synchronous dual-DB writes when caching didn't land in time — accepted latency cost to preserve correctness at launch",
      "Descoping Assisted Channel in full form and carrying legacy flows meant leaving work on the table, but was the right call to hit the compliance deadline without introducing unvetted integrations",
    ],
    results: [
      { value: "$15M+", label: "privacy dashboard investment" },
      { value: "18%", label: "consent opt-in vs. 10% KPI" },
      { value: "$300M+", label: "ad revenue enabled" },
      { value: "25%", label: "delivery productivity lift" },
      { value: "$40M+", label: "Project Genius portfolio" },
    ],
    lessons: [
      "Would invest in deeper investigation beyond A/B testing and POC when novel technology is introduced — the Adobe-based webpage stack had integration edge cases not caught until late in the cycle",
    ],
  },
  {
    slug: "ecpc",
    ref: "REF — ECPC",
    category: "CONSENT PLATFORM",
    role: "Group TPM",
    period: "T-Mobile USA · 2019–Present",
    title: "Enterprise Consents & Preference Center (ECPC)",
    oneLiner:
      "The consent and preference backbone every downstream privacy control reads from — 15+ upstream feed types, 76B+ records, 120M+ subscribers, at carrier scale.",
    problem:
      "No single, trustworthy source of truth for what a subscriber had consented to across T-Mobile's full enterprise data estate. Downstream systems — ads, marketing, sales, retail — were operating on stale or inconsistent consent signals.",
    context:
      "TPM for the system that classifies and tracks consent across the full enterprise data estate, serving every downstream privacy control across marketing, ads, retail, and care channels.",
    constraints: [
      "76B+ records — correctness errors are not a rounding issue at this scale",
      "Had to serve every downstream system without becoming the bottleneck itself",
    ],
    architecture:
      "Hub-and-spoke consent store with 15+ upstream feed types: 4 billing systems, device data, Federal and State Do-Not-Contact lists, marketing pipeline, phone opt-out, email opt-out, sales DNC, Do Not Sell signals, fraud detection, financial consents, public/scientific research consents, sensitive personal information consents, and biometric consents. Downstream consumers query ECPC via marketing API calls, ads system integrations, a Kafka stream to marketing, a last-mile check solution, and 6 distinct UI/UX API surfaces — plus event publish/consume patterns for near-real-time preference propagation.",
    decisions: [
      "Broke features horizontally (by capability layer) rather than vertically (by business domain) — kept the platform composable as new consent types were added",
      "Chose Kafka event-based distribution over file-based or direct API calls — decoupled producers from consumers and removed the synchronous bottleneck at scale",
      "Minimized data movement to Salesforce from 76B records down to 1.2B — filtered at the source rather than pushing the full estate downstream",
      "Built a shared Microapp deployed across all assisted channels (retail and care) — single consent UX, consistent behavior across brands",
      "JWT-based authentication for external customers, Entra ID for internal users — right tool for each trust boundary",
    ],
    tradeoffs: [
      "Cut scope by ~30% — deprioritized preferences, real-time marketing pipelines, and the legal rule-based UI in favor of legally required features ranked by value vs. effort",
      "Traded synchronous consent updates for optimistic responses with queue-based mutations — improved perceived latency but added complexity to the consistency model",
    ],
    results: [
      { value: "76B+→1.2B", label: "records pushed to Salesforce" },
      { value: "120M+", label: "subscribers covered" },
      { value: "15+", label: "upstream consent feed types" },
      { value: "35+", label: "business & IT units served" },
    ],
    lessons: [
      "GraphQL's flexibility became a liability — consumers could over-fetch or under-fetch in ways that created unpredictable load patterns. REST with well-defined contracts would have been the right call for this use case.",
    ],
  },
  {
    slug: "syncup-pets",
    ref: "REF — IOT",
    category: "IOT & PRODUCT",
    role: "Lead TPM & Architect",
    period: "T-Mobile USA · 2017–2022",
    title: "SyncUp Pets — IoT Product Platform",
    oneLiner:
      "Delivered the $20M+ SyncUp Pets IoT product line as Lead TPM and Architect — owning product strategy, system architecture, and go-to-market delivery across NB-IoT, MQTT, and LwM2M.",
    problem:
      "T-Mobile needed to bring a consumer IoT product to market on NB-IoT — a nascent protocol with limited tooling — while simultaneously managing a $25M+ CCPA compliance architecture program across 35+ business and IT units.",
    context:
      "Lead TPM and Architect for the $20M+ SyncUp Pets IoT product line, owning product strategy, system architecture, and go-to-market delivery with 30+ cross-functional stakeholders. Simultaneously led the $25M+ CCPA compliance architecture and ECPC platform rollout as single-threaded TPM across 35+ business and IT units.",
    constraints: [
      "NB-IoT protocol maturity — limited ecosystem tooling at the time of delivery",
      "Parallel CCPA compliance deadline running concurrently with IoT product launch",
      "30+ cross-functional stakeholders spanning product, engineering, network, and legal",
    ],
    architecture:
      "Full IoT platform on NB-IoT, MQTT, and LwM2M — covering device provisioning, telemetry ingestion, command/control, and real-time alerting. PERSONALIZE: add specifics on cloud platform (AWS/Azure/GCP), backend architecture for telemetry pipeline, and how the device management layer connected to T-Mobile's network infrastructure.",
    decisions: [
      "PERSONALIZE: key architectural or product decisions made during the SyncUp Pets build — e.g. protocol selection rationale, cloud vs. on-prem for telemetry, device management approach",
    ],
    tradeoffs: [
      "PERSONALIZE: what you traded off to ship on time — e.g. feature scope, NB-IoT coverage limitations, battery optimization vs. feature richness",
    ],
    results: [
      { value: "$20M+", label: "IoT product line" },
      { value: "$25M+", label: "CCPA/ECPC program" },
      { value: "NB-IoT", label: "MQTT · LwM2M" },
      { value: "35+", label: "business & IT units" },
    ],
    lessons: [
      "PERSONALIZE: one thing you'd do differently on SyncUp Pets",
    ],
  },
];
