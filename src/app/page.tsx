"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Trophy,
  Brain,
  Check,
  Cloud,
  Copy,
  Database,
  Download,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  Monitor,
  Code2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG — edit these first                                          */
/* ------------------------------------------------------------------ */
const PROFILE = {
  name: "Ultimate Ngobeni",
  title: "Software Engineer",
  subtitle: "BSc Honours Candidate · Computer Science & Informatics",
  email: "ngobeniultimate@gmail.com",
  phone: "+27 76 328 7936",
  location: "South Africa · Open to relocation & remote",
  linkedin: "https://www.linkedin.com/in/ultimate-ngobeni-156b1a224/",
  github: "https://github.com/Ultimate458-non",
  resume: "/Ultimate-Ngobeni-CV.pdf", // TODO: put the PDF in /public
};

/* ------------------------------------------------------------------ */
/*  Brand icons (lucide no longer ships these)                         */
/* ------------------------------------------------------------------ */
const GithubIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);
const LinkedinIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const STATS = [
  { value: "Top 15%", label: "Academic achiever · Golden Key" },
  { value: "100+", label: "Students served by ITSL platform" },
  { value: "4,840", label: "Headlines used to fine-tune FinBERT" },
  { value: "AWS", label: "AI Practitioner: Foundations (trained)" },
];

type Project = {
  id: string;
  name: string;
  role: string;
  stack: string[];
  problem: string;
  solution: string[];
  impact: string[];
};

const PROJECTS: Project[] = [
  {
    id: "itsl",
    name: "ITSL Session Management System",
    role: "Lead Developer · Honours capstone",
    stack: ["React", "Supabase", "PostgreSQL", "Deno Edge Functions"],
    problem:
      "A service-learning module coordinated 100+ students across ten weeks using spreadsheets and email, with no reliable record of attendance or certification eligibility.",
    solution: [
      "Enforced every academic rule inside PostgreSQL as constraints, triggers and stored functions, so no rule can be bypassed by a modified client request.",
      "Solved the final-seat booking race condition with row-level locking (SELECT … FOR UPDATE), preventing duplicate reservations.",
      "Implemented Row-Level Security on every table, keyed on the authenticated user, so authorisation is resolved by the database.",
      "Derived capacity limits from live data (class size, schedule, venue) so the system re-sizes itself when the intake changes.",
    ],
    impact: [
      "Replaced a manual spreadsheet workflow with a role-based platform for students, facilitators and a coordinator.",
      "Automated certificate PDF generation and email delivery via serverless functions and scheduled jobs.",
      "Lesson learned: verify what a migration actually applied — several defects only appeared because a migration succeeded while silently doing nothing.",
    ],
  },
  {
    id: "finbert",
    name: "Financial Sentiment Analysis Engine",
    role: "Project Lead",
    stack: ["Python", "PyTorch", "FinBERT", "Transformers", "NLTK", "Regex"],
    problem:
      "Financial markets produce huge volumes of unstructured news text that is difficult to analyse manually for real-time risk assessment.",
    solution: [
      "Fine-tuned a domain-specific Transformer (FinBERT) on 4,840 labelled financial headlines.",
      "Built a Regex-based cleaning pipeline to handle label noise, class imbalance and domain terminology.",
      "Translated expert labeller requirements into explicit data-cleaning rules.",
    ],
    impact: [
      "Evaluated with macro-F1 so minority classes — including negative market signals — are not hidden by class imbalance.",
      "Presented technical findings in a business-reporting format.",
    ],
  },
  {
    id: "recruit",
    name: "UFS Student Recruitment Platform",
    role: "Lead Developer",
    stack: ["C#", ".NET", "SQL Server", "React"],
    problem:
      "Connecting university candidates with employer requirements was a manual, low-signal process.",
    solution: [
      "Designed a platform that matches student skills to employer requirements through automated recommendations.",
      "Led a small team on feature implementation across the .NET API and React front end.",
    ],
    impact: [
      "Automated skill matching between candidates and employers, improving recruitment efficiency.",
    ],
  },
];

