"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function PhonePreview() {
  // Phone screen dimensions
  const phoneWidth = 320;
  const phoneHeight = 660;
  const bezelWidth = 10;
  const borderRadius = 48;

  // Render iframe at mobile viewport, then scale to fit
  const iframeMobileWidth = 375;
  const iframeMobileHeight = 900;
  const scale = phoneWidth / iframeMobileWidth;

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
            {/* iPhone — silver/titanium bezel */}
            <div
              style={{
                width: phoneWidth + bezelWidth * 2,
                height: phoneHeight + bezelWidth * 2,
                borderRadius,
                padding: bezelWidth,
                background: "linear-gradient(165deg, #e8e8ed 0%, #b0b0b8 20%, #d4d4da 40%, #a0a0a8 60%, #c8c8d0 80%, #b8b8c0 100%)",
                boxShadow:
                  "0 25px 60px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.1)",
                position: "relative",
              }}
            >
              {/* Screen area */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: borderRadius - bezelWidth,
                  background: "#000",
                }}
              >
                {/* Iframe: mobile width scaled to phone */}
                <iframe
                  src="https://preview.nws.ai/broadbrand_za/campari/"
                  title="Campari Africa Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  className="block border-0"
                  style={{
                    width: iframeMobileWidth,
                    height: iframeMobileHeight,
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                  }}
                />
              </div>

              {/* Dynamic Island */}
              <div
                className="absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  top: bezelWidth + 10,
                  width: 90,
                  height: 26,
                  zIndex: 10,
                  background: "#000",
                }}
              />

              {/* Home indicator */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full"
                style={{ width: 110, height: 4, zIndex: 10, background: "rgba(255,255,255,0.25)" }}
              />

              {/* Ambient glow */}
              <div className="absolute -inset-20 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(82,158,121,0.15),transparent_60%)]" />
            </div>

            {/* Link below phone */}
            <a
              href="https://preview.nws.ai/broadbrand_za/campari/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-green hover:text-green-light text-sm font-medium tracking-wide transition-colors duration-200"
            >
              Example brand story
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
