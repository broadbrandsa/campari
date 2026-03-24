"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";

const speeds = [
  {
    status: "open",
    label: "Fully Open",
    icon: "✅",
    markets: "South Africa",
    summary:
      "All platforms open. Self-regulatory framework applies. The proposed total ban bill (B21-2025) is a forward risk — avoid inflexible long-term commitments.",
    cardClass: "bg-offwhite border-green/30",
    badgeClass: "bg-green/15 text-green-dark border-green/30",
  },
  {
    status: "procedural",
    label: "Procedural",
    icon: "⚠️",
    markets: "Nigeria, Kenya",
    summary:
      "Technically permitted but operationally heavy. Nigeria requires ARCON + NAFDAC pre-approval for every creative. Kenya is trending toward a near-total ban — obtain legal opinion before activating.",
    cardClass: "bg-offwhite border-amber-500/30",
    badgeClass: "bg-amber-100 text-amber-700 border-amber-300",
  },
  {
    status: "banned",
    label: "Banned",
    icon: "❌",
    markets: "Egypt",
    summary:
      "Complete prohibition in law and on all major platforms. No paid digital alcohol advertising of any kind. Redirect all activity to trade and on-premise activation.",
    cardClass: "bg-offwhite border-red-500/30",
    badgeClass: "bg-red-100 text-red-700 border-red-300",
  },
];

export function Overview() {
  return (
    <section id="overview" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] tracking-[0.2em] uppercase text-green font-medium">
              01
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Operating Overview
          </h2>
          <p className="text-white/65 text-lg max-w-3xl leading-relaxed mb-16">
            Alcohol advertising across Africa operates on sharply different rules
            depending on the market, platform, and publisher. The operating reality
            breaks into three speeds.
          </p>
        </ScrollReveal>

        {/* Three speed cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {speeds.map((speed, i) => (
            <ScrollReveal key={speed.status} delay={i * 0.1}>
              <div
                className={`group relative rounded-lg border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] ${speed.cardClass}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <Badge
                    variant="outline"
                    className={`text-[10px] tracking-wider uppercase ${speed.badgeClass} border-current`}
                  >
                    {speed.label}
                  </Badge>
                </div>
                <h3 className="font-display text-2xl font-semibold text-navy mb-2">
                  {speed.markets}
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed">
                  {speed.summary}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