const AWARDS = [
  {
    place: "1st place",
    title: "BBD Best Repo",
    role: "Lead Developer",
    when: "Hackathon",
    text: "Led development of the full-stack application that placed first for best repository.",
    tags: ["Full-stack", "Team lead"],
  },
  {
    place: "Top 3",
    title: "BizTech Nexus Hackathon",
    role: "Team Lead",
    when: "24 hours",
    text: "Led the team and built BridgeUni, one platform where students find bootcamp and upskilling resources from around the world.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    place: "Recognised",
    title: "Standard Bank Beat the Banker",
    role: "Data model & data science",
    when: "48 hours",
    text: "Built CodeRED, a fraud-monitoring demo with a mule-account detection pipeline. Designed the data model used to track scammers and was recognised for the data science contribution.",
    tags: ["FastAPI", "Streamlit", "SQLite", "Python"],
  },
  {
    place: "Won · China",
    title: "Huawei Seeds for the Future",
    role: "Group presenter & assistant leader",
    when: "2023 – 2024",
    text: "Our team won a trip to China to compete internationally. We pitched Communication for All, the Innovoice Translate System: a camera-based wearable concept that uses computer vision, machine learning and NLP to turn sign language into spoken South African languages. I presented the project and served as assistant team leader.",
    tags: ["Computer vision", "Machine learning", "NLP", "Python"],
  },
  {
    place: "Final round",
    title: "Amazon · Code Your Career, Cape Town",
    role: "Software Engineer interview process",
    when: "Aug 2026",
    text: "Earned an interview opportunity for a Software Engineer role at Amazon's Code Your Career event in Cape Town and advanced through to the final interview round.",
    tags: ["Amazon", "Software Engineering"],
  },
];

const STACK = [
  {
    title: "Backend",
    icon: Server,
    items: ["C#", ".NET", "Node.js", "Deno", "REST APIs", "Microservices", "Python"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      "PostgreSQL",
      "Supabase",
      "SQL Server",
      "Normalization",
      "Row-Level Security",
      "Stored Procedures",
      "Triggers",
    ],
  },
  {
    title: "Cloud & AI",
    icon: Brain,
    items: [
      "AWS",
      "FinBERT",
      "PyTorch",
      "NLTK",
      "Transformer Fine-Tuning",
      "Prompt Engineering",
      "Foundation Models",
    ],
  },
  {
    title: "Practices",
    icon: Wrench,
    items: ["Git & GitHub", "Requirements Gathering", "User Stories", "Agile"],
  },
];

const EXPERIENCE = [
  {
    role: "Full-Stack Developer Intern",
    org: "Codveda Technologies",
    when: "Aug – Sep 2025",
    points: [
      "Built .NET (C#) microservices and PostgreSQL integrations in an agile team.",
      "Collaborated with cross-functional teams to refine user features.",
    ],
  },
  {
    role: "First-Year CS Programming Tutor",
    org: "University of the Free State",
    when: "Current",
    points: [
      "Mentor students in programming logic, C# syntax, debugging and computational thinking.",
      "Mark practical work and give feedback; explain one concept several ways until it lands.",
    ],
  },
  {
    role: "Departmental Laboratory Assistant",
    org: "UFS · Computer Science & Informatics",
    when: "Current",
    points: [
      "Monitor machine thermals and hardware performance to prevent disruption of scheduled classes.",
      "Diagnose network routing and connectivity faults under live conditions.",
    ],
  },
  {
    role: "Peer Mentor & Community Volunteer",
    org: "UFS · Schools outreach & Digital Literacy",
    when: "2024 – 2025",
    points: [
      "Guided Grade 9 learners on informed subject choices as an ITSA alumna.",
      "Led workshops on Microsoft Office and digital productivity at the UFS Cultural Diversity Festival.",
    ],
  },
];

const CERTS = [
  {
    title: "AI Practitioner: Foundations",
    issuer: "AWS Skills Center",
    detail: "5-part series · Verify on Credly ↗",
    badge: "aws",
    href: "https://www.credly.com/badges/f89163f4-945a-41c1-a4ea-e37424c767be/public_url",
  },
  {
    title: "Seeds for the Future",
    issuer: "Huawei · Alumna",
    detail: "Won a trip to China · 2023 – 2024",
    badge: "huawei",
  },
  {
    title: "Golden Key Honours Society",
    issuer: "International · Top 15%",
    detail: "Regulation committee member",
    badge: "golden",
  },
  {
    title: "Networking Academy",
    issuer: "Cisco",
    detail: "2024",
    badge: "cisco",
  },
  {
    title: "Learning Data Analytics: Foundations",
    issuer: "LinkedIn Learning",
    detail: "Jul 2026",
    badge: "li",
  },
  {
    title: "Leadership 2050 Summit 2.0",
    issuer: "Tarragon Edge · Participation",
    detail: "Sep 2024",
    badge: "lead",
  },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </motion.section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}

function ButtonLink({
  href,
  children,
  primary,
  external,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 " +
        (primary
          ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/20 hover:brightness-110"
          : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10")
      }
    >
      {children}
    </a>
  );
}

