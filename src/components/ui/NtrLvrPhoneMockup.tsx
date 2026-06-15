const PLANT_DOTS = [
  { top: "12%", left: "18%", color: "bg-emerald-400", size: "h-5 w-5" },
  { top: "22%", left: "42%", color: "bg-amber-400", size: "h-4 w-4" },
  { top: "18%", left: "68%", color: "bg-violet-400", size: "h-5 w-5" },
  { top: "35%", left: "28%", color: "bg-emerald-500", size: "h-6 w-6" },
  { top: "38%", left: "55%", color: "bg-lime-400", size: "h-4 w-4" },
  { top: "32%", left: "78%", color: "bg-orange-400", size: "h-5 w-5" },
  { top: "52%", left: "15%", color: "bg-teal-400", size: "h-4 w-4" },
  { top: "48%", left: "38%", color: "bg-emerald-400", size: "h-5 w-5" },
  { top: "55%", left: "62%", color: "bg-violet-400", size: "h-4 w-4" },
  { top: "50%", left: "82%", color: "bg-amber-300", size: "h-3 w-3" },
  { top: "68%", left: "25%", color: "bg-lime-500", size: "h-5 w-5" },
  { top: "72%", left: "48%", color: "bg-emerald-400", size: "h-4 w-4" },
  { top: "65%", left: "70%", color: "bg-orange-400", size: "h-5 w-5" },
];

export default function NtrLvrPhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="rounded-[2.5rem] border-[3px] border-zinc-700 bg-zinc-900 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)]">
        <div className="overflow-hidden rounded-[2rem] bg-[#0a120e]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-leafGreen">
              NTR LVR
            </span>
            <span className="text-[9px] text-white/40">Plot planner</span>
          </div>

          <div className="relative aspect-[4/5] bg-[#0d1611]">
            <div
              className="absolute inset-3 rounded-lg border border-white/10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            >
              {PLANT_DOTS.map((dot, index) => (
                <span
                  key={index}
                  className={`absolute rounded-full shadow-sm ring-2 ring-black/20 ${dot.color} ${dot.size}`}
                  style={{ top: dot.top, left: dot.left }}
                  aria-hidden
                />
              ))}
            </div>
          </div>

          <div className="space-y-2 border-t border-white/10 bg-zinc-950/80 px-4 py-3 text-[10px] text-white/70">
            <div className="flex justify-between">
              <span>Plants placed</span>
              <span className="font-semibold text-white">15</span>
            </div>
            <div className="flex justify-between">
              <span>Canopy cover</span>
              <span className="font-semibold text-white">42%</span>
            </div>
            <div className="flex justify-between">
              <span>Pollinator value</span>
              <span className="font-semibold text-brand-leafGreen">High</span>
            </div>
            <div className="mt-2 flex items-center gap-2 border-t border-white/10 pt-2">
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded border border-brand-leafGreen bg-brand-leafGreen/20">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
                  <path
                    d="M1.5 4L3 5.5L6.5 2"
                    stroke="#4CAF50"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-brand-leafGreen">Ready to send</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
