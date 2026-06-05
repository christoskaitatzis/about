export default function FacetSeparator({ className = '' }) {
  return (
    <div className={`mt-12 ${className}`}>
      style={{
        position: "relative",
        height: 180,
        overflow: "hidden",
      }}
    >
      <style>{`
        .wave {
          transform-origin: center bottom;
          will-change: transform;
        }

        .wave-1 {
          animation:
            drift1 28s ease-in-out infinite,
            breathe1 18s ease-in-out infinite;
        }

        .wave-2 {
          animation:
            drift2 36s ease-in-out infinite,
            breathe2 24s ease-in-out infinite;
        }

        .wave-3 {
          animation:
            drift3 42s ease-in-out infinite,
            breathe3 30s ease-in-out infinite;
        }

        @keyframes drift1 {
          0%,100% { transform: translateX(0px); }
          50% { transform: translateX(-18px); }
        }

        @keyframes drift2 {
          0%,100% { transform: translateX(0px); }
          50% { transform: translateX(14px); }
        }

        @keyframes drift3 {
          0%,100% { transform: translateX(0px); }
          50% { transform: translateX(-10px); }
        }

        @keyframes breathe1 {
          0%,100% { scale: 1 1; }
          50% { scale: 1 1.08; }
        }

        @keyframes breathe2 {
          0%,100% { scale: 1 1; }
          50% { scale: 1 0.94; }
        }

        @keyframes breathe3 {
          0%,100% { scale: 1 1; }
          50% { scale: 1 1.05; }
        }

        @media (prefers-reduced-motion: reduce) {
          .wave {
            animation: none !important;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 1200 180"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <g className="wave wave-1">
          <path
            fill="rgba(29,185,84,0.05)"
            d="
              M0 90
              C120 40 240 140 360 95
              C500 40 650 150 800 85
              C950 20 1080 120 1200 70
              L1200 180
              L0 180
              Z
            "
          />
        </g>

        <g className="wave wave-2">
          <path
            fill="rgba(29,185,84,0.08)"
            d="
              M0 115
              C140 75 260 155 420 110
              C560 70 700 165 850 105
              C980 55 1100 135 1200 95
              L1200 180
              L0 180
              Z
            "
          />
        </g>

        <g className="wave wave-3">
          <path
            fill="rgba(29,185,84,0.12)"
            d="
              M0 145
              C180 95 320 175 500 130
              C650 90 820 180 980 125
              C1080 95 1150 140 1200 120
              L1200 180
              L0 180
              Z
            "
          />
        </g>
      </svg>
    </div>
  );
}
