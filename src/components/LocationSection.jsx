import { useEffect, useRef } from "react";

/**
 * LocationSection
 * ---------------
 * Inline location row: italic green title + subtitle + small rotating globe.
 *
 * Props:
 *   title    {string}  – italic headline  (default: "Somewhere around the world")
 *   subtitle {string}  – grey subtext     (default: "taking off from Thessaloniki, Greece")
 *   lat      {number}  – marker latitude  (default: 40.6401 – Thessaloniki)
 *   lng      {number}  – marker longitude (default: 22.9444)
 *   size     {number}  – globe diameter in px (default: 160)
 *
 * Install dep:  npm install cobe
 */
export default function LocationSection({
  title    = "Somewhere around the world",
  subtitle = "taking off from Thessaloniki, Greece",
  lat      = 40.6401,
  lng      = 22.9444,
  size     = 160,
}) {
  const canvasRef = useRef(null);
  const phiRef    = useRef(0);

  useEffect(() => {
    let globe;
    let mounted = true;

    import("cobe").then(({ default: createGlobe }) => {
      if (!mounted || !canvasRef.current) return;

      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: dpr,
        width:  size * dpr,
        height: size * dpr,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 3.5,
        mapSamples: 16000,
        mapBrightness: 12,
        baseColor:   [0.10, 0.28, 0.16],
        markerColor: [0.30, 0.85, 0.50],
        glowColor:   [0.15, 0.45, 0.25],
        markers: [{ location: [lat, lng], size: 0.05 }],
        onRender(state) {
          phiRef.current += 0.004;
          state.phi    = phiRef.current;
          state.width  = size * dpr;
          state.height = size * dpr;
        },
      });
    });

    return () => {
      mounted = false;
      globe?.destroy?.();
    };
  }, [lat, lng, size]);

  return (
    <div style={styles.row}>
      <div style={styles.textCol}>
        <span style={styles.title}>{title}</span>
        <span style={styles.subtitle}>{subtitle}</span>
      </div>

      <canvas
        ref={canvasRef}
        width={size * 2}
        height={size * 2}
        style={{ ...styles.canvas, width: size, height: size }}
      />
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    alignItems: "center",
    gap: "1.1rem",
  },
  textCol: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },
  title: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontStyle: "italic",
    fontSize: "1.1rem",
    color: "#4a9e6b",
    fontWeight: 400,
    lineHeight: 1.25,
  },
  subtitle: {
    fontSize: "0.82rem",
    color: "#888",
    fontWeight: 400,
    letterSpacing: "0.01em",
  },
  canvas: {
    borderRadius: "50%",
    display: "block",
    flexShrink: 0,
  },
};
