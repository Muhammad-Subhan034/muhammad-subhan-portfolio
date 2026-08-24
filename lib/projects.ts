export type Category =
  | "HR & Recruiting"
  | "EdTech"
  | "Sales"
  | "Legal"
  | "Finance"
  | "Agentic"
  | "Voice AI"
  | "Multimodal"
  | "Creator Tools"
  | "Career Coaching";

export const CATEGORY_COLOR: Record<Category, string> = {
  "HR & Recruiting": "var(--cat-hr)",
  EdTech: "var(--cat-edtech)",
  Sales: "var(--cat-sales)",
  Legal: "var(--cat-legal)",
  Finance: "var(--cat-finance)",
  Agentic: "var(--cat-agentic)",
  "Voice AI": "var(--cat-voice)",
  Multimodal: "var(--cat-multimodal)",
  "Creator Tools": "var(--cat-creator)",
  "Career Coaching": "var(--cat-career)",
};

export type Project = {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  highlights: string[];
  liveUrl: string;
  repoUrl: string;
  preview: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "hireflow",
    name: "Hireflow",
    category: "HR & Recruiting",
    tagline: "Resume-to-role scoring with a human always on the trigger",
    description:
      "A trained logistic-regression classifier scores resume-to-role fit from real extracted features, an LLM writes the plain-language rationale, and a bias audit checks the four-fifths rule live against synthetic historical data.",
    highlights: [
      "Real trained classifier (sklearn, TS-reimplemented inference)",
      "Bias/fairness audit with a genuine disparate-impact finding",
      "Human-in-the-loop pipeline board — never auto-rejects",
    ],
    liveUrl: "https://hireflow-recruiting-agent.vercel.app",
    repoUrl: "https://github.com/Muhammad-Subhan034/hireflow-recruiting-agent",
    preview: "/previews/hireflow.png",
  },
  {
    slug: "mentara",
    name: "Mentara",
    category: "EdTech",
    tagline: "A Socratic tutor that never gives the answer outright",
    description:
      "Diagnoses which algebra concept a student is shaky on, teaches it one guiding question at a time, and A/B tests two real hint strategies against whether the next answer is actually correct.",
    highlights: [
      "Verified live: the LLM genuinely refuses to give direct answers",
      "Two hint strategies A/B tested on real checkpoint accuracy",
      "Live mastery heatmap computed from real session data",
    ],
    liveUrl: "https://mentara-tutoring-agent.vercel.app",
    repoUrl: "https://github.com/Muhammad-Subhan034/mentara-tutoring-agent",
    preview: "/previews/mentara.png",
  },
  {
    slug: "prospex",
    name: "Prospex",
    category: "Sales",
    tagline: "Outreach that reads like you wrote it",
    description:
      "Personalizes cold outreach per lead (bring your own via CSV), and routes replies by a trained TF-IDF + logistic regression intent classifier — buying, not now, or reject — with high-value accounts always held for human review.",
    highlights: [
      "Real CSV lead upload, not a hardcoded contact list",
      "Trained reply-intent classifier, held out at the template level",
      "Full audit trail of every autonomous action",
    ],
    liveUrl: "https://prospex-sdr-agent.vercel.app",
    repoUrl: "https://github.com/Muhammad-Subhan034/prospex-sdr-agent",
    preview: "/previews/prospex.png",
  },
  {
    slug: "redline",
    name: "Redline",
    category: "Legal",
    tagline: "Redlines that cite their source",
    description:
      "Upload a real contract — PDF, DOCX, or a photo of a scanned page — and get clause-by-clause classification, risk scoring against a real 8-clause playbook, and a suggested redline that always links back to the exact standard it deviates from.",
    highlights: [
      "Real file upload: PDF, DOCX, and vision-model OCR for scans",
      "8-class clause-type classifier, honestly evaluated",
      "Every risk flag traces to a specific playbook clause",
    ],
    liveUrl: "https://redline-contract-agent.vercel.app",
    repoUrl: "https://github.com/Muhammad-Subhan034/redline-contract-agent",
    preview: "/previews/redline.png",
  },
  {
    slug: "ledgerly",
    name: "Ledgerly",
    category: "Finance",
    tagline: "Trust the match, not just the extraction",
    description:
      "Extracts line items from a real invoice or receipt (PDF, DOCX, or photo) via vision-model extraction, matches it to a purchase order on file, and only auto-approves when a trained model's confidence clears a threshold you set.",
    highlights: [
      "Real vision-language extraction, math-consistency cross-checked",
      "Trained approve/escalate/reject classifier, 3-class, honestly scored",
      "A genuinely configurable auto-approve confidence threshold",
    ],
    liveUrl: "https://ledgerly-invoice-agent.vercel.app",
    repoUrl: "https://github.com/Muhammad-Subhan034/ledgerly-invoice-agent",
    preview: "/previews/ledgerly.png",
  },
  {
    slug: "verascope",
    name: "Verascope",
    category: "Agentic",
    tagline: "Ask it anything. It shows its work.",
    description:
      "A plan/search/verify/write research agent: real keyless Wikipedia retrieval, and every claim independently checked against its source by an NLI entailment model before you see it — with a live faithfulness score, not a promise.",
    highlights: [
      "Independent NLI verifier — never grades its own homework",
      "Found & fixed two real bugs: a search-relevance miss and an NLI cold-start timeout",
      "Live evals computed from every real question asked, not a fixed benchmark",
    ],
    liveUrl: "https://verascope-research-agent.vercel.app",
    repoUrl: "https://github.com/Muhammad-Subhan034/verascope-research-agent",
    preview: "/previews/verascope.png",
  },
  {
    slug: "zaban",
    name: "Zaban",
    category: "Voice AI",
    tagline: "Mix your languages. It'll keep up.",
    description:
      "A real Urdu-English code-switching voice assistant — and a genuine fix for a real Whisper limitation: it confuses spoken Urdu for Hindi and transcribes in the wrong script. Detected and corrected automatically, verified against true/false test clips.",
    highlights: [
      "A real, verified bug fix in off-the-shelf Whisper, not a claimed one",
      "Replies generated in the same mixed register the user spoke",
      "Live monitoring on how often the script-correction actually fires",
    ],
    liveUrl: "https://zaban-voice-assistant.vercel.app",
    repoUrl: "https://github.com/Muhammad-Subhan034/zaban-voice-assistant",
    preview: "/previews/zaban.png",
  },
  {
    slug: "reelmind",
    name: "Reelmind",
    category: "Multimodal",
    tagline: "Skip the scrubbing",
    description:
      "Real client-side audio extraction from an uploaded video (no server-side ffmpeg), Whisper transcription with real timestamps, LLM-drafted chapters, and every chapter checked against its transcript segment by the same NLI verifier as Verascope.",
    highlights: [
      "Browser-native audio extraction via captureStream() + MediaRecorder",
      "Fixed a real bug: LLMs can't reliably reproduce exact decimal timestamps",
      "Reuses Verascope's faithfulness technique rather than reinventing it",
    ],
    liveUrl: "https://reelmind-video-agent.vercel.app",
    repoUrl: "https://github.com/Muhammad-Subhan034/reelmind-video-agent",
    preview: "/previews/reelmind.png",
  },
  {
    slug: "clipforge",
    name: "Clipforge",
    category: "Creator Tools",
    tagline: "One long video. A dozen short ones.",
    description:
      "Real word-level Whisper transcription, an LLM that picks the clip-worthy moments, ffmpeg.wasm reframing (blur-pad, not naive cropping) with burned-in synced captions, procedurally generated royalty-free music, and a trained hook-score classifier — all rendered client-side.",
    highlights: [
      "A genuine WebGL 3D hero (React Three Fiber), not a 2D mockup",
      "Scoped down from the original ask: real repurposing tools, not copyright-detection evasion",
      "Music synthesized from scratch via Web Audio — zero licensing risk",
    ],
    liveUrl: "https://clipforge-shorts-agent.vercel.app",
    repoUrl: "https://github.com/Muhammad-Subhan034/clipforge-shorts-agent",
    preview: "/previews/clipforge.png",
  },
  {
    slug: "gradlift",
    name: "Gradlift",
    category: "Career Coaching",
    tagline: "Know exactly where you belong in your career",
    description:
      "A university capstone, not a weekend build: real resume parsing, FAISS + SentenceTransformers semantic matching against 34 career archetypes, a live career-trajectory graph, skill-gap analysis, and an ATS resume generator, backed by a genuinely production-grade FastAPI stack — JWT auth, rate limiting, audit logging, Alembic migrations.",
    highlights: [
      "Took over an existing live deployment — found and fixed a real production outage (a CORS/CSRF platform edge case) plus a permanent-lockout account-security bug, not a fresh build",
      "3D shader hero (React Three Fiber): a GLSL-driven career-constellation, hand-written fresnel glow and flowing trajectory-path shaders, not lit meshes",
      "Self-clearing 15-minute login lockout replacing a bug where 5 wrong guesses at anyone's username permanently disabled their account",
    ],
    liveUrl: "https://aicareeradvisor.space",
    repoUrl: "https://github.com/Muhammad-Subhan034/FYP-AI-Career-Advisor",
    preview: "/previews/gradlift.png",
  },
];
