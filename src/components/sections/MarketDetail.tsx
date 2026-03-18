"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const secondaryMarkets = [
  { country: "Ghana", region: "West", meta: "✅", gam: "✅", influencer: "✅", note: "Google approved. Clean regulatory environment. Good secondary market." },
  { country: "Uganda", region: "East", meta: "✅", gam: "✅", influencer: "✅", note: "Google approved. Active influencer market." },
  { country: "Senegal", region: "West", meta: "✅", gam: "✅", influencer: "⚠️", note: "~95% Muslim — cultural sensitivity essential. Avoid Islamic holidays." },
  { country: "Côte d'Ivoire", region: "West", meta: "⚠️", gam: "❔", influencer: "⚠️", note: "Not on Google approved list. Meta permitted with local law compliance." },
  { country: "Tanzania", region: "East", meta: "⚠️", gam: "❔", influencer: "⚠️", note: "Strict TCRA content standards. Meta permitted." },
  { country: "Zimbabwe", region: "Southern", meta: "⚠️", gam: "❔", influencer: "⚠️", note: "ASAZ governs. Meta permitted with local compliance." },
  { country: "Namibia", region: "Southern", meta: "⚠️", gam: "❔", influencer: "⚠️", note: "FASD is a major public health priority — responsible messaging essential." },
  { country: "Cameroon", region: "Central-W", meta: "⚠️", gam: "❔", influencer: "⚠️", note: "Meta minimum age is 21 (unique to Cameroon). Not on Google approved list." },
  { country: "Ethiopia", region: "East", meta: "❌", gam: "❌", influencer: "❌", note: "Complete national ban on all alcohol advertising (Proclamation 2019)." },
  { country: "Morocco", region: "North", meta: "❌", gam: "❌", influencer: "❌", note: "Public advertising banned. X explicitly prohibits ads targeting Morocco." },
  { country: "Algeria", region: "North", meta: "❌", gam: "❌", influencer: "❌", note: "Alcohol legal but advertising effectively prohibited." },
  { country: "Mali", region: "West", meta: "❌", gam: "❌", influencer: "❌", note: "Predominantly Muslim. Alcohol advertising de facto prohibited." },
  { country: "Chad", region: "Central", meta: "❌", gam: "❌", influencer: "❌", note: "Predominantly Muslim. Alcohol advertising de facto prohibited." },
];

