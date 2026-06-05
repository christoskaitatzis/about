// SpotifyWidget.jsx
const TRACK_ID = "20WOJ1e4fF9YjOaP06W8rj";

export default function SpotifyWidget() {
  return (
    <div style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 50,
      display: "flex", alignItems: "flex-end", gap: 14,
    }}>
      <div style={{ maxWidth: 170, textAlign: "right", paddingBottom: 12 }}>
        <div style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: "italic", fontSize: 14, color: "#1DB954", lineHeight: 1.35,
        }}>
          Check out my track
          <span style={{ marginLeft: 4, display: "inline-block", animation: "nudge 1.8s ease-in-out infinite" }}>→</span>
        </div>
        <div style={{ fontSize: 11, color: "#888", marginTop: 6, lineHeight: 1.4 }}>
          and add it to your playlist
        </div>
      </div>

      <div style={{
        width: 272,
        background: "rgba(255,255,255,0.85)",
        border: "0.5px solid rgba(29,185,84,0.22)",
        borderRadius: 14,
        padding: "13px 15px",
        backdropFilter: "blur(6px)",
      }}>
        {/* card contents from previous step */}
      </div>

      <style>{`
        @keyframes nudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
