import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "./data";

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/50 font-display text-lg tracking-tight text-primary ${className}`}>
      <span className="absolute inset-1 rounded-full border border-primary/20" />
      M<span className="-ml-0.5 italic">H</span>
    </span>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["hero", ...navItems.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

export function Nav() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-md" : ""}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10" aria-label="Main">
        <a href="#hero" aria-label="Back to top"><Monogram /></a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} data-active={active === n.id} className={`nav-link label-caps !tracking-[0.22em] transition-colors ${active === n.id ? "text-primary" : "text-foreground/75 hover:text-foreground"}`}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="rounded-full border border-border p-2.5 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 4%)" }}
            animate={{ clipPath: "circle(150% at 95% 4%)" }}
            exit={{ clipPath: "circle(0% at 95% 4%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex h-dvh flex-col bg-primary px-8 py-6 text-primary-foreground lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl">Menna Hommos</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-full border border-primary-foreground/40 p-2.5"><X className="h-5 w-5" /></button>
            </div>
            <ul className="mt-14 space-y-3">
              {navItems.map((n, i) => (
                <motion.li key={n.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.05 }}>
                  <a href={`#${n.id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 font-display text-4xl">
                    <span className="font-mono text-xs opacity-60">0{i + 1}</span>{n.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#hero"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ y: -4 }}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine);
    if (!fine) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHover(!!(e.target as HTMLElement).closest("a,button"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border border-primary"
      animate={{ x: pos.x - (hover ? 22 : 9), y: pos.y - (hover ? 22 : 9), width: hover ? 44 : 18, height: hover ? 44 : 18, opacity: 0.8 }}
      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.4 }}
    />
  );
}

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/15 bg-clay-deep text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-10">
        <div>
          <p className="font-display text-2xl">Menna Mohamed Hommos</p>
          <p className="mt-1 font-script text-xl opacity-80">Building reliable systems, one API at a time.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-primary-foreground/40 p-2.5 transition hover:bg-primary-foreground hover:text-clay-deep"><Linkedin className="h-4 w-4" /></a>
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-primary-foreground/40 p-2.5 transition hover:bg-primary-foreground hover:text-clay-deep"><Github className="h-4 w-4" /></a>
          <span className="font-mono text-xs opacity-70">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
