import Button from "@/components/ui/Button";

export default function CtaBand() {
  return (
    <section className="bg-brand-darkGreen py-16 text-white">
      <div className="container text-center">
        <h2 className="font-display text-4xl md:text-5xl">Ready to Restore Your Land?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Let&apos;s build a plan for your property&apos;s ecological future together.
        </p>
        <Button href="#request-quote" className="mt-8 bg-white text-brand-darkGreen hover:bg-brand-cream">
          Request a Free Quote
        </Button>
      </div>
    </section>
  );
}
