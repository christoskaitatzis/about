import { useEffect, useRef } from "react";

const TRACK_ID = "20WOJ1e4fF9YjOaP06W8rj";

export default function SpotifySection() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const build = () => {
      const sec = sectionRef.current;
      const svg = svgRef.current;
      if (!sec || !svg) return;
      const W = sec.offsetWidth;
      const H = sec.offsetHeight;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

      const p1 = `M ${W} ${H * 0.15} C ${W * 0.85} ${H * 0.05}, ${W * 0.7} ${H * 0.42}, ${W * 0.55} ${H * 0.32} C ${W * 0.4} ${H * 0.22}, ${W * 0.28} ${H * 0.58}, ${W * 0.14} ${H * 0.48} C ${W * 0.05} ${H * 0.4}, ${W * 0.02} ${H * 0.65}, 0 ${H * 0.58} L 0 ${H} L ${W} ${H} Z`;
      const p2 = `M ${W} ${H * 0.5} C ${W * 0.88} ${H * 0.4}, ${W * 0.74} ${H * 0.7}, ${W * 0.58} ${H * 0.62} C ${W * 0.42} ${H * 0.54}, ${W * 0.3} ${H * 0.85}, ${W * 0.16} ${H * 0.78} C ${W * 0.06} ${H * 0.72}, ${W * 0.02} ${H * 0.92}, 0 ${H * 0.88} L 0 ${H} L ${W} ${H} Z`;

      svg.querySelector("#s1").setAttribute("d", p1);
      svg.querySelector("#s2").setAttribute("d", p2);
    };
    build();
    window.addEventListener("resize", build);
    return () => window.removeEventListener("resize", build);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "3rem 2.5rem 2.5rem",
        marginTop: "2rem",
        overflow: "hidden",
        minHeight: 180,
      }}
    >
      <style>{`
        @keyframes nudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
      `}</style>

      <svg
        ref={svgRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        preserveAspectRatio="none"
      >
        <path id="s1" fill="rgba(29,185,84,0.08)" />
        <path id="s2" fill="rgba(29,185,84,0.13)" />
      </svg>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 20,
        }}
      >
        <div style={{ textAlign: "right", maxWidth: 170 }}>
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: 14,
              color: "#1DB954",
              lineHeight: 1.35,
            }}
          >
            Check out my track
            <span
              style={{
                display: "inline-block",
                marginLeft: 4,
                animation: "nudge 1.8s ease-in-out infinite",
              }}
            >
              →
            </span>
          </div>
          <div style={{ fontSize: 11, color: "#888", marginTop: 6, lineHeight: 1.4 }}>
            and add it to your playlist
          </div>
        </div>

        <div style={{ width: 320, flexShrink: 0 }}>
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: 12, display: "block" }}
            src={`https://open.spotify.com/embed/track/${TRACK_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify track"
          />
        </div>
      </div>
    </section>
  );
}
