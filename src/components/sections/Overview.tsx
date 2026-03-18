import { Badge } from "@/components/ui/badge";

const speeds = [
  {
    status: "open",
    label: "Fully Open",
    icon: "✅",
    markets: "South Africa",
    summary:
      "All platforms open. Self-regulatory framework applies. The proposed total ban bill (B21-2025) is a forward risk — avoid inflexible long-term commitments.",
    color: "bg-green/10 border-green/30 text-green",
  },
  {
    status: "procedural",
    label: "Procedural",
    icon: "⚠️",
    markets: "Nigeria, Kenya",
    summary:
      "Technically permitted but operationally heavy. Nigeria requires ARCON + NAFDAC pre-approval for every creative. Kenya is trending toward a near-total ban — obtain legal opinion before activating.",
    color: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  },
  {
    status: "banned",
    label: "Banned",
    icon: "❌",
    markets: "Egypt",
    summary:
      "Complete prohibition in law and on all major platforms. No paid digital alcohol advertising of any kind. Redirect all activity to trade and on-premise activation.",
    color: "bg-red-500/10 border-red-500/30 text-red-400",
  },
];

export function Overview() {
  return (
    <section id="overview" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] tracking-[0.2em] uppercase text-green font-medium">
            01
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Operating Overview
        </h2>
        <p className="text-white/45 text-lg max-w-3xl leading-relaxed mb-16">
          Alcohol advertising across Africa operates on sharply different rules
          depending on the market, platform, and publisher. The operating reality
          breaks into three speeds.
        </p>

        {/* Three speed cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {speeds.map((speed, i) => (
            <div
              key={speed.status}
              className={`group relative rounded-lg border p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] ${speed.color}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl">{speed.icon}</span>
                <Badge
                  variant="outline"
                  className={`text-[10px] tracking-wider uppercase ${speed.color} border-current`}
                >
                  {speed.label}
                </Badge>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-2">
                {speed.markets}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {speed.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
