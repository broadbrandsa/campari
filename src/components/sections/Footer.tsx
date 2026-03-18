import { Separator } from "@/components/ui/separator";

const references = [
  { label: "Meta Alcohol Advertising Policy", url: "https://transparency.meta.com/policies/ad-standards/restricted-goods-services/alcohol/" },
  { label: "Google Alcohol Advertising Policy", url: "https://support.google.com/adspolicy/answer/6012382" },
  { label: "DV360 Restricted Products Policy", url: "https://support.google.com/displayvideo/answer/6027406" },
  { label: "South Africa DF-SA Code of Conduct", url: "https://www.arb.org.za/assets/alcohol-industry-code-of-conduct_-marketing-and-communications-2023---arb-version-final-mar-2024.pdf" },
  { label: "Kenya 2025 NACADA Alcohol Policy", url: "https://blog.galalaw.com/post/102l1ac/kenyas-2025-alcohol-policy-a-game-changer-for-advertising-and-marketing" },
  { label: "Nigeria ARCON Compliance", url: "https://kabbizlegal.com/arcon-compliance-for-foreign-companies-advertising-in-nigeria/" },
];

export function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-navy-dark/80">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Activate?
          </h3>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Get in touch with BroadBrand to start building your compliant African advertising strategy.
          </p>
          <a
            href="mailto:Shakierg@broadbrand.co.za"
            className="group inline-flex items-center gap-2 px-10 py-4 bg-green hover:bg-green-light text-white font-medium text-sm tracking-wide rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(82,158,121,0.3)]"
          >
            Let&apos;s Get Started
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <Separator className="bg-white/[0.06] mb-12" />

        {/* References */}
        <h3 className="text-[11px] tracking-[0.2em] uppercase text-green font-medium mb-6">
          References
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {references.map((ref) => (
            <a
              key={ref.label}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2 p-3 rounded border border-white/[0.04] hover:border-green/20 hover:bg-green/[0.03] transition-all duration-300"
            >
              <svg
                className="w-3.5 h-3.5 text-white/20 group-hover:text-green shrink-0 mt-0.5 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span className="text-white/60 text-xs group-hover:text-white/70 transition-colors leading-relaxed">
                {ref.label}
              </span>
            </a>
          ))}
        </div>

        <Separator className="bg-white/[0.06] mb-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/images/campari-logo.svg"
              alt="Campari Group"
              className="h-3 opacity-40"
            />
            <span className="text-white/20 text-xs">|</span>
            <span className="text-white/50 text-xs">Prepared by</span>
            <a
              href="https://broadbrand.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/Broadbrand logo.png"
                alt="BroadBrand"
                className="h-5 brightness-0 invert"
              />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://broadbrand.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-xs hover:text-green transition-colors"
            >
              broadbrand.co.za
            </a>
            <span className="text-white/15 text-xs">|</span>
            <a
              href="mailto:Shakierg@broadbrand.co.za"
              className="text-white/40 text-xs hover:text-green transition-colors"
            >
              Shakierg@broadbrand.co.za
            </a>
          </div>
        </div>
        <p className="text-white/30 text-[11px] text-center mt-8 max-w-2xl mx-auto leading-relaxed">
          Platform policies and national regulations change frequently. Always
          verify current status with platform account teams and local legal
          counsel before activating in any market. This document is for agency
          planning purposes only and does not constitute legal advice.
        </p>
      </div>
    </footer>
  );
}
