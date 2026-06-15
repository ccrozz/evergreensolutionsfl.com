import Image from "next/image";
import { NTR_LVR_SCREENSHOT_SRC } from "@/lib/constants";

export default function NtrLvrPhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px]">
      <div className="rounded-[2.5rem] border-[3px] border-zinc-700 bg-zinc-900 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)]">
        <div className="relative aspect-[3/5] overflow-hidden rounded-[2rem] bg-[#0a120e]">
          <Image
            src={NTR_LVR_SCREENSHOT_SRC}
            alt="NTR LVR landscape planner with canvas grid, state selection, and plant layout tools"
            fill
            sizes="(max-width: 640px) 280px, 300px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
