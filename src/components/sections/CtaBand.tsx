import Button from "@/components/ui/Button";

export default function CtaBand() {
  return (
    <section className="overflow-x-clip bg-brand-darkGreen px-4 py-12 text-white sm:py-16">
      <div className="container text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">Ready to Restore Your Land?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-white/80 sm:mt-4 sm:text-lg">
          Let&apos;s build a plan for your property&apos;s ecological future together.
        </p>
        <Button href="#request-quote" className="mt-6 w-full bg-brand-darkGreen text-brand-leafGreen hover:bg-brand-darkGreen sm:mt-8 sm:w-auto">
          Request a Free Quote
        </Button>
      </div>
    </section>
  );
}
