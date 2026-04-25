export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="blob"
        style={{
          width: 500,
          height: 500,
          background: "var(--neon-purple)",
          top: "-10%",
          left: "-10%",
        }}
      />
      <div
        className="blob"
        style={{
          width: 450,
          height: 450,
          background: "var(--neon-pink)",
          top: "40%",
          right: "-10%",
          animationDelay: "3s",
        }}
      />
      <div
        className="blob"
        style={{
          width: 400,
          height: 400,
          background: "var(--neon-blue)",
          bottom: "-15%",
          left: "30%",
          animationDelay: "6s",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, transparent 0%, var(--background) 70%)",
        }}
      />
    </div>
  );
}