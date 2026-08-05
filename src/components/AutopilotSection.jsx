import React from 'react';
import { Shield, Eye, Key } from 'lucide-react';

export default function AutopilotSection() {
  return (
    <section id="security" className="relative border-t border-line-soft py-28 bg-[#0c0c0c] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[700px] rounded-full blur-[160px]"
           style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06), transparent 70%)' }}>
      </div>

      <div className="relative mx-auto max-w-[900px] px-5 text-center">
        <h2 className="font-display text-[40px] font-extrabold tracking-tight sm:text-[56px] lg:text-[64px]">
          Put your crypto on <br />
          <span className="text-white">autopilot</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[580px] text-[17px] leading-relaxed text-muted sm:text-[19px]">
          Tell Fortress once what you want. It gets you in, keeps watch, and gets you out, all on its own. Non-custodial, on Base.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://app.fortress.exchange"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center gap-3 bg-white px-8 text-xs font-bold tracking-[0.15em] text-ink uppercase transition-all hover:bg-gray-100 active:scale-[0.97]"
          >
            LAUNCH APP
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* 3 Pillars */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3 text-left">
          <div className="flex items-start gap-3 border border-line-soft bg-surface/80 p-4">
            <Shield className="h-5 w-5 text-white flex-none mt-0.5" />
            <span className="text-[13.5px] font-medium leading-snug text-fg-soft">
              Your money stays in your control
            </span>
          </div>

          <div className="flex items-start gap-3 border border-line-soft bg-surface/80 p-4">
            <Eye className="h-5 w-5 text-white flex-none mt-0.5" />
            <span className="text-[13.5px] font-medium leading-snug text-fg-soft">
              Simulation before every signature
            </span>
          </div>

          <div className="flex items-start gap-3 border border-line-soft bg-surface/80 p-4">
            <Key className="h-5 w-5 text-white flex-none mt-0.5" />
            <span className="text-[13.5px] font-medium leading-snug text-fg-soft">
              We never hold your keys
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
