"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const platformSummary = [
  {
    market: "South Africa",
    meta: true,
    google: true,
    dv360: true,
    constraint:
      "Industry code compliance (DF-SA); proposed total ban bill (B21-2025)",
  },
  {
    market: "Nigeria",
    meta: true,
    google: true,
    dv360: true,
    constraint:
      "ARCON + NAFDAC dual pre-approval required for all creative",
  },
  {
    market: "Kenya",
    meta: true,
    google: true,
    dv360: true,
    constraint:
      "Meta account setup friction; 2025 NACADA policy proposes near-total digital ban",
  },
  {
    market: "Egypt",
    meta: false,
    google: false,
    dv360: false,
    constraint:
      "Complete ban on all alcohol advertising — no exceptions",
  },
];

function StatusDot({ allowed }: { allowed: boolean }) {
  return (
    <span
      className={`inline-block w-2.5 h-2.5 rounded-full ${
        allowed ? "bg-green" : "bg-red-500"
      }`}
    />
  );
}

export function PlatformRules() {
  return (
    <section id="platforms" className="relative py-20 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(82,158,121,0.06),transparent)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] tracking-[0.2em] uppercase text-green font-medium">
            02
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Platform Rules
        </h2>
        <p className="text-white/45 text-lg max-w-3xl leading-relaxed mb-16">
          Platform-by-platform breakdown of what is allowed, where, and under
          what conditions for alcohol advertising across Africa.
        </p>

        {/* Summary table */}
        <div className="rounded-lg border border-white/[0.08] overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="text-left py-4 px-6 text-[11px] tracking-[0.15em] uppercase text-white/40 font-medium">
                    Market
                  </th>
                  <th className="text-center py-4 px-4 text-[11px] tracking-[0.15em] uppercase text-white/40 font-medium">
                    Meta
                  </th>
                  <th className="text-center py-4 px-4 text-[11px] tracking-[0.15em] uppercase text-white/40 font-medium">
                    Google / GAM
                  </th>
                  <th className="text-center py-4 px-4 text-[11px] tracking-[0.15em] uppercase text-white/40 font-medium">
                    DV360
                  </th>
                  <th className="text-left py-4 px-6 text-[11px] tracking-[0.15em] uppercase text-white/40 font-medium">
                    Key Constraint
                  </th>
                </tr>
              </thead>
              <tbody>
                {platformSummary.map((row) => (
                  <tr
                    key={row.market}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-white">
                      {row.market}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <StatusDot allowed={row.meta} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <StatusDot allowed={row.google} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <StatusDot allowed={row.dv360} />
                    </td>
                    <td className="py-4 px-6 text-white/45">
                      {row.constraint}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Platform detail tabs */}
        <Tabs defaultValue="meta" className="w-full">
          <TabsList className="bg-white/[0.04] border border-white/[0.08] p-1 rounded-lg mb-8 w-full sm:w-auto inline-flex">
            <TabsTrigger
              value="meta"
              className="text-[12px] tracking-wide uppercase data-[state=active]:bg-green data-[state=active]:text-white px-6"
            >
              Meta (FB/IG)
            </TabsTrigger>
            <TabsTrigger
              value="google"
              className="text-[12px] tracking-wide uppercase data-[state=active]:bg-green data-[state=active]:text-white px-6"
            >
              Google / GAM
            </TabsTrigger>
            <TabsTrigger
              value="dv360"
              className="text-[12px] tracking-wide uppercase data-[state=active]:bg-green data-[state=active]:text-white px-6"
            >
              DV360
            </TabsTrigger>
          </TabsList>

          <TabsContent value="meta" className="space-y-6">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8">
              <p className="text-white/70 leading-relaxed mb-6">
                Alcohol is classified as{" "}
                <strong className="text-white">Restricted Content</strong> — not
                a Special Ad Category. No special certification is required, but
                all alcohol ads receive additional review scrutiny.
              </p>
              <h4 className="text-[11px] tracking-[0.15em] uppercase text-green font-medium mb-4">
                Global Minimum Requirements
              </h4>
              <ul className="space-y-3 text-white/55 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-green mt-2 shrink-0" />
                  Comply with local law in every market targeted
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-green mt-2 shrink-0" />
                  Target users at or above the legal drinking age (minimum 18
                  globally; 21 in Cameroon)
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-green mt-2 shrink-0" />
                  Avoid depicting excessive consumption, health/therapeutic
                  claims, or youthful imagery
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-white/45 text-sm">
                  <strong className="text-white/70">Banned markets:</strong>{" "}
                  Egypt, Libya, The Gambia. All other Sub-Saharan markets are
                  open with 18+ targeting applied.
                </p>
              </div>
              <div className="mt-6 rounded border border-amber-500/20 bg-amber-500/[0.05] p-4">
                <div className="flex items-start gap-3">
                  <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 text-[10px] shrink-0 mt-0.5">
                    Alert
                  </Badge>
                  <p className="text-amber-300/70 text-sm leading-relaxed">
                    January 2026 — Meta restricted Facebook recommendations for
                    alcohol-related business pages globally, significantly
                    reducing organic reach. This affects Facebook organic only —
                    not Instagram or paid advertising — but monitor closely.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="google" className="space-y-6">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8">
              <p className="text-white/70 leading-relaxed mb-6">
                Google operates on an{" "}
                <strong className="text-white">
                  explicit approved-country list
                </strong>
                . Only markets on this list can run alcohol ads — all others are
                automatically disapproved regardless of creative content.
              </p>
              <div className="rounded border border-green/20 bg-green/[0.05] p-4 mb-6">
                <h4 className="text-[11px] tracking-[0.15em] uppercase text-green font-medium mb-3">
                  Africa&apos;s 6 Approved Markets
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "South Africa",
                    "Nigeria",
                    "Kenya",
                    "Ghana",
                    "Senegal",
                    "Uganda",
                  ].map((m) => (
                    <Badge
                      key={m}
                      variant="outline"
                      className="border-green/40 text-green bg-green/[0.08]"
                    >
                      {m}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="rounded border border-amber-500/20 bg-amber-500/[0.05] p-4 mb-6">
                <p className="text-amber-300/70 text-sm leading-relaxed">
                  <strong className="text-amber-300">
                    Publisher opt-in reality:
                  </strong>{" "}
                  Even in approved markets, alcohol is a &quot;restricted
                  category&quot; opted out at the publisher level by default.
                  This is the most common reason programmatic campaigns fail to
                  scale — it&apos;s a supply issue, not a creative issue. Fix:
                  private deals with publishers who have explicitly enabled
                  alcohol.
                </p>
              </div>
              <h4 className="text-[11px] tracking-[0.15em] uppercase text-white/40 font-medium mb-4">
                Additional Restrictions
              </h4>
              <ul className="space-y-3 text-white/55 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-green mt-2 shrink-0" />
                  Prohibits advertiser-curated custom audiences and remarketing
                  lists — predefined Google audiences only
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-green mt-2 shrink-0" />
                  Alcohol advertisers excluded from AI Overview advertising in 12
                  countries including Kenya and Nigeria
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="dv360" className="space-y-6">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8">
              <p className="text-white/70 leading-relaxed mb-6">
                DV360 follows identical Google Ads policies and uses the same
                6-country approved list for Africa.
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "Manual Review",
                    detail:
                      "Alcohol creatives may undergo manual review taking up to 24 hours before serving — build into campaign launch timelines",
                  },
                  {
                    label: "No Personalised Advertising",
                    detail:
                      "No remarketing, no custom audiences, no behavioural targeting — predefined Google audiences only",
                  },
                  {
                    label: "Sensitive Category",
                    detail:
                      "Alcohol is classified as a Sensitive Category in DV360's content classification system",
                  },
                  {
                    label: "Expected Status",
                    detail:
                      '"Eligible (limited)" is the normal, compliant campaign status — not an error',
                  },
                  {
                    label: "Supply Strategy",
                    detail:
                      "Open auction scale is structurally capped — prioritise PMP and Programmatic Guaranteed deals with publishers who explicitly allow alcohol",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-6 p-4 rounded border border-white/[0.04] bg-white/[0.01]"
                  >
                    <span className="text-green text-sm font-medium whitespace-nowrap min-w-[160px]">
                      {item.label}
                    </span>
                    <span className="text-white/50 text-sm">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
