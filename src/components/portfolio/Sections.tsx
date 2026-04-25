import { useState } from "react";

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center mb-14 reveal">
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-3">
        {kicker}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">
        {title}
      </h2>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="About me" title="Curious. Driven. Building." />
        <div className="glass-card p-10 reveal">
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm <span className="gradient-text font-semibold">Vimal V.</span>, a
            first-year ECE student who treats every circuit and every line of code
            as a chance to learn something new. My world sits at the intersection
            of <span className="text-[var(--neon-cyan)]">electronics</span> and{" "}
            <span className="text-[var(--neon-pink)]">web development</span> — I
            love understanding how signals flow through silicon just as much as
            how data flows through the web.
          </p>
          <p className="mt-5 text-foreground/80 leading-relaxed">
            Right now I'm sharpening my fundamentals in C, Python, and JavaScript,
            exploring circuit design, and building small projects to turn ideas
            into something real. I believe the best engineers are lifelong
            students — so I keep shipping, keep breaking things, and keep growing.
          </p>
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  {
    title: "Programming",
    icon: "</>",
    items: [
      { name: "C", level: 75 },
      { name: "Python", level: 70 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    title: "Web",
    icon: "🌐",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React", level: 60 },
    ],
  },
  {
    title: "Electronics",
    icon: "⚙️",
    items: [
      { name: "Circuit Design", level: 70 },
      { name: "Multisim", level: 65 },
      { name: "Arduino", level: 60 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="What I work with" title="Skills & Toolbox" />
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div key={g.title} className="glass-card p-7 reveal">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
                  style={{
                    background: "var(--gradient-primary)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  {g.icon}
                </div>
                <h3 className="text-xl font-bold">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/90">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ background: "oklch(1 0 0 / 0.06)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${s.level}%`,
                          background: "var(--gradient-primary)",
                          boxShadow: "0 0 12px oklch(0.7 0.25 300 / 0.6)",
                          transition: "width 1.2s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Smart Home Lighting",
    desc: "Arduino-based ambient lighting with motion sensing and a web dashboard.",
    tech: ["Arduino", "C", "HTML", "CSS"],
    link: "https://github.com",
  },
  {
    title: "Personal Portfolio",
    desc: "This very portfolio — built with custom CSS, animations, and glassmorphism.",
    tech: ["React", "TypeScript", "CSS"],
    link: "https://github.com",
  },
  {
    title: "Circuit Simulator Notes",
    desc: "Interactive notes & visualizations for basic logic gates and op-amps.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const [t, setT] = useState({ x: 0, y: 0 });
  return (
    <div
      className="glass-card p-7 h-full"
      style={{
        transform: `perspective(900px) rotateX(${t.y}deg) rotateY(${t.x}deg)`,
        transition: "transform 0.2s ease, box-shadow 0.4s ease, border-color 0.4s ease",
      }}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
        const y = -((e.clientY - r.top) / r.height - 0.5) * 14;
        setT({ x, y });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
    >
      {children}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="Selected work" title="Projects" />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="reveal">
              <TiltCard>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "oklch(0.7 0.25 300 / 0.15)",
                        color: "var(--neon-cyan)",
                        border: "1px solid oklch(0.7 0.25 300 / 0.3)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold gradient-text"
                >
                  View on GitHub →
                </a>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto reveal">
        <div
          className="glass-card p-12 text-center"
          style={{ boxShadow: "var(--shadow-neon)" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's build something{" "}
            <span className="gradient-text">amazing together</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to collaborations, internships, and learning opportunities.
          </p>
          <a href="#contact" className="btn-neon">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export function Resume() {
  return (
    <section id="resume" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto text-center reveal">
        <SectionTitle kicker="My journey" title="Resume" />
        <div className="glass-card p-10">
          <p className="text-foreground/90 mb-6 leading-relaxed">
            Want the full story? Download my resume for a complete look at my
            education, skills, and projects.
          </p>
          <a href="/resume.pdf" download className="btn-neon">
            ⬇ Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

const articles = [
  {
    title: "Why ECE Students Should Learn to Code",
    desc: "How software skills multiply your impact as a hardware engineer.",
  },
  {
    title: "My First Arduino Project: Lessons Learned",
    desc: "From confusion to a working circuit — the messy, honest journey.",
  },
  {
    title: "CSS for Engineers: Beyond the Basics",
    desc: "A practical look at gradients, blurs, and animations that wow.",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="Writing" title="Articles & Blog" />
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.title} className="glass-card p-7 reveal cursor-pointer">
              <p className="text-xs uppercase tracking-widest text-[var(--neon-cyan)] mb-3">
                Article
              </p>
              <h3 className="text-lg font-bold mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {a.desc}
              </p>
              <span className="mt-5 inline-block text-sm font-semibold gradient-text">
                Read more →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const codingProfiles = [
  { name: "LeetCode", icon: "🟧", href: "https://leetcode.com" },
  { name: "HackerRank", icon: "🟩", href: "https://hackerrank.com" },
  { name: "GitHub", icon: "🐙", href: "https://github.com" },
];

export function Coding() {
  return (
    <section id="coding" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="Where I practice" title="Coding Profiles" />
        <div className="grid sm:grid-cols-3 gap-6">
          {codingProfiles.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-8 text-center reveal block"
            >
              <div className="text-5xl mb-4 float-3d inline-block">{p.icon}</div>
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">Visit profile →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle kicker="Get in touch" title="Contact Me" />
        <div className="glass-card p-10 reveal">
          <p className="text-center text-muted-foreground mb-8">
            Reach me at{" "}
            <a
              href="mailto:vimal@example.com"
              className="gradient-text font-semibold"
            >
              vimal@example.com
            </a>
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="grid gap-4"
          >
            <input
              required
              type="text"
              placeholder="Your Name"
              className="px-5 py-3 rounded-xl bg-transparent text-foreground outline-none"
              style={{
                border: "1px solid oklch(1 0 0 / 0.1)",
                background: "oklch(0.2 0.04 275 / 0.5)",
              }}
            />
            <input
              required
              type="email"
              placeholder="Your Email"
              className="px-5 py-3 rounded-xl bg-transparent text-foreground outline-none"
              style={{
                border: "1px solid oklch(1 0 0 / 0.1)",
                background: "oklch(0.2 0.04 275 / 0.5)",
              }}
            />
            <textarea
              required
              rows={5}
              placeholder="Your Message"
              className="px-5 py-3 rounded-xl bg-transparent text-foreground outline-none resize-none"
              style={{
                border: "1px solid oklch(1 0 0 / 0.1)",
                background: "oklch(0.2 0.04 275 / 0.5)",
              }}
            />
            <button type="submit" className="btn-neon mt-2">
              {sent ? "✓ Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="relative py-10 px-6 mt-12"
      style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vimal V. All rights reserved.
        </p>
        <div className="flex gap-3 text-muted-foreground text-sm">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <span>·</span>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <span>·</span>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground">Twitter</a>
          <span>·</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a>
        </div>
      </div>
    </footer>
  );
}