function BadgeGraphic({ kind }: { kind: string }) {
  // Real logos: AWS uses your actual badge (put it in /public/badges/),
  // the rest load official brand marks from the Simple Icons CDN.
  const images: Record<string, { src: string; alt: string; pad: string }> = {
    aws: { src: "/badges/aws-ai-practitioner.png", alt: "AWS Skills Center AI Practitioner: Foundations training badge", pad: "p-0.5" },
    huawei: { src: "https://cdn.simpleicons.org/huawei/CF0A2C", alt: "Huawei", pad: "p-3" },
    cisco: { src: "https://cdn.simpleicons.org/cisco/1BA0D7", alt: "Cisco", pad: "p-3" },
    li: { src: "https://cdn.simpleicons.org/linkedin/0A66C2", alt: "LinkedIn Learning", pad: "p-3" },
  };
  const text: Record<string, { bg: string; label: string }> = {
    golden: { bg: "from-amber-400 to-yellow-600", label: "GK" },
    lead: { bg: "from-violet-600 to-purple-900", label: "L50" },
  };
  const img = images[kind];
  if (img) {
    return (
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-white/20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img.src} alt={img.alt} className={`h-full w-full object-contain ${img.pad}`} />
        <span className="absolute -bottom-1 -right-1 rounded-full bg-slate-950 p-0.5">
          <Check className="h-3.5 w-3.5 text-emerald-400" />
        </span>
      </div>
    );
  }
  const m = text[kind] ?? text.golden;
  return (
    <div
      className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${m.bg} text-sm font-extrabold tracking-wide text-white shadow-lg ring-1 ring-white/20`}
      aria-hidden
    >
      {m.label}
      <span className="absolute -bottom-1 -right-1 rounded-full bg-slate-950 p-0.5">
        <Check className="h-3.5 w-3.5 text-emerald-400" />
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sections                                                           */
/* ------------------------------------------------------------------ */
function Nav() {
  const links = [
    ["Projects", "#projects"],
    ["Awards", "#awards"],
    ["Stack", "#stack"],
    ["Experience", "#experience"],
    ["Credentials", "#credentials"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-2 text-sm font-bold text-white">
          <Code2 className="h-4 w-4 text-cyan-400" /> UN
        </a>
        <ul className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="transition hover:text-white">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/15"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/30 via-fuchsia-500/10 to-cyan-500/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
            <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {PROFILE.name}
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              {PROFILE.title}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            I build full-stack systems where the <span className="text-slate-200">database enforces the rules</span> —
            PostgreSQL constraints, row-level security and concurrency-safe
            booking — and apply fine-tuned transformer models to real financial
            text. {PROFILE.subtitle}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects" primary>
              <Layers className="h-4 w-4" /> View Projects
            </ButtonLink>
            <ButtonLink href={PROFILE.resume}>
              <Download className="h-4 w-4" /> Download Resume
            </ButtonLink>
            <ButtonLink href={PROFILE.linkedin} external>
              <LinkedinIcon /> LinkedIn
            </ButtonLink>
            <ButtonLink href={PROFILE.github} external>
              <GithubIcon /> GitHub
            </ButtonLink>
          </div>
        </motion.div>

        <motion.dl
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                {s.value}
              </dd>
              <p className="mt-1 text-xs leading-snug text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState(PROJECTS[0].id);
  const [tab, setTab] = useState<"problem" | "solution" | "impact">("problem");
  const p = PROJECTS.find((x) => x.id === active)!;

  const tabs = [
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Engineering Solution" },
    { id: "impact", label: "Impact" },
  ] as const;

  return (
    <Section id="projects" eyebrow="Engineering deep dive" title="Projects">
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <div
          role="tablist"
          aria-label="Projects"
          className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible"
        >
          {PROJECTS.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={active === x.id}
              onClick={() => {
                setActive(x.id);
                setTab("problem");
              }}
              className={
                "min-w-[220px] rounded-xl border p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 lg:min-w-0 " +
                (active === x.id
                  ? "border-violet-400/50 bg-violet-500/10"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]")
              }
            >
              <p className="text-sm font-semibold text-white">{x.name}</p>
              <p className="mt-1 text-xs text-slate-400">{x.role}</p>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-2xl shadow-violet-950/20 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>

          <div
            role="tablist"
            aria-label="Project details"
            className="mt-6 inline-flex flex-wrap gap-1 rounded-xl bg-slate-950/70 p-1"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={
                  "rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 " +
                  (tab === t.id
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white"
                    : "text-slate-400 hover:text-white")
                }
              >
                {t.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active + tab}
              role="tabpanel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-6 min-h-[200px]"
            >
              {tab === "problem" && (
                <p className="text-base leading-relaxed text-slate-300">{p.problem}</p>
              )}
              {tab !== "problem" && (
                <ul className="space-y-3">
                  {(tab === "solution" ? p.solution : p.impact).map((line) => (
                    <li key={line} className="flex gap-3 text-slate-300">
                      <Sparkles className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                      <span className="leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

function Awards() {
  return (
    <Section id="awards" eyebrow="Hackathons & recognition" title="Built under pressure, recognised for it">
      <div className="grid gap-4 sm:grid-cols-2">
        {AWARDS.map((a) => (
          <div
            key={a.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-200">
                <Trophy className="h-3.5 w-3.5" /> {a.place}
              </span>
              <span className="text-xs text-slate-500">{a.when}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{a.title}</h3>
            <p className="text-sm text-cyan-300">{a.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{a.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {a.tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function StackGrid() {
  return (
    <Section id="stack" eyebrow="System architecture" title="Stack & Tooling">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STACK.map((g) => (
          <motion.div
            key={g.title}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-500/30 p-2 text-cyan-300">
                <g.icon className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-white">{g.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Pill key={i}>{i}</Pill>
              ))}
            </div>
          </motion.div>
        ))}
        <div className="rounded-2xl border border-dashed border-violet-400/30 bg-violet-500/5 p-6">
          <ShieldCheck className="h-5 w-5 text-violet-300" />
          <h3 className="mt-3 font-semibold text-white">Engineering philosophy</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Put invariants where they cannot be bypassed: in the database. Then
            verify what a change actually did, rather than trusting that it ran.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience & leadership" title="Where I've built and led">
      <ol className="relative ml-3 border-l border-white/10">
        {EXPERIENCE.map((e) => (
          <li key={e.role} className="mb-10 ml-6">
            <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 ring-4 ring-slate-950" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{e.role}</h3>
              <span className="text-xs font-medium text-cyan-300">{e.when}</span>
            </div>
            <p className="text-sm text-slate-400">{e.org}</p>
            <ul className="mt-3 space-y-2">
              {e.points.map((pt) => (
                <li key={pt} className="text-sm leading-relaxed text-slate-300">
                  • {pt}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <GraduationCap className="h-6 w-6 shrink-0 text-violet-300" />
          <div>
            <h3 className="font-semibold text-white">BSc Honours, Computer Science & Informatics</h3>
            <p className="mt-1 text-sm text-slate-400">
              University of the Free State · Expected Nov 2026. Distinctions in
              NLP, Data Warehousing, HCI and Introduction to Research.
            </p>
          </div>
        </div>
        <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <Users className="h-6 w-6 shrink-0 text-cyan-300" />
          <div>
            <h3 className="font-semibold text-white">BSc Information Technology (Computer Science)</h3>
            <p className="mt-1 text-sm text-slate-400">
              University of the Free State · Distinctions in Software Engineering
              and Data Analytics for Business.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Credentials() {
  return (
    <Section id="credentials" eyebrow="Certifications & recognition" title="Credentials">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c) => (
          <motion.a
            key={c.title}
            whileHover={{ scale: 1.02 }}
            {...("href" in c && c.href
              ? { href: c.href, target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <BadgeGraphic kind={c.badge} />
            <div className="min-w-0">
              <h3 className="text-sm font-semibold leading-snug text-white">{c.title}</h3>
              <p className="text-xs text-slate-400">{c.issuer}</p>
              <p className="mt-0.5 text-xs text-cyan-300">{c.detail}</p>
            </div>
          </motion.a>
        ))}
      </div>
      <p className="mt-6 flex items-center gap-2 text-xs text-slate-500">
        <Award className="h-3.5 w-3.5" /> The AWS badge is a Credly-verified Skills Center Training Badge (five-part series plus final knowledge assessment), not an AWS Certified exam credential.
      </p>
    </Section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-zinc-900 to-cyan-600/20 p-8 sm:p-12">
        <h3 className="max-w-xl text-2xl font-bold text-white sm:text-3xl">
          Looking for a graduate software engineering role — onsite, relocation or remote.
        </h3>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={copy}
            aria-live="polite"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Email copied!" : `Get in Touch · ${PROFILE.email}`}
          </button>
          <ButtonLink href={`mailto:${PROFILE.email}`}>
            <Mail className="h-4 w-4" /> Open mail app
          </ButtonLink>
          <ButtonLink href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
            <Phone className="h-4 w-4" /> {PROFILE.phone}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 sm:flex-row sm:px-8">
        <p>© 2026 {PROFILE.name}</p>
        <div className="flex items-center gap-4">
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-white">
            Back to top <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Page() {
  return (
    <main className="min-h-screen scroll-smooth bg-slate-950 text-slate-200 antialiased selection:bg-violet-500/40">
      <Nav />
      <Hero />
      <Projects />
      <Awards />
      <StackGrid />
      <Experience />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}