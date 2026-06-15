import Image from "next/image";

type CityPin = {
  label: string;
  x: number;
  y: number;
};

const CITY_PINS: CityPin[] = [
  { label: "Jacksonville", x: 55, y: 33 },
  { label: "Orlando", x: 57, y: 55 },
  { label: "Tampa", x: 43, y: 63 },
  { label: "Fort Myers", x: 50, y: 80 },
  { label: "Miami", x: 71, y: 91 },
  { label: "Brevard County", x: 65, y: 61 },
  { label: "Broward County", x: 71.1, y: 85 },
  { label: "Alachua County", x: 49, y: 44.5 },
  { label: "Highlands County", x: 57.1, y: 65.3 },
];

type FloridaMapProps = {
  className?: string;
};

export default function FloridaMap({ className = "" }: FloridaMapProps) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-xl shadow-soft ${className}`}
      role="img"
      aria-label="High-resolution daytime satellite photo of Florida with city and county coverage pins"
    >
      <Image
        src="/florida-satellite.jpg"
        alt="Daytime satellite photo of Florida from space"
        fill
        sizes="(max-width: 1024px) 100vw, 560px"
        className="object-cover"
        quality={95}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      {CITY_PINS.map((pin) => (
        <div
          key={pin.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <div className="group relative cursor-pointer">
            <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-leafGreen/30 blur-[1px]" />
            <span className="relative block h-3.5 w-3.5 rounded-full border border-white bg-brand-leafGreen shadow-[0_0_0_1px_rgba(0,0,0,0.2)]" />
            <span className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-black/55 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm lg:block">
              {pin.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
