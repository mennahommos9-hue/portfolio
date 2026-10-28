import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Boxes,
  Braces,
  Container,
  Database,
  FileText,
  GitBranch,
  Github,
  KeyRound,
  Layers,
  Linkedin,
  Mail,
  Phone,
  Plug,
  Receipt,
  Send,
  Server,
  ShieldCheck,
  TerminalSquare,
  Workflow,
  Wrench,
  Cloud,
  Bug,
  Code2,
} from "lucide-react";
import { useRef } from "react";
import { Reveal, SectionLabel, WordReveal } from "./motion";
import { contact, education, project, services, skills, tools } from "./data";

const ease = [0.22, 1, 0.36, 1] as const;

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-20 px-6 py-24 md:px-10 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

/* ------------------------------ HERO ------------------------------ */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const line = (d: number) => ({
    initial: reduce ? false : { y: "105%" },
    animate: { y: "0%" },
    transition: { duration: 1.1, ease, delay: d },
  });
  const fade = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease, delay: d },
  });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-dvh overflow-hidden px-6 pb-16 pt-32 md:px-10"
    >
      <div className="grid-lines absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <motion.div
        style={{ y: yText }}
        className="relative z-10 mx-auto grid min-h-[calc(100dvh-8rem)] max-w-7xl grid-cols-[minmax(0,1fr)_minmax(6rem,32%)] items-start gap-4 sm:grid-cols-12 sm:items-center sm:gap-8 lg:gap-10"
      >
        <div className="sm:col-span-7">
          <motion.p {...fade(0.5)} className="label-caps text-primary">
            Backend Developer • Software Engineering
          </motion.p>
          <h1 className="mt-6 font-display font-medium uppercase leading-[0.82] tracking-[-0.02em] text-primary">
            <span className="block overflow-hidden">
              <motion.span {...line(0.6)} className="block text-[clamp(2.5rem,10vw,9rem)]">
                Menna
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                {...line(0.72)}
                className="block pl-[0.5em] text-[clamp(1.7rem,6.5vw,5.5rem)] italic normal-case text-foreground/80"
              >
                Mohamed
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span {...line(0.84)} className="block text-[clamp(2.5rem,10vw,9rem)]">
                Hommos
              </motion.span>
            </span>
          </h1>
          <motion.p
            {...fade(1.1)}
            className="mt-6 font-script text-[clamp(1.8rem,4vw,3rem)] leading-tight text-foreground/85"
          >
            I Turn Ideas into Powerful Backends.
          </motion.p>
          <motion.p
            {...fade(1.25)}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            I help startups and businesses transform their ideas into secure, reliable, and scalable
            web applications through smart APIs, efficient databases, and backend solutions that
            make technology work seamlessly behind the scenes.
          </motion.p>
          <motion.div {...fade(1.4)} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:bg-clay-deep hover:shadow-lift"
            >
              Explore My Work{" "}
              <ArrowDownRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[-45deg]" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-foreground/30 px-7 py-4 text-sm font-medium tracking-wide transition-all duration-500 hover:border-primary hover:text-primary"
            >
              Let's Connect{" "}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
        <motion.figure
          {...fade(0.9)}
          className="relative mx-auto w-full max-w-[22rem] sm:col-span-5"
        >
          <div className="relative isolate">
            <motion.div
              aria-hidden
              className="absolute -inset-3 -top-6 rounded-t-full bg-gradient-to-br from-primary/60 via-primary/80 to-clay-deep shadow-soft"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            />
            <div className="absolute -right-4 -top-2 h-[96%] w-[96%] rounded-t-full border border-primary/60" />
            <div className="absolute -bottom-3 -left-5 h-16 w-16 rounded-full bg-olive shadow-soft sm:h-20 sm:w-20" />
            <div className="relative overflow-hidden rounded-t-full border border-primary/30 bg-primary/20 p-3 shadow-soft sm:p-4">
              <img
                src={`${import.meta.env.BASE_URL}menna-profile.jpg`}
                alt="Portrait of Menna Mohamed Hommos"
                width={768}
                height={960}
                fetchPriority="high"
                decoding="async"
                className="block h-auto w-full rounded-t-full"
              />
            </div>
            <motion.div
              aria-hidden
              className="absolute -left-7 top-[18%] hidden rounded-full border border-sand/30 bg-foreground/90 p-3 font-mono text-sm text-sand shadow-lift sm:block"
              animate={reduce ? undefined : { y: [0, -8, 0], rotate: [0, -6, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            >
              {"</>"}
            </motion.div>
            <motion.div
              aria-hidden
              className="absolute -right-5 top-[52%] hidden rounded-full border border-sand/30 bg-foreground/90 p-3 font-mono text-sm text-sand shadow-lift sm:block"
              animate={reduce ? undefined : { y: [0, 8, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.6 }}
            >
              {"{ }"}
            </motion.div>
            <motion.span
              aria-hidden
              className="absolute right-[8%] top-[12%] h-3 w-3 rounded-full bg-sand shadow-[0_0_18px_4px_rgb(255_238_210_/_45%)]"
              animate={reduce ? undefined : { scale: [1, 1.35, 1], opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            />
          </div>
          <figcaption className="relative mt-5 hidden items-center justify-between gap-4 px-2 sm:flex">
            <span className="font-display text-xl text-foreground">Menna Hommos</span>
            <span className="label-caps !text-[0.62rem] text-olive">Backend Developer</span>
          </figcaption>
        </motion.figure>
      </motion.div>

      <motion.a
        {...fade(1.8)}
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-muted-foreground md:flex"
        aria-label="Scroll to About"
      >
        <span className="label-caps !text-[0.6rem]">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-border">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-primary animate-scroll-hint" />
        </span>
      </motion.a>
    </section>
  );
}

/* ------------------------------ ABOUT ------------------------------ */
const Hl = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-primary">{children}</span>
);

export function About() {
  return (
    <Section id="about" className="bg-sand/60">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionLabel index="01">About Me</SectionLabel>
          <WordReveal
            text="Building the Logic Behind Great Experiences."
            className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] text-foreground"
          />
          <Reveal
            delay={0.2}
            className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              I'm a Backend Developer passionate about building the systems that power modern web
              applications. I focus on designing reliable <Hl>REST APIs</Hl>, structuring{" "}
              <Hl>databases</Hl>, implementing <Hl>secure authentication</Hl>, and developing
              server-side features that make applications work smoothly.
            </p>
            <p>
              I enjoy turning ideas into practical software solutions, solving technical problems,
              and continuously improving the way applications are built behind the scenes.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.3} className="lg:col-span-5 lg:pt-16">
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-lg border border-primary/40" />
            <div className="relative rounded-lg bg-foreground p-6 font-mono text-[13px] leading-7 text-background shadow-lift">
              <div className="mb-4 flex items-center justify-between border-b border-background/15 pb-3 text-[11px] opacity-60">
                <span>menna.config.ts</span>
                <TerminalSquare className="h-4 w-4" />
              </div>
              <p>
                <span className="text-sand">const</span> developer = {"{"}
              </p>
              <p className="pl-5">
                name: <span className="text-primary">"Menna Hommos"</span>,
              </p>
              <p className="pl-5">
                role: <span className="text-primary">"Backend Developer"</span>,
              </p>
              <p className="pl-5">
                focus: [<span className="text-primary">"REST APIs"</span>,
              </p>
              <p className="pl-12">
                <span className="text-primary">"Database Design"</span>,
              </p>
              <p className="pl-12">
                <span className="text-primary">"Secure Auth"</span>],
              </p>
              <p className="pl-5">
                studying: <span className="text-primary">"Computer Science"</span>,
              </p>
              <p>{"}"};</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------ EDUCATION ------------------------------ */
export function Education() {
  return (
    <Section id="education">
      <SectionLabel index="02">Education</SectionLabel>
      <WordReveal
        text="Learning, Building, Growing."
        className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02]"
      />
      <div className="relative mt-16">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease }}
          className="absolute left-0 right-0 top-[11px] hidden h-px origin-left bg-primary/50 md:block"
        />
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {education.map((e, i) => (
            <Reveal key={e.org} delay={0.15 * i} className="relative pl-8 md:pl-0">
              <span className="absolute left-0 top-0 h-full w-px bg-primary/40 md:hidden" />
              <span className="absolute -left-[11px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-primary bg-background md:relative md:left-0">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              <p className="mt-0 font-display text-6xl italic text-primary/25 md:mt-8">0{i + 1}</p>
              <h3 className="mt-2 font-display text-2xl leading-tight">{e.org}</h3>
              <p className="label-caps mt-3 !text-[0.66rem] text-olive">{e.program}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{e.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ EXPERIENCE ------------------------------ */
export function Experience() {
  return (
    <Section id="experience" className="bg-olive text-olive-foreground">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs opacity-60">03</span>
            <span className="h-px w-10 bg-olive-foreground/60" />
            <span className="label-caps">Experience</span>
          </Reveal>
          <WordReveal
            text="Turning Knowledge Into Real Projects."
            className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02]"
          />
        </div>
        <Reveal delay={0.2} className="lg:col-span-7">
          <article className="group relative rounded-lg border border-olive-foreground/25 p-8 transition-colors duration-500 hover:border-olive-foreground/60 md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-olive-foreground/40 px-4 py-1.5 font-mono text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-olive-foreground animate-pulse-dot" />
                2025 – Present
              </span>
              <Server className="h-6 w-6 opacity-60 transition-transform duration-700 group-hover:rotate-12" />
            </div>
            <h3 className="mt-8 font-display text-3xl md:text-4xl">Backend Developer</h3>
            <p className="mt-1 font-script text-3xl opacity-90">Freelancing</p>
            <p className="mt-6 text-lg leading-relaxed opacity-85">
              Developing backend applications using Node.js, Express.js, and PostgreSQL. Building
              RESTful APIs, implementing authentication and authorization, and managing databases.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
              {["Node.js", "Express.js", "PostgreSQL", "REST", "Auth"].map((t) => (
                <span key={t} className="rounded border border-olive-foreground/30 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------ SKILLS ------------------------------ */
const skillIcons = [Workflow, Database, ShieldCheck, Bug, Cloud];
const toolIcons: Record<string, typeof Code2> = {
  "Node.js": Server,
  Python: Code2,
  PHP: Braces,
  PostgreSQL: Database,
  MongoDB: Layers,
  Docker: Container,
  Git: GitBranch,
  GitHub: Github,
  Postman: Send,
  Swagger: FileText,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionLabel index="04">Technical Expertise</SectionLabel>
      <WordReveal
        text="The Tools Behind the Logic."
        className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02]"
      />
      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <Reveal className="rounded-lg border border-border bg-card p-8 shadow-soft md:p-10">
          <div className="flex items-center justify-between">
            <p className="label-caps text-primary">A — Skills</p>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </div>
          <ul className="mt-6 divide-y divide-border">
            {skills.map((s, i) => {
              const Icon = skillIcons[i];
              return (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease }}
                  className="group flex items-center gap-5 py-4"
                >
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <Icon className="h-5 w-5 text-olive transition-transform duration-500 group-hover:scale-110" />
                  <span className="font-display text-xl transition-all duration-500 group-hover:translate-x-1 group-hover:text-primary md:text-2xl">
                    {s}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="rounded-lg bg-foreground p-8 text-background md:p-10">
          <div className="flex items-center justify-between font-mono text-xs opacity-70">
            <span>B — Tools & Technologies</span>
            <span>$ ls ./stack</span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tools.map((t, i) => {
              const Icon = toolIcons[t] ?? Boxes;
              return (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-3 rounded-md border border-background/15 px-4 py-3 transition-colors duration-300 hover:border-primary hover:bg-primary"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="text-sm">{t}</span>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------ PROJECTS ------------------------------ */
function DashboardVisual() {
  const rows = [
    { icon: FileText, label: "passport.pdf", meta: "expires in 12 days", tone: "bg-primary" },
    { icon: Receipt, label: "Electricity bill", meta: "due 1st", tone: "bg-olive" },
    { icon: FileText, label: "car_license.pdf", meta: "valid", tone: "bg-sand" },
  ];
  return (
    <div className="relative h-full min-h-[380px] overflow-hidden rounded-lg bg-primary p-6 md:p-8">
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-clay-deep/70" />
      <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-t-full bg-olive/70" />
      <div className="relative rounded-md bg-card p-5 shadow-lift transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-[-1deg]">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="font-display text-xl text-primary">Fakarny</span>
          <span className="relative">
            <Bell className="h-4 w-4 text-foreground" />
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
          </span>
        </div>
        <ul className="mt-4 space-y-3">
          {rows.map((r) => (
            <li
              key={r.label}
              className="flex items-center gap-3 rounded border border-border px-3 py-2.5"
            >
              <span className={`flex h-7 w-7 items-center justify-center rounded ${r.tone}`}>
                <r.icon className="h-3.5 w-3.5 text-primary-foreground" />
              </span>
              <span className="flex-1 text-sm">{r.label}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{r.meta}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative ml-auto mt-4 w-56 rounded-md bg-foreground p-4 font-mono text-[10px] leading-5 text-background shadow-lift transition-transform duration-700 group-hover:translate-x-2">
        <p className="opacity-60"># node-cron</p>
        <p>
          <span className="text-sand">cron</span>.schedule("0 9 * * *",
        </p>
        <p className="pl-3">sendReminders)</p>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="bg-sand/60">
      <SectionLabel index="05">Selected Work</SectionLabel>
      <WordReveal
        text="Projects Built to Solve Real Problems."
        className="max-w-3xl font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02]"
      />
      <Reveal delay={0.1} className="mt-16">
        <article className="group grid overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow duration-700 hover:shadow-lift lg:grid-cols-2">
          <div className="p-3">
            <DashboardVisual />
          </div>
          <div className="flex flex-col p-8 md:p-12">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-6xl italic text-primary/30">01</span>
              <span className="label-caps !text-[0.62rem] text-olive">{project.role}</span>
            </div>
            <h3 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              {project.name} <span className="text-muted-foreground">—</span>{" "}
              <span className="italic text-primary">{project.subtitle}</span>
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">{project.description}</p>
            <p className="label-caps mt-8 !text-[0.62rem] text-foreground">My Contribution</p>
            <ul className="mt-4 space-y-3">
              {project.contributions.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed">
                  <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-primary/40 px-3 py-1 font-mono text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-10">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="group/btn inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all duration-500 hover:bg-clay-deep"
              >
                Live Demo{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </a>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

/* ------------------------------ SERVICES ------------------------------ */
const serviceIcons = [Workflow, Database, ShieldCheck, Server, Plug];

export function Services() {
  return (
    <Section id="services">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <SectionLabel index="06">What I Can Do</SectionLabel>
          <WordReveal
            text="Backend Solutions That Make Ideas Work."
            className="font-display text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.02]"
          />
        </div>
        <ul className="lg:col-span-8">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            const olive = i % 2 === 1;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className="group flex items-start gap-6 border-b border-border py-8 transition-all duration-500 hover:pl-3">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-105 ${olive ? "bg-olive text-olive-foreground" : "bg-primary text-primary-foreground"}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="font-mono text-xs text-muted-foreground">Service 0{i + 1}</p>
                    <h3 className="mt-1 font-display text-2xl transition-colors duration-500 group-hover:text-primary md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                  <ArrowUpRight className="mt-2 hidden h-5 w-5 text-primary opacity-0 transition-all duration-500 group-hover:opacity-100 sm:block" />
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

/* ------------------------------ CONTACT ------------------------------ */
export function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: Linkedin, label: "LinkedIn", value: "menna-hommos", href: contact.linkedin, ext: true },
    { icon: Github, label: "GitHub", value: "mennahommos9-hue", href: contact.github, ext: true },
  ];
  return (
    <Section id="contact" className="overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute -right-32 top-10 h-[420px] w-[320px] rounded-t-full border border-primary-foreground/25" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-clay-deep/60 animate-float" />
      <div className="relative grid gap-14 lg:grid-cols-2">
        <div>
          <Reveal className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs opacity-60">07</span>
            <span className="h-px w-10 bg-primary-foreground/60" />
            <span className="label-caps">Get In Touch</span>
          </Reveal>
          <WordReveal
            text="Let's Work Together"
            className="font-display text-[clamp(2.8rem,6vw,5.5rem)] uppercase leading-[0.95]"
          />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed opacity-90">
              Have a project in mind or looking for a backend developer? Feel free to reach out. I'd
              be happy to connect and discuss how I can help.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href={`mailto:${contact.email}`}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary-foreground px-7 py-4 text-sm font-medium text-primary transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Send Me an Email{" "}
              <Send className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
        <ul className="self-end">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={0.1 * i}>
              <li>
                <a
                  href={it.href}
                  {...(it.ext ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center gap-5 border-b border-primary-foreground/25 py-6 transition-all duration-500 hover:pl-3"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/40 transition-colors duration-500 group-hover:bg-primary-foreground group-hover:text-primary">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="label-caps block !text-[0.62rem] opacity-70">{it.label}</span>
                    <span className="block truncate font-display text-xl md:text-2xl">
                      {it.value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
