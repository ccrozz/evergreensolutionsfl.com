export default function FloridaMap() {
  const pins = [
    { label: "Jacksonville", cx: 310, cy: 118 },
    { label: "Orlando", cx: 278, cy: 220 },
    { label: "Tampa", cx: 214, cy: 258 },
    { label: "Fort Myers", cx: 218, cy: 330 },
    { label: "Miami", cx: 308, cy: 392 },
  ];

  return (
    <svg
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto w-full max-w-sm"
      role="img"
      aria-label="Map of Florida with city coverage pins"
    >
      <path
        d="M180,20 L360,20 L370,80 L380,180 L370,280 L340,360 L300,420 L270,460 L250,480 L230,470 L200,440 L180,400 L160,360 L140,300 L130,240 L140,180 L150,100 Z"
        fill="#D4E8D0"
        stroke="#1B5E20"
        strokeWidth="3"
      />
      {pins.map((pin) => (
        <g key={pin.label} className="cursor-pointer group">
          <circle
            cx={pin.cx}
            cy={pin.cy}
            r="10"
            fill="#1B5E20"
            className="origin-center transition-transform duration-200 group-hover:scale-125"
          />
          <circle cx={pin.cx} cy={pin.cy} r="4" fill="white" />
          <text
            x={pin.cx + 14}
            y={pin.cy + 4}
            fontSize="11"
            fill="#1B5E20"
            fontFamily="DM Sans"
          >
            {pin.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
