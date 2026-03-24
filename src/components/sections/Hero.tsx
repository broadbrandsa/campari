import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105"
        style={{ backgroundImage: "url('/images/la-mauny.jpg')" }}
      />
      {/* Lighter overlay */}
      <div className="absolute inset-0 bg-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-transparent to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(82,158,121,0.12),transparent)]" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Tag */}
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/30 bg-green/[0.08] text-green text-[11px] tracking-[0.2em] uppercase font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-green" />
            Strategic Proposal — March 2026
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="text-white">Digital Advertising</span>
          <br />
          <span className="text-offwhite/40">&</span>{" "}
          <span className="text-green">Influencer Guidance</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Where, how, and under what conditions Campari Group can run paid
          digital advertising across Meta, Google, DV360, and influencer
          channels across Africa.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="#overview"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-green hover:bg-green-light text-white font-medium text-sm tracking-wide rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(82,158,121,0.3)]"
          >
            Read the Full Proposal
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="mailto:Shakierg@broadbrand.co.za"
            className="group inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-medium text-sm tracking-wide rounded transition-all duration-300 hover:bg-white/[0.06]"
          >
            Let&apos;s Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <span
          className="block mt-4 text-[11px] tracking-[0.15em] uppercase text-white/40 animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          Prepared by BroadBrand for Campari Group Africa
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: "0.8s" }}>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20" />
      </div>
    </section>
  );
}
