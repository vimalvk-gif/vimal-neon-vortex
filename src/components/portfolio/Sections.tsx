import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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
            first-year B.E. Electronics &amp; Communication Engineering student at{" "}
            <span className="gradient-text font-semibold">
              Sri Krishna College of Engineering and Technology
            </span>
            , Coimbatore (2025 – 2029). I have a strong interest in{" "}
            <span className="text-[var(--neon-pink)]">web development</span> and
            I'm currently seeking an internship to gain practical experience
            and contribute to real-world projects.
          </p>
          <p className="mt-5 text-foreground/80 leading-relaxed">
            I'm learning Web Development through online resources and practicing
            by building small projects. I'm a quick learner with a strong
            willingness to grow, and I love turning new concepts into something
            real — one project at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  {
    title: "Web Development",
    icon: "🌐",
    items: [
      { name: "HTML", level: 70 },
      { name: "CSS", level: 65 },
      { name: "JavaScript", level: 40 },
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    items: [
      { name: "Git", level: 40 },
      { name: "GitHub", level: 45 },
      { name: "VS Code", level: 75 },
    ],
  },
  {
    title: "Soft Skills",
    icon: "✨",
    items: [
      { name: "Quick Learner", level: 90 },
      { name: "Willingness to Learn", level: 95 },
      { name: "Time Management", level: 80 },
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
    title: "Basic Portfolio Website",
    desc: "A simple personal website built with HTML and CSS — my first hands-on project to learn webpage structure, styling, and responsiveness.",
    tech: ["HTML", "CSS"],
    link: "https://github.com/vimalvk-gif",
  },
  {
    title: "This Portfolio",
    desc: "A modern dark-themed portfolio with glassmorphism, neon accents, and scroll animations — built while learning React and modern CSS.",
    tech: ["React", "TypeScript", "CSS"],
    link: "https://github.com/vimalvk-gif",
  },
  {
    title: "Learning Sandbox",
    desc: "A growing collection of small practice projects as I sharpen my Web Development fundamentals through online resources.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/vimalvk-gif",
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
          <a
            href="/resume.pdf"
            download="Vimal-V-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon"
          >
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
  { name: "GitHub", icon: "🐙", href: "https://github.com/vimalvk-gif" },
  { name: "LinkedIn", icon: "💼", href: "https://www.linkedin.com/in/vimal-v-107402380" },
  { name: "Email", icon: "✉️", href: "mailto:vimal.vk906@gmail.com" },
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
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) return;

    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke(
        "send-contact-email",
        { body: { name, email, message } },
      );
      if (error) throw error;
      if ((data as any)?.ok) {
        setSent(true);
        form.reset();
        toast.success("Message sent! Vimal will get back to you soon.");
        setTimeout(() => setSent(false), 4000);
      } else {
        toast.error("Couldn't send right now. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send your message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle kicker="Get in touch" title="Contact Me" />
        <div className="glass-card p-10 reveal">
          <p className="text-center text-muted-foreground mb-8">
            Reach me at{" "}
            <a
              href="mailto:vimal.vk906@gmail.com"
              className="gradient-text font-semibold"
            >
              vimal.vk906@gmail.com
            </a>
            {" "}· 📞{" "}
            <a href="tel:+918940592916" className="gradient-text font-semibold">
              +91 89405 92916
            </a>
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4"
          >
            <input
              required
              name="name"
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
              name="email"
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
              name="message"
              rows={5}
              placeholder="Your Message"
              className="px-5 py-3 rounded-xl bg-transparent text-foreground outline-none resize-none"
              style={{
                border: "1px solid oklch(1 0 0 / 0.1)",
                background: "oklch(0.2 0.04 275 / 0.5)",
              }}
            />
            <button type="submit" disabled={sending} className="btn-neon mt-2">
              {sending ? "Sending..." : sent ? "✓ Message Sent" : "Send Message"}
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
          <a href="https://www.linkedin.com/in/vimal-v-107402380" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <span>·</span>
          <a href="https://github.com/vimalvk-gif" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <span>·</span>
          <a href="mailto:vimal.vk906@gmail.com" className="hover:text-foreground">Email</a>
        </div>
      </div>
    </footer>
  );
}