export function MarketDetail() {
  return (
    <section id="markets" className="relative py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-dark/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] tracking-[0.2em] uppercase text-green font-medium">
            03
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Country-by-Country Detail
        </h2>
        <p className="text-white/65 text-lg max-w-3xl leading-relaxed mb-16">
          In-depth regulatory analysis for each priority market, with specific
          requirements, restrictions, and risk indicators.
        </p>

        {/* Priority markets accordion */}
        <Accordion multiple defaultValue={["south-africa"]} className="space-y-4 mb-20">
          {/* South Africa */}
          <AccordionItem
            value="south-africa"
            className="border border-green/20 rounded-lg overflow-hidden bg-green/[0.02]"
          >
            <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-green/[0.03]">
              <div className="flex items-center gap-4">
                <Badge className="bg-green/20 text-green border-green/30 text-[10px]">
                  Viable
                </Badge>
                <span className="font-display text-xl font-semibold text-white">
                  South Africa
                </span>
                <span className="text-white/30 text-sm hidden sm:inline">
                  — Watch the legislative horizon
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-8">
              <p className="text-white/75 mb-6 leading-relaxed">
                The most advertiser-friendly African market for alcohol brands.
                Self-regulatory framework governed by the Advertising Regulatory
                Board (ARB) and the Alcohol Industry&apos;s Digital First Code of
                Conduct (DF-SA).
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { rule: "70/30 Rule", req: "All alcohol communications must appear where at least 70% of the audience is expected to be adults" },
                  { rule: "Responsible Drinking Messaging", req: "RDM must be visible on all digital assets, social profiles, and brand sites" },
                  { rule: "Age Gate", req: "Brand sites must include a date-of-birth gate denying access below 18, with redirect to responsible drinking information" },
                  { rule: "Talent Age", req: "Influencers and models must appear to be 25 or older" },
                ].map((r) => (
                  <div key={r.rule} className="p-4 rounded border border-white/[0.06] bg-white/[0.02]">
                    <span className="block text-green text-xs font-medium tracking-wide uppercase mb-2">{r.rule}</span>
                    <span className="text-white/70 text-sm">{r.req}</span>
                  </div>
                ))}
              </div>
              <div className="rounded border border-amber-500/20 bg-amber-500/[0.05] p-4">
                <p className="text-amber-300/70 text-sm leading-relaxed">
                  <strong className="text-amber-300">Major forward risk:</strong>{" "}
                  The Liquor Amendment Bill (B21-2025), introduced by the EFF,
                  proposes a complete prohibition on liquor advertising in all
                  forms of media. Not yet enacted, but it is a material risk.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Nigeria */}
          <AccordionItem
            value="nigeria"
            className="border border-amber-500/20 rounded-lg overflow-hidden bg-amber-500/[0.02]"
          >
            <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-amber-500/[0.03]">
              <div className="flex items-center gap-4">
                <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 text-[10px]">
                  Procedural
                </Badge>
                <span className="font-display text-xl font-semibold text-white">
                  Nigeria
                </span>
                <span className="text-white/30 text-sm hidden sm:inline">
                  — Viable but operationally heavy
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-8">
              <p className="text-white/75 mb-6 leading-relaxed">
                Open for digital alcohol advertising, but compliance is not
                optional or lightweight. ARCON and NAFDAC both have jurisdiction.
                All advertisements targeting Nigeria must receive Standards Panel
                approval before exposure.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { label: "Broadcast Watershed", detail: "Alcohol ads cannot run between 6:00am–10:00pm on TV or 6:00am–8:00pm on radio" },
                  { label: "Influencer Jurisdiction", detail: "Social and influencer posts are within ARCON's jurisdiction — confirmed by Federal High Court, April 2025" },
                  { label: "Geo-exclusion", detail: "The 12 northern Sharia states must be geo-excluded from all targeting" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 rounded border border-white/[0.04] bg-white/[0.01]">
                    <span className="text-amber-400 text-sm font-medium whitespace-nowrap min-w-[160px]">{item.label}</span>
                    <span className="text-white/70 text-sm">{item.detail}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-sm italic">
                Compliance in Nigeria is primarily about process, not just
                creative content. Build an ARCON-approved workflow into your
                campaign production pipeline.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Kenya */}
          <AccordionItem
            value="kenya"
            className="border border-amber-500/20 rounded-lg overflow-hidden bg-amber-500/[0.02]"
          >
            <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-amber-500/[0.03]">
              <div className="flex items-center gap-4">
                <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 text-[10px]">
                  Volatile
                </Badge>
                <span className="font-display text-xl font-semibold text-white">
                  Kenya
                </span>
                <span className="text-white/30 text-sm hidden sm:inline">
                  — Technically open, legally volatile
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-8">
              <p className="text-white/75 mb-6 leading-relaxed">
                Currently permitted under the Alcoholic Drinks Control Act (Cap. 121) — the
                Mututho Law — but the regulatory environment is tightening
                significantly.
              </p>
              <h4 className="text-[11px] tracking-[0.15em] uppercase text-white/40 font-medium mb-4">
                Current Law Prohibits Advertising That:
              </h4>
              <ul className="space-y-2 text-white/70 text-sm mb-6">
                {[
                  "Links alcohol to social or sexual success",
                  "Implies acceptability around driving, sports, or activities requiring concentration",
                  "Claims therapeutic value",
                  "Targets underage people or uses materials associated with under-18s",
                  "Uses prize mechanics that encourage increased consumption",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-amber-400 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <h4 className="text-[11px] tracking-[0.15em] uppercase text-white/40 font-medium mb-4">
                2025 NACADA Policy Proposals (Not Yet Enacted)
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  { label: "No Influencers", detail: "Explicit ban on social media influencers or celebrities to endorse alcohol" },
                  { label: "Talent Age 25+", detail: "All advertising talent and endorsers must be 25 or older" },
                  { label: "No Lifestyle Ads", detail: "No lifestyle advertising in any form of advertisement or promotion" },
                  { label: "Sports Restrictions", detail: "Bans on sports-related alcohol branding and sponsorships" },
                ].map((p) => (
                  <div key={p.label} className="p-3 rounded border border-red-500/10 bg-red-500/[0.03]">
                    <span className="block text-red-400 text-xs font-medium mb-1">{p.label}</span>
                    <span className="text-white/65 text-xs">{p.detail}</span>
                  </div>
                ))}
              </div>
              <div className="rounded border border-red-500/20 bg-red-500/[0.05] p-4">
                <p className="text-red-300/80 text-sm">
                  <strong>Action required:</strong> Obtain a current
                  Kenya-specific legal opinion before activating any campaign. Do
                  not assume the current legal window will remain open throughout
                  a campaign flight.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Egypt */}
          <AccordionItem
            value="egypt"
            className="border border-red-500/20 rounded-lg overflow-hidden bg-red-500/[0.02]"
          >
            <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-red-500/[0.03]">
              <div className="flex items-center gap-4">
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-[10px]">
                  Banned
                </Badge>
                <span className="font-display text-xl font-semibold text-white">
                  Egypt
                </span>
                <span className="text-white/30 text-sm hidden sm:inline">
                  — No paid digital. Full stop.
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-8">
              <p className="text-white/75 mb-6 leading-relaxed">
                Law No. 63 of 1976 (Article 3) prohibits publishing or
                advertising alcoholic beverages &quot;by any means.&quot; Both Meta and
                Google enforce this. Ads targeting Egypt will be disapproved on
                every major platform.
              </p>
              <h4 className="text-[11px] tracking-[0.15em] uppercase text-green font-medium mb-4">
                What Is Viable in Egypt
              </h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-green mt-2 shrink-0" />
                  Trade marketing and on-premise brand presence
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-green mt-2 shrink-0" />
                  Tourism and hospitality venue partnerships where lawful
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-green mt-2 shrink-0" />
                  Heritage and corporate storytelling that does not function as
                  alcohol advertising
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Secondary markets with map */}
        <h3 className="font-display text-2xl font-semibold text-white mb-8">
          Secondary Markets
        </h3>

        {/* Secondary markets table */}
        <div className="rounded-lg border border-white/[0.08] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="text-left py-3 px-5 text-[10px] tracking-[0.15em] uppercase text-white/40 font-medium">Country</th>
                  <th className="text-left py-3 px-3 text-[10px] tracking-[0.15em] uppercase text-white/40 font-medium">Region</th>
                  <th className="text-center py-3 px-3 text-[10px] tracking-[0.15em] uppercase text-white/40 font-medium">Meta</th>
                  <th className="text-center py-3 px-3 text-[10px] tracking-[0.15em] uppercase text-white/40 font-medium">GAM</th>
                  <th className="text-center py-3 px-3 text-[10px] tracking-[0.15em] uppercase text-white/40 font-medium">Influencer</th>
                  <th className="text-left py-3 px-5 text-[10px] tracking-[0.15em] uppercase text-white/40 font-medium">Note</th>
                </tr>
              </thead>
              <tbody>
                {secondaryMarkets.map((m) => (
                  <tr key={m.country} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-5 font-medium text-white text-sm">{m.country}</td>
                    <td className="py-3 px-3 text-white/60 text-xs">{m.region}</td>
                    <td className="py-3 px-3 text-center">{m.meta}</td>
                    <td className="py-3 px-3 text-center">{m.gam}</td>
                    <td className="py-3 px-3 text-center">{m.influencer}</td>
                    <td className="py-3 px-5 text-white/60 text-xs max-w-xs">{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
