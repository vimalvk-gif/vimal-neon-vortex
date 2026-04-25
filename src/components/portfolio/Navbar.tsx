import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "blog", label: "Blog" },
  { id: "coding", label: "Coding" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s.id);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{
        background: "oklch(0.16 0.03 270 / 0.6)",
        borderBottom: "1px solid oklch(1 0 0 / 0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold gradient-text">
          Vimal V.
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="px-4 py-2 text-sm rounded-full transition-all"
                style={{
                  color: active === s.id ? "var(--foreground)" : "var(--muted-foreground)",
                  background:
                    active === s.id ? "oklch(0.7 0.25 300 / 0.15)" : "transparent",
                  boxShadow:
                    active === s.id ? "0 0 20px oklch(0.7 0.25 300 / 0.3)" : "none",
                }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm rounded-lg"
                style={{
                  color: active === s.id ? "var(--foreground)" : "var(--muted-foreground)",
                  background: active === s.id ? "oklch(0.7 0.25 300 / 0.15)" : "transparent",
                }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}