"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function PhonePreview() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(82,158,121,0.06),transparent)]" />

      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/30 bg-green/[0.08] text-green text-[11px] tracking-[0.2em] uppercase font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-green" />
              Live Preview
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Example Brand Story
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              A visual-first approach that cuts through the noise of a highly fragmented attention economy.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex justify-center">
            {/* iPhone frame */}
            <div className="relative">
              {/* Outer shell */}
              <div
                className="relative rounded-[54px] bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] shadow-[0_0_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden"
                style={{ width: 523, height: 1013 }}
              >
                {/* Iframe - oversized to fully cover phone and hide site controls */}
                <iframe
                  src="https://preview.nws.ai/broadbrand_za/campari/"
                  className="absolute border-0"
                  style={{
                    top: "0",
                    left: "-10%",
                    width: "120%",
                    height: "125%",
                  }}
                  title="Campari Africa Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                />
              </div>

              {/* Reflection glow */}
              <div className="absolute -inset-10 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(82,158,121,0.08),transparent_70%)]" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
