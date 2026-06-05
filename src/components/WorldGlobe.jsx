import { useEffect, useRef } from "react";

export default function WorldGlobe() {
  const globeRef = useRef(null);

  useEffect(() => {
    let frame;

    const rotate = () => {
      const el = globeRef.current;
      if (!el) return;

      let angle = 0;

      const animate = () => {
        angle += 0.08; // very slow, premium feel
        el.style.transform = `rotate(${angle}deg)`;
        frame = requestAnimationFrame(animate);
      };

      animate();
    };

    rotate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
      }}
    >
      {/* TEXT */}
      <div>
        <div
          style={{
            fontSize: 14,
            color: "#1DB954",
            fontStyle: "italic",
            letterSpacing: 0.2,
          }}
        >
          Somewhere around the world
        </div>

        <div
          style={{
            fontSize: 11,
            color: "#888",
            marginTop: 4,
          }}
        >
          quietly building things
        </div>
      </div>

      {/* GLOBE */}
      <div
        ref={globeRef}
        style={{
          width: 54,
          height: 54,
          borderRadius: "50%",
          overflow: "hidden",
          filter: "drop-shadow(0 0 10px rgba(29,185,84,0.15))",
          willChange: "transform",
        }}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            {/* green wave gradient */}
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1DB954" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#1DB954" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#1DB954" stopOpacity="0.12" />
            </linearGradient>
          </defs>

          {/* base sphere */}
          <circle cx="50" cy="50" r="48" fill="#0b0f0c" />

          {/* latitude waves */}
          <path
            d="M10 35 C30 25, 70 25, 90 35"
            stroke="url(#g1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M10 50 C30 40, 70 40, 90 50"
            stroke="url(#g1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M10 65 C30 55, 70 55, 90 65"
            stroke="url(#g1)"
            strokeWidth="2"
            fill="none"
          />

          {/* longitude waves */}
          <path
            d="M35 10 C25 30, 25 70, 35 90"
            stroke="url(#g1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M50 10 C40 30, 40 70, 50 90"
            stroke="url(#g1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M65 10 C55 30, 55 70, 65 90"
            stroke="url(#g1)"
            strokeWidth="2"
            fill="none"
          />

          {/* subtle glow ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="#1DB954"
            strokeOpacity="0.2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
