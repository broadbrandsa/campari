"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Platforms", href: "#platforms" },
  { label: "Markets", href: "#markets" },
  { label: "Kenya Fix", href: "#kenya-fix" },
  { label: "Influencer", href: "#influencer" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Readiness", href: "#readiness" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-md border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logos - Campari + BroadBrand on the left */}
        <a href="#" className="flex items-center gap-4 group">
          <img
            src="/images/campari-logo.svg"
            alt="Campari Group"
            className="h-4 opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-white/20 text-xs">|</span>
          <img
            src="/Broadbrand logo.png"
            alt="BroadBrand"
            className="h-8 brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 text-[7px] tracking-wide uppercase transition-all duration-300 rounded ${
                activeSection === item.href.slice(1)
                  ? "text-green bg-white/[0.06]"
                  : "text-white/50 hover:text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Let's Get Started CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="mailto:Shakierg@broadbrand.co.za"
            className="inline-flex items-center gap-2 px-5 py-2 bg-green hover:bg-green-light text-white text-xs tracking-wide uppercase font-medium rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(82,158,121,0.25)]"
          >
            Let&apos;s Get Started
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
        >
          <span
            className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[1.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark/98 backdrop-blur-xl border-t border-white/[0.06] mt-3">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[13px] tracking-wide uppercase text-white/60 hover:text-white py-2.5 border-b border-white/[0.04] last:border-0 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:Shakierg@broadbrand.co.za"
              className="mt-2 text-center py-3 bg-green text-white text-[13px] tracking-wide uppercase rounded"
            >
              Let&apos;s Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
