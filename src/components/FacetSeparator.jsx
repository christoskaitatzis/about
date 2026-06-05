// components/FacetSeparator.jsx
export default function FacetSeparator() {
  return (
    <div className="max-w-5xl mx-auto px-8 my-12">
      <svg
        width="100%"
        height="44"
        viewBox="0 0 600 44"
        preserveAspectRatio="none"
      >
        <g style={{ mixBlendMode: 'multiply' }}>
          <polygon points="0,22 70,8 160,22 70,34"      fill="#1DB954" fillOpacity="0.2" />
          <polygon points="100,22 200,4 290,22 200,36"  fill="#1DB954" fillOpacity="0.2" />
          <polygon points="220,22 320,14 410,22 320,30" fill="#1DB954" fillOpacity="0.2" />
          <polygon points="340,22 430,6 510,22 430,32"  fill="#1DB954" fillOpacity="0.2" />
          <polygon points="440,22 540,12 600,22 540,28" fill="#1DB954" fillOpacity="0.2" />
        </g>
      </svg>
    </div>
  );
}
