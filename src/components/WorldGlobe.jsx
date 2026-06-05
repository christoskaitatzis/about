import { useEffect, useRef } from "react";

export default function WorldGlobe() {
  const globeRef = useRef(null);

  useEffect(() => {
    let frame;
    let angle = 0;

    const animate = () => {
      angle += 0.05;
      if (globeRef.current) {
        globeRef.current.style.transform = `rotate(${angle}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={globeRef}
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
        filter: "drop-shadow(0 0 10px rgba(29,185,84,0.18))",
        willChange: "transform",
      }}
    >
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.6);
            opacity: 0.15;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.6;
          }
        }

        .greece-dot {
          transform-origin: center;
          animation: pulse 2.4s ease-in-out infinite;
        }
      `}</style>

      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <defs>
          <radialGradient id="ocean" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#0b1410" />
            <stop offset="100%" stopColor="#050807" />
          </radialGradient>

          <radialGradient id="glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#1DB954" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1DB954" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* base */}
        <circle cx="50" cy="50" r="50" fill="url(#ocean)" />
        <circle cx="50" cy="50" r="50" fill="url(#glow)" />

        {/* continents */}
        <g fill="#1DB954" fillOpacity="0.22">
          <path d="M28 22 C18 30, 18 45, 26 52 C30 56, 30 64, 24 70 C18 78, 26 88, 34 80 C42 72, 40 60, 38 50 C36 38, 36 28, 28 22 Z" />
          <path d="M52 20 C48 28, 50 34, 54 38 C58 42, 58 48, 54 52 C50 56, 48 64, 52 72 C56 82, 64 78, 66 70 C68 62, 66 54, 62 48 C58 42, 60 30, 52 20 Z" />
          <path d="M68 26 C78 24, 86 30, 88 38 C90 46, 86 52, 80 56 C74 60, 72 68, 78 74 C84 80, 76 86, 70 82 C64 78, 64 70, 66 62 C68 54, 64 40, 68 26 Z" />
        </g>

        {/* latitude lines */}
        <g stroke="#1DB954" strokeOpacity="0.12" fill="none">
          <ellipse cx="50" cy="50" rx="45" ry="18" />
          <ellipse cx="50" cy="50" rx="45" ry="28" />
          <ellipse cx="50" cy="50" rx="45" ry="38" />
        </g>

        {/* longitude hint */}
        <ellipse
          cx="50"
          cy="50"
          rx="18"
          ry="45"
          stroke="#1DB954"
          strokeOpacity="0.08"
          fill="none"
        />

        {/* 🌍 GREECE DOT (pulsing) */}
        <g className="greece-dot">
          {/* outer glow */}
          <circle
            cx="56"
            cy="42"
            r="3.2"
            fill="#1DB954"
            fillOpacity="0.18"
          />

          {/* core dot */}
          <circle
            cx="56"
            cy="42"
            r="1.4"
            fill="#1DB954"
            fillOpacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
}
