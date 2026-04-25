import { useEffect, useState } from "react";

const phrases = [
  "ECE Student",
  "Aspiring Developer",
  "Circuit Enthusiast",
  "Lifelong Learner",
];

function TypingText() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    const speed = del ? 50 : 110;
    const timer = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI(i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, del, i]);

  return (
    <span className="typing-cursor gradient-text font-semibold">{text}</span>
  );
}

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vimal-v-107402380", icon: "in" },
  { label: "GitHub", href: "https://github.com/vimalvk-gif", icon: "gh" },
  { label: "Email", href: "mailto:vimal.vk906@gmail.com", icon: "ig" },
];

function SocialIcon({ name }: { name: string }) {
  const common = { width: 18, height: 18, fill: "currentColor" };
  switch (name) {
    case "in":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.34 17.34H5.67V9.67h2.67v7.67zM7 8.5a1.55 1.55 0 110-3.1 1.55 1.55 0 010 3.1zm11.34 8.84h-2.67v-3.73c0-.89-.02-2.04-1.24-2.04-1.24 0-1.43.97-1.43 1.97v3.8h-2.67V9.67h2.56v1.05h.04c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.23 1.8 3.23 4.13v3.89z" />
        </svg>
      );
    case "gh":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.49.11-3.1 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39s1.98.13 2.9.39c2.21-1.49 3.18-1.18 3.18-1.18.62 1.61.23 2.8.11 3.1.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
        </svg>
      );
    case "ig":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9s.68.82.9 1.38c.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38s-.82.68-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38s.82-.68 1.38-.9c.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 00-2.13 1.38A5.86 5.86 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.86 5.86 0 001.38 2.13 5.86 5.86 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 002.13-1.38 5.86 5.86 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.13A5.86 5.86 0 0019.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1012 18.16 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1112 8a4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
        </svg>
      );
    case "yt":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.4-1.9.5-3.8.5-5.8a31.3 31.3 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
        </svg>
      );
    case "tw":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}

function FloatingIcon({
  delay,
  top,
  left,
  size,
  children,
}: {
  delay: string;
  top: string;
  left: string;
  size: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute float-3d glass-card flex items-center justify-center"
      style={{
        top,
        left,
        width: size,
        height: size,
        animationDelay: delay,
        boxShadow: "var(--shadow-neon)",
      }}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
        <div className="reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="gradient-text">Vimal V.</span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground/90">
            <TypingText />
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
            First-year Electronics &amp; Communication Engineering student at
            Sri Krishna College of Engineering and Technology, Coimbatore.
            Passionate about web development and eager to build real-world
            projects through hands-on learning.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-neon">
              View Projects
            </a>
            <a href="/resume.pdf" download className="btn-outline-neon">
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-foreground hover:text-white"
                style={{ transition: "var(--transition-smooth)" }}
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* 3D-style floating icons */}
        <div className="relative h-[420px] hidden md:block">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, oklch(0.7 0.25 300 / 0.25), transparent 60%)",
              filter: "blur(40px)",
            }}
          />
          <FloatingIcon delay="0s" top="10%" left="20%" size={88}>
            <span className="text-3xl">⚡</span>
          </FloatingIcon>
          <FloatingIcon delay="1.5s" top="30%" left="60%" size={110}>
            <span className="text-4xl">💻</span>
          </FloatingIcon>
          <FloatingIcon delay="3s" top="60%" left="15%" size={96}>
            <span className="text-3xl">🔌</span>
          </FloatingIcon>
          <FloatingIcon delay="2s" top="65%" left="55%" size={100}>
            <span className="text-3xl">🚀</span>
          </FloatingIcon>
          <FloatingIcon delay="4s" top="5%" left="65%" size={70}>
            <span className="text-2xl">{`{ }`}</span>
          </FloatingIcon>
        </div>
      </div>
    </section>
  );
}