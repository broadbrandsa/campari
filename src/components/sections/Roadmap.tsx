"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const workstreams = [
  {
    name: "Governance",
    color: "green",
    phases: [
      "Formalise Africa Alcohol Playbook using Campari Group code as baseline. Create creative QA checklist: RDM, 25+ talent, 70/30, disclosures.",
      "Add Nigeria vetting workflow and documentation templates. Agree SOP with media partners: \"no approval, no publish.\"",
      "Stress-test with larger creative volume. Lock quarterly compliance calendar to reassess Kenya and SA legislative changes.",
    ],
  },
  {
    name: "Meta Infrastructure",
    color: "green",
    phases: [
      "Establish Campari SA Business Manager as the centralised Africa structure. Configure Kenya as a geo-targeted location.",
      "Implement age affirmation on all brand sites and landing pages. Add RDM to all social bios.",
      "Expand country-specific age and RDM language. Add UGC moderation workflows.",
    ],
  },
  {
    name: "Paid Social & Video",
    color: "green",
    phases: [
      "Pilot in South Africa with age-targeted YouTube and controlled creative sets. Document compliance proof.",
      "Add Nigeria paid activity after ARCON approval pipeline is proven. Small-spend-first approach to validate review.",
      "Evaluate Kenya paid activity (non-influencer, non-lifestyle only) based on regulatory signals. Scale or pause decision.",
    ],
  },
  {
    name: "Programmatic",
    color: "green",
    phases: [
      "Build supply strategy: identify publishers with alcohol opt-in. Prioritise PMPs over open auction.",
      "Launch DV360 and private deals in South Africa and Nigeria. Monitor for manual review delays.",
      "Scale via additional PMP/PG deals. Formalise publisher allowlist and blocklist per market.",
    ],
  },
  {
    name: "Influencer",
    color: "green",
    phases: [
      "Define \"where allowed\" operating model. Configure IndaHash creator vetting: 25+, 70/30 audience, disclosure, takedown.",
      "Run small South Africa pilot only. Document compliance outcomes.",
      "Expand influencer to Nigeria with ARCON workflow confirmed. Keep Kenya and Egypt excluded until further notice.",
    ],
  },
];

const phaseLabels = ["Days 1–30", "Days 31–60", "Days 61–90"];

export function Roadmap() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="roadmap" className="relative py-20 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(82,158,121,0.06),transparent)]" />

      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          {/* Section label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] tracking-[0.2em] uppercase text-green font-medium">
              06
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            90-Day Activation Roadmap
          </h2>
          <p className="text-white/65 text-lg max-w-3xl leading-relaxed mb-16">
            Phased implementation timeline across governance, infrastructure, paid
            social, programmatic, and influencer workstreams.
          </p>
        </ScrollReveal>

        {/* Phase selector */}
        <ScrollReveal delay={0.1}>
        <div className="flex gap-2 mb-12">
          {phaseLabels.map((label, i) => (
            <button
              key={label}
              onClick={() => setActivePhase(i)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activePhase === i
                  ? "bg-green text-white shadow-[0_0_20px_rgba(82,158,121,0.2)]"
                  : "bg-white/[0.04] text-white/40 border border-white/[0.08] hover:text-white/70 hover:border-white/15"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-green/40 via-green/20 to-transparent hidden md:block" />

          <div className="space-y-6">
            {workstreams.map((ws, i) => (
              <div key={ws.name} className="group flex gap-6 md:gap-8 items-start">
                {/* Dot */}
                <div className="hidden md:flex shrink-0 w-[37px] items-center justify-center pt-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-green/60 ring-4 ring-navy group-hover:bg-green group-hover:ring-green/20 transition-all" />
                </div>

                {/* Card */}
                <div className="flex-1 p-6 md:p-8 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-green/15 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-green text-sm font-medium">
                      {ws.name}
                    </span>
                    <span className="text-[10px] tracking-wider uppercase text-white/25 px-2 py-0.5 rounded bg-white/[0.04]">
                      {phaseLabels[activePhase]}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {ws.phases[activePhase]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
