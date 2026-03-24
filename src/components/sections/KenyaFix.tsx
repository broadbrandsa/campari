"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";

export function KenyaFix() {
  return (
    <section id="kenya-fix" className="relative py-20 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_80%_50%,rgba(82,158,121,0.08),transparent)]" />

      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          {/* Section label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] tracking-[0.2em] uppercase text-green font-medium">
              04
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Solving the Kenya Meta Account Problem
          </h2>
          <p className="text-white/65 text-lg max-w-3xl leading-relaxed mb-16">
            One of the most common operational blockers for agencies targeting
            Kenya on Meta. Here&apos;s why it happens and how to fix it.
          </p>
        </ScrollReveal>

        {/* Why it fails */}
        <ScrollReveal delay={0.1}>
        <h3 className="text-[11px] tracking-[0.2em] uppercase text-red-400 font-medium mb-6">
          Why Kenya Meta Accounts Fail
        </h3>
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            {
              cause: "Billing Friction",
              detail:
                "Kenyan accounts are locked to manual payment in KES. Most Kenyan bank cards automatically decline foreign ad-platform charges. Local debit cards often lack international transaction capability.",
            },
            {
              cause: "Verification Barriers",
              detail:
                "Business verification requires a valid KRA PIN, domain-matched email, and formal Kenyan company registration — problematic for agencies without a local entity.",
            },
            {
              cause: "Alcohol Review Friction",
              detail:
                "Meta's automated systems apply heightened scrutiny to alcohol advertisers. Combined with Kenya's tightening policy environment, this increases rejection rates.",
            },
          ].map((item) => (
            <div
              key={item.cause}
              className="p-6 rounded-lg border border-red-500/15 bg-red-500/[0.03]"
            >
              <span className="block text-red-400 text-sm font-medium mb-3">
                {item.cause}
              </span>
              <p className="text-white/65 text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        </ScrollReveal>

        {/* The solution */}
        <ScrollReveal delay={0.15}>
        <div className="rounded-xl border border-green/25 bg-green/[0.04] p-8 md:p-12 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-green/20 text-green border-green/30 text-[10px]">
              Recommended Solution
            </Badge>
          </div>
          <h3 className="font-display text-3xl font-bold text-white mb-4">
            Centralised SA Business Manager
          </h3>
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-3xl">
            Set up or manage Kenya-targeted campaigns through Meta Business
            Manager established under Campari South Africa (Pty) Ltd, while
            targeting Kenya as a geo-location within campaign settings.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              "Bypasses Kenya billing friction entirely",
              "Leverages Campari's existing SA subsidiary for straightforward business verification",
              "Maintains full compliance — Kenyan advertising law still applies through campaign settings and creative",
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded border border-green/15 bg-green/[0.04]"
              >
                <Check className="w-5 h-5 text-green shrink-0 mt-0.5" />
                <span className="text-white/75 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>

        {/* Step by step */}
        <ScrollReveal delay={0.1}>
        <h3 className="text-[11px] tracking-[0.2em] uppercase text-green font-medium mb-8">
          Step-by-Step Setup
        </h3>
        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "Validate Campaign Objectives",
              detail:
                "Confirm Kenya tactics are compatible with current policy direction. If relying on influencers or lifestyle creative, redesign before touching the account.",
            },
            {
              step: "02",
              title: "Use SA Business Manager",
              detail:
                "Set up or use the existing Campari SA entity. Set Kenya as a geo-target in Audience settings.",
            },
            {
              step: "03",
              title: "Implement Age-Gating",
              detail:
                "Date-of-birth affirmation gate on all landing pages, denying access and redirecting under-18 users to responsible drinking resources.",
            },
            {
              step: "04",
              title: "Add RDM to Social Profiles",
              detail:
                "Add #drinkresponsibly and responsible drinking messaging to all social bios during campaign periods.",
            },
            {
              step: "05",
              title: "Configure 18+ Audience Controls",
              detail:
                "Use Meta's built-in 18+ settings in the Audience Controls section of Ads Manager for all Kenya-targeted campaigns.",
            },
            {
              step: "06",
              title: "Pre-assemble Verification Audit Pack",
              detail:
                "Company registration, brand ownership authority, landing page screenshots showing age gate and RDM, internal approval sign-offs.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="group flex gap-6 items-start p-6 rounded-lg border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-green/20 transition-all duration-300"
            >
              <span className="text-green/40 font-display text-3xl font-bold group-hover:text-green/70 transition-colors">
                {s.step}
              </span>
              <div>
                <h4 className="text-white font-medium mb-1">{s.title}</h4>
                <p className="text-white/65 text-sm leading-relaxed">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback note */}
        <div className="mt-8 p-4 rounded border border-white/[0.06] bg-white/[0.02]">
          <p className="text-white/65 text-sm">
            <strong className="text-white/60">Fallback:</strong> Virtual
            USD-denominated cards (e.g. EverTry) can bypass Kenyan bank declines
            if a Kenya-billed account is specifically required, but the SA
            Business Manager route is cleaner and lower risk.
          </p>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
