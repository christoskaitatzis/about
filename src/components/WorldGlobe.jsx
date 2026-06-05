import { useEffect, useRef } from "react";

export default function WorldGlobe() {
  const globeRef = useRef(null);

  useEffect(() => {
    let frame;
    let angle = 0;

    const animate = () => {
      angle += 0.045; // slower, more premium
      if (globeRef.current) {
        globeRef.current.style.transform = `rotate(${angle}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      
      {/* TEXT */}
      <div style={{ minWidth: 180 }}>
        <div
          style={{
            fontSize: 14,
            color: "#1DB954",
            fontStyle: "italic",
            letterSpacing: 0.3,
          }}
        >
          Somewhere around the world
        </div>

        <div
          style={{
            fontSize: 11,
            color: "#888",
            marginTop: 4,
            lineHeight: 1.3,
          }}
        >
          taking off from Thessaloniki, Greece
        </div>
      </div>

      {/* GLOBE */}
      <div
        ref={globeRef}
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative",
          filter: "drop-shadow(0 0 10px rgba(29,185,84,0.18))",
          willChange: "transform",
        }}
      >
        <style>{`
          @keyframes pulse {
            0% { transform: scale(0.8); opacity: 0.6; }
            50% { transform: scale(1.7); opacity: 0.12; }
            100% { transform: scale(0.8); opacity: 0.6; }
          }

          .greece-dot {
            transform-origin: center;
            animation: pulse 2.6s ease-in-out infinite;
          }
        `}</style>

        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            {/* ocean */}
            <radialGradient id="ocean" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="#0c1511" />
              <stop offset="100%" stopColor="#050807" />
            </radialGradient>

            {/* green atmospheric glow */}
            <radialGradient id="glow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#1DB954" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1DB954" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* base sphere */}
          <circle cx="50" cy="50" r="50" fill="url(#ocean)" />
          <circle cx="50" cy="50" r="50" fill="url(#glow)" />

          {/* 🌍 IMPROVED CONTINENTS (more realistic placement) */}
          <g fill="#1DB954" fillOpacity="0.18">

            {/* North + South America */}
            <path d="
              M20 20
              C12 30, 12 45, 18 55
              C22 62, 22 70, 16 78
              C10 86, 20 92, 28 84
              C36 76, 34 62, 32 52
              C30 40, 30 28, 20 20
              Z
            " />

            {/* Europe + Africa (more recognizable vertical structure) */}
            <path d="
              M50 18
              C46 26, 48 34, 52 38
              C56 42, 56 48, 52 52
              C48 56, 46 64, 50 72
              C54 82, 60 82, 62 72
              C64 62, 62 54, 58 48
              C54 42, 56 30, 50 18
              Z
            " />

            {/* Asia */}
            <path d="
              M68 22
              C78 22, 88 30, 90 40
              C92 50, 86 56, 80 60
              C74 64, 72 72, 78 78
              C84 84, 76 90, 68 84
              C62 78, 62 68, 64 60
              C66 52, 62 36, 68 22
              Z
            " />
          </g>

          {/* latitude lines */}
          <g stroke="#1DB954" strokeOpacity="0.10" fill="none">
            <ellipse cx="50" cy="50" rx="46" ry="18" />
            <ellipse cx="50" cy="50" rx="46" ry="28" />
            <ellipse cx="50" cy="50" rx="46" ry="38" />
          </g>

          {/* longitude hint */}
          <ellipse
            cx="50"
            cy="50"
            rx="20"
            ry="46"
            stroke="#1DB954"
            strokeOpacity="0.06"
            fill="none"
          />

          {/* 📍 Greece (best-approx position in Europe) */}
          <g className="greece-dot">
            <circle cx="54" cy="48" r="3" fill="#1DB954" fillOpacity="0.16" />
            <circle cx="54" cy="48" r="1.3" fill="#1DB954" fillOpacity="0.9" />
          </g>
        </svg>
      </div>
    </div>
  );
}
