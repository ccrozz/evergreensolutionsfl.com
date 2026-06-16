import Button from "@/components/ui/Button";

export default function CtaBand() {
  return (
    <section className="overflow-x-clip bg-brand-darkGreen px-4 py-10 text-white sm:py-16">
      <div className="container text-center">
        <h2 className="text-balance font-display text-[1.75rem] sm:text-4xl md:text-5xl">
          Ready to Restore Your Land?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/85 sm:mt-4 sm:max-w-2xl sm:text-lg">
          Let&apos;s build a plan for your property&apos;s ecological future together.
        </p>
        <Button
          href="#request-quote"
          className="mt-5 w-full bg-white text-brand-darkGreen hover:bg-brand-cream sm:mt-8 sm:w-auto"
        >
          Request a Free Quote
        </Button>
      </div>
    </section>
  );
}
