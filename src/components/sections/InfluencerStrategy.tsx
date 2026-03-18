"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export function InfluencerStrategy() {
  return (
    <section id="influencer" className="relative py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-dark/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] tracking-[0.2em] uppercase text-green font-medium">
            05
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Influencer Strategy & IndaHash
        </h2>
        <p className="text-white/45 text-lg max-w-3xl leading-relaxed mb-16">
          Non-negotiable baseline requirements, market-by-market viability, and
          platform assessment for influencer activation across Africa.
        </p>

        {/* Baseline requirements */}
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 mb-16">
          <h3 className="text-[11px] tracking-[0.2em] uppercase text-green font-medium mb-8">
            Campari Group Non-Negotiable Baseline — All Markets
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Audience Composition", value: "At least 70% of audience expected to be adults — the 70/30 rule" },
              { label: "Age Targeting", value: "Target only above the Local Drinking Age (LDA) using available platform tools" },
              { label: "Talent Age", value: "All influencers, models, and brand ambassadors must appear 25 or older" },
              { label: "Responsible Drinking", value: "Visible #drinkresponsibly in every asset and social bio during campaign" },
              { label: "Disclosure", value: "#adv for paid content; #gifted for gifted content — required in every post" },
              { label: "Monitoring & Takedown", value: "Pre-approval rights on all content; non-compliant content removed within 48 hours; termination rights for repeat breaches" },
            ].map((req) => (
              <div key={req.label} className="p-5 rounded-lg border border-white/[0.06] bg-navy/50">
                <span className="block text-green text-xs font-medium tracking-wide uppercase mb-2">{req.label}</span>
                <p className="text-white/50 text-sm leading-relaxed">{req.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market viability */}
        <h3 className="font-display text-2xl font-semibold text-white mb-8">
          Market-by-Market Viability
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {[
            {
              market: "South Africa",
              status: "Active",
              statusColor: "bg-green/20 text-green border-green/30",
              detail: "Influencer marketing viable with guardrails. 25+ creators, 70/30 adult audience validation, visible RDM. Monitor Liquor Amendment Bill — if enacted, all influencer activity would cease.",
            },
            {
              market: "Nigeria",
              status: "Regulated",
              statusColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
              detail: "Treat influencer posts as advertising assets requiring ARCON Standards Panel approval. Build into the pre-approval workflow. Document the approval trail. Do not publish without sign-off.",
            },
            {
              market: "Kenya",
              status: "Pause",
              statusColor: "bg-red-500/20 text-red-400 border-red-500/30",
              detail: "2025 NACADA policy proposes explicit ban on influencer use for alcohol. Pause all influencer activity until local legal counsel confirms permissibility.",
            },
            {
              market: "Egypt",
              status: "Not Viable",
              statusColor: "bg-red-500/20 text-red-400 border-red-500/30",
              detail: "National advertising prohibition covers influencer content. No alcohol promotional influencer work in Egypt under any circumstances.",
            },
          ].map((m) => (
            <div key={m.market} className="p-6 rounded-lg border border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className={`${m.statusColor} text-[10px]`}>{m.status}</Badge>
                <span className="font-display text-xl font-semibold text-white">{m.market}</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>

        {/* IndaHash assessment */}
        <div className="rounded-xl border border-green/20 bg-green/[0.03] p-8 md:p-10 mb-16">
          <h3 className="font-display text-2xl font-semibold text-white mb-4">
            IndaHash — Assessment and Fit
          </h3>
          <p className="text-white/55 leading-relaxed mb-6">
            IndaHash is an end-to-end influencer marketing platform with legal,
            brand safety, and compliance support. Confirmed past work on alcohol
            brands in South Africa (SOL Beer, Flying Fish) demonstrates understanding
            of the local regulatory environment.
          </p>
          <h4 className="text-[11px] tracking-[0.15em] uppercase text-green font-medium mb-4">
            Key Capabilities
          </h4>
          <ul className="space-y-2 text-white/50 text-sm mb-8">
            {[
              "Creator discovery with data-driven audience age and location validation — critical for alcohol's 70/30 rule",
              "Contract and rights management",
              "Brand safety tooling: crisis detection and competitor scanning",
              "Office presence across Campari's priority African markets",
            ].map((cap, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-green mt-2 shrink-0" />
                {cap}
              </li>
            ))}
          </ul>
          <h4 className="text-[11px] tracking-[0.15em] uppercase text-white/40 font-medium mb-4">
            Critical Verification Requirements
          </h4>
          <ul className="space-y-2 text-white/50 text-sm">
            {[
              "25+ creators — hard minimum, no exceptions, evidence of DOB required",
              "Audience age composition exportable for audit (to validate 70/30 rule)",
              "Market-specific legal approval documentation — especially Nigeria's ARCON workflow",
              "Mandatory #adv / #gifted disclosure tags in every post",
              "48-hour takedown compliance with termination rights for repeat breaches",
            ].map((req, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Contract addenda */}
        <h3 className="font-display text-2xl font-semibold text-white mb-8">
          Influencer Contract Addenda
        </h3>
        <Tabs defaultValue="universal" className="w-full">
          <TabsList className="bg-white/[0.04] border border-white/[0.08] p-1 rounded-lg mb-6 flex-wrap h-auto">
            <TabsTrigger value="universal" className="text-[11px] tracking-wide uppercase data-[state=active]:bg-green data-[state=active]:text-white px-4">Universal</TabsTrigger>
            <TabsTrigger value="nigeria-add" className="text-[11px] tracking-wide uppercase data-[state=active]:bg-green data-[state=active]:text-white px-4">Nigeria</TabsTrigger>
            <TabsTrigger value="kenya-add" className="text-[11px] tracking-wide uppercase data-[state=active]:bg-green data-[state=active]:text-white px-4">Kenya</TabsTrigger>
            <TabsTrigger value="egypt-add" className="text-[11px] tracking-wide uppercase data-[state=active]:bg-green data-[state=active]:text-white px-4">Egypt</TabsTrigger>
          </TabsList>

          <TabsContent value="universal">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8">
              <h4 className="text-white font-medium mb-4">Universal Baseline — All Markets</h4>
              <ul className="space-y-3 text-white/50 text-sm">
                {[
                  "Creator confirmed 25+; evidence of date of birth required",
                  "Audience analytics export showing majority above local LDA",
                  "Prohibition on paid boosting to underage audiences",
                  "#adv / #gifted disclosure in all posts",
                  "Visible #drinkresponsibly in every asset and bio for campaign duration",
                  "No depiction of alcohol linked to social/sexual success, health claims, driving, sports, or youth-appealing creative cues",
                  "Pre-approval rights for all content before publication",
                  "48-hour fix/remove clause; termination rights for repeat non-compliance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="nigeria-add">
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.03] p-8">
              <h4 className="text-white font-medium mb-4">Nigeria Addendum</h4>
              <ul className="space-y-3 text-white/50 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  All deliverables treated as advertising materials subject to ARCON Standards Panel vetting
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  Creator must cooperate with documentation requirements and any mandatory regulatory labels
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  No publication without confirmed ARCON approval in writing
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="kenya-add">
            <div className="rounded-lg border border-red-500/20 bg-red-500/[0.03] p-8">
              <h4 className="text-white font-medium mb-4">Kenya Addendum</h4>
              <ul className="space-y-3 text-white/50 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  Alcohol-branded influencer endorsement deliverables prohibited until local legal counsel confirms permissibility
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  Content limited to brand-owned educational storytelling if any Kenya content is produced
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="egypt-add">
            <div className="rounded-lg border border-red-500/20 bg-red-500/[0.03] p-8">
              <h4 className="text-white font-medium mb-4">Egypt Addendum</h4>
              <ul className="space-y-3 text-white/50 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  No alcohol promotional deliverables of any kind
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  Corporate/heritage communications only, subject to local legal counsel approval
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        {/* East Africa note */}
        <div className="mt-8 p-4 rounded border border-white/[0.06] bg-white/[0.02]">
          <p className="text-white/40 text-sm">
            <strong className="text-white/60">East Africa note:</strong> Wowzi
            is worth evaluating for nano-creator campaigns given their regional
            footprint, but IndaHash is the recommended primary partner for South
            Africa and Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
}
