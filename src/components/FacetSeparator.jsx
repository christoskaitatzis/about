// components/FacetSeparator.jsx
export default function FacetSeparator() {
  return (
    <div className="w-full py-12 overflow-hidden">
      <style>{`
        .peak {
          transform-box: fill-box;
          transform-origin: center bottom;
        }

        .peak-1 {
          animation: breathe1 14s ease-in-out infinite;
        }

        .peak-2 {
          animation: breathe2 18s ease-in-out infinite;
        }

        .peak-3 {
          animation: breathe3 16s ease-in-out infinite;
        }

        .peak-4 {
          animation: breathe4 20s ease-in-out infinite;
        }

        @keyframes breathe1 {
          0%,100% { transform: scaleY(1); }
          50% { transform: scaleY(1.08); }
        }

        @keyframes breathe2 {
          0%,100% { transform: scaleY(1); }
          50% { transform: scaleY(0.92); }
        }

        @keyframes breathe3 {
          0%,100% { transform: scaleY(1); }
          50% { transform: scaleY(1.06); }
        }

        @keyframes breathe4 {
          0%,100% { transform: scaleY(1); }
          50% { transform: scaleY(0.95); }
        }

        @media (prefers-reduced-motion: reduce) {
          .peak {
            animation: none !important;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 1200 80"
        className="w-full h-20"
        preserveAspectRatio="none"
      >
        {/* baseline */}
        <line
          x1="0"
          y1="50"
          x2="1200"
          y2="50"
          stroke="#1DB954"
          strokeOpacity="0.15"
          strokeWidth="1"
        />

        <g
          fill="#1DB954"
          fillOpacity="0.14"
          style={{ mixBlendMode: "multiply" }}
        >
          <path
            className="peak peak-1"
            d="
              M0 50
              C60 50 90 22 140 22
              C190 22 220 50 280 50
              Z
            "
          />

          <path
            className="peak peak-2"
            d="
              M220 50
              C320 50 350 8 430 8
              C510 8 550 50 650 50
              Z
            "
          />

          <path
            className="peak peak-3"
            d="
              M560 50
              C620 50 660 26 720 26
              C780 26 820 50 900 50
              Z
            "
          />

          <path
            className="peak peak-4"
            d="
              M820 50
              C930 50 980 14 1060 14
              C1140 14 1170 50 1200 50
              Z
            "
          />
        </g>
      </svg>
    </div>
  );
}

// export default function FacetSeparator() {
//   return (
//     <div className="max-w-5xl mx-auto px-8 my-12">
//       <svg
//         width="100%"
//         height="44"
//         viewBox="0 0 600 44"
//         preserveAspectRatio="none"
//       >
//         <g style={{ mixBlendMode: 'multiply' }}>
//           <polygon points="0,22 70,8 160,22 70,34"      fill="#1DB954" fillOpacity="0.2" />
//           <polygon points="100,22 200,4 290,22 200,36"  fill="#1DB954" fillOpacity="0.2" />
//           <polygon points="220,22 320,14 410,22 320,30" fill="#1DB954" fillOpacity="0.2" />
//           <polygon points="340,22 430,6 510,22 430,32"  fill="#1DB954" fillOpacity="0.2" />
//           <polygon points="440,22 540,12 600,22 540,28" fill="#1DB954" fillOpacity="0.2" />
//         </g>
//       </svg>
//     </div>
//   );
// }
