import Image from "next/image";

type CityPin = {
  label: string;
  x: number;
  y: number;
};

const CITY_PINS: CityPin[] = [
  // Percent coordinates tuned to the daytime full-state image in /public/florida-satellite.jpg.
  { label: "Jacksonville", x: 55, y: 37 },
  { label: "Orlando", x: 52, y: 49 },
  { label: "Tampa", x: 43, y: 59 },
  { label: "Fort Myers", x: 50, y: 72 },
  { label: "Miami", x: 69, y: 82 },
  { label: "Brevard County", x: 65, y: 56.4 },
  { label: "Broward County", x: 71.1, y: 77.1 },
  { label: "Alachua County", x: 50.6, y: 44.5 },
  { label: "Highlands County", x: 57.1, y: 64.3 },
];

export default function FloridaMap() {
  return (
    <div
      className="relative mx-auto aspect-[17/22] w-full overflow-hidden rounded-2xl shadow-soft"
      role="img"
      aria-label="High-resolution daytime satellite photo of Florida with city and county coverage pins"
    >
      <Image
        src="/florida-satellite.jpg"
        alt="Daytime satellite photo of Florida from space"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 560px"
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
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black/55 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
              {pin.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
