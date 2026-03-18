import { Badge } from "@/components/ui/badge";

const markets = [
  {
    market: "South Africa",
    digital: { status: "Yes", color: "text-green" },
    influencer: { status: "Yes*", color: "text-green" },
    firstStep: "Launch pilot via SA Business Manager. Implement 70/30 + RDM templates.",
    statusBadge: "bg-green/20 text-green border-green/30",
  },
  {
    market: "Nigeria",
    digital: { status: "With ARCON", color: "text-amber-400" },
    influencer: { status: "With ARCON", color: "text-amber-400" },
    firstStep: "Engage ARCON-licensed local partner. Build pre-approval workflow before any creative exposure.",
    statusBadge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  {
    market: "Kenya",
    digital: { status: "Volatile", color: "text-amber-400" },
    influencer: { status: "Pause", color: "text-red-400" },
    firstStep: "Obtain legal opinion. Use SA Business Manager for billing. Non-lifestyle creative only.",
    statusBadge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  {
    market: "Egypt",
    digital: { status: "Not possible", color: "text-red-400" },
    influencer: { status: "Not possible", color: "text-red-400" },
    firstStep: "Trade and on-premise activation only. No paid digital.",
    statusBadge: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  {
    market: "Ghana",
    digital: { status: "Yes", color: "text-green" },
    influencer: { status: "Yes", color: "text-green" },
    firstStep: "Straightforward entry point. Good secondary market with clean regulatory environment.",
    statusBadge: "bg-green/20 text-green border-green/30",
  },
  {
    market: "Uganda",
    digital: { status: "Yes", color: "text-green" },
    influencer: { status: "Yes", color: "text-green" },
    firstStep: "Active influencer market. Google approved. Strong secondary market.",
    statusBadge: "bg-green/20 text-green border-green/30",
  },
];

export function Readiness() {
  return (
    <section id="readiness" className="relative py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-dark/50" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] tracking-[0.2em] uppercase text-green font-medium">
            07
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Market Readiness at a Glance
        </h2>
        <p className="text-white/45 text-lg max-w-3xl leading-relaxed mb-16">
          Quick reference summary of activation status and recommended first
          steps for each market.
        </p>

        {/* Readiness cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {markets.map((m) => (
            <div
              key={m.market}
              className="group p-6 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-green/15 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {m.market}
                </h3>
              </div>

              <div className="flex gap-6 mb-6">
                <div>
                  <span className="block text-[10px] tracking-[0.15em] uppercase text-white/30 mb-1">
                    Digital
                  </span>
                  <span className={`text-sm font-medium ${m.digital.color}`}>
                    {m.digital.status}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] tracking-[0.15em] uppercase text-white/30 mb-1">
                    Influencer
                  </span>
                  <span className={`text-sm font-medium ${m.influencer.color}`}>
                    {m.influencer.status}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="block text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2">
                  First Step
                </span>
                <p className="text-white/45 text-sm leading-relaxed">
                  {m.firstStep}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-white/25 text-xs">
          *With DF-SA code compliance guardrails applied.
        </p>
      </div>
    </section>
  );
}
