import React from 'react';
import { RefreshCw, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="features" className="relative mx-auto max-w-[1100px] px-5 py-28 bg-[#0c0c0c]">
      {/* Header */}
      <div className="text-center">
        <p className="mb-3 text-[12.5px] font-bold uppercase tracking-[0.16em] text-white">
          Why Fortress
        </p>
        <h2 className="font-display text-balance text-[36px] font-extrabold tracking-tight sm:text-[52px]">
          Hands-off, but never out of your control
        </h2>
      </div>

      {/* Grid of 6 Feature Cards */}
      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="group relative flex h-full flex-col overflow-hidden border border-line-soft bg-surface transition-all duration-300 hover:border-line">
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-white/30 transition-transform duration-500 group-hover:scale-x-100"></span>
          <div className="relative h-[180px] overflow-hidden border-b border-line-soft bg-surface-2/40">
            <div className="viz-grid absolute inset-0 opacity-70"></div>
            <div className="absolute inset-0 bg-surface/50"></div>
            <div className="relative flex h-full items-center justify-center">
              <div className="w-[80%] border border-line bg-surface p-3">
                <div className="font-mono flex items-center gap-1.5 text-[12px]">
                  <span className="text-white">/</span>
                  <span className="inline-block h-3 w-[2px] bg-white animate-fcursor"></span>
                </div>
                <div className="mt-2.5 flex gap-1.5">
                  <span className="border border-line bg-surface-2 px-1.5 py-0.5 text-[10px] text-fg-soft">USDG</span>
                  <span className="border border-line bg-surface-2 px-1.5 py-0.5 text-[10px] text-fg-soft">moderate</span>
                  <span className="border border-line bg-surface-2 px-1.5 py-0.5 text-[10px] text-fg-soft">Morpho</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display mb-2 text-[18px] font-bold text-white">Just say what you want</h3>
            <p className="text-[14px] leading-relaxed text-muted">
              Type it like you'd say it. Fortress turns your sentence into a real, ready-to-run plan, with no protocol picking required.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative flex h-full flex-col overflow-hidden border border-line-soft bg-surface transition-all duration-300 hover:border-line">
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-white/30 transition-transform duration-500 group-hover:scale-x-100"></span>
          <div className="relative h-[180px] overflow-hidden border-b border-line-soft bg-surface-2/40">
            <div className="viz-grid absolute inset-0 opacity-70"></div>
            <div className="absolute inset-0 bg-surface/50"></div>
            <div className="relative flex h-full items-center justify-center">
              <div className="relative h-[104px] w-[104px]">
                <div className="absolute inset-0 rounded-full border border-line"></div>
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-[10px] text-fg-soft">enter</span>
                <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-[10px] text-white">exit</span>
                <RefreshCw className="absolute inset-0 m-auto h-6 w-6 text-muted group-hover:rotate-180 transition-transform duration-700" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display mb-2 text-[18px] font-bold text-white">Easy entry and exit</h3>
            <p className="text-[14px] leading-relaxed text-muted">
              Enter complex positions with one click, and unwind them just as easily. Fortress handles both the setup and the unwinding of your trades.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative flex h-full flex-col overflow-hidden border border-line-soft bg-surface transition-all duration-300 hover:border-line">
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-white/30 transition-transform duration-500 group-hover:scale-x-100"></span>
          <div className="relative h-[180px] overflow-hidden border-b border-line-soft bg-surface-2/40">
            <div className="viz-grid absolute inset-0 opacity-70"></div>
            <div className="absolute inset-0 bg-surface/50"></div>
            <div className="relative flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-2 font-mono">
                <div className="w-[140px] rounded border border-line bg-surface p-2 text-center">
                  <span className="text-[8px] uppercase tracking-wider text-muted">Condition</span>
                  <span className="block mt-0.5 text-[11px] text-white font-medium">Yield &lt; 4.0%</span>
                </div>
                <div className="h-4 w-px bg-line"></div>
                <div className="w-[140px] rounded border border-line bg-surface p-2 text-center">
                  <span className="text-[8px] uppercase tracking-wider text-muted">Action</span>
                  <span className="block mt-0.5 text-[11px] text-white font-medium">Close Position</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display mb-2 text-[18px] font-bold text-white">Gets you out, too</h3>
            <p className="text-[14px] leading-relaxed text-muted">
              Knowing when to exit is the hard part. Fortress closes your position automatically when your conditions are met.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="group relative flex h-full flex-col overflow-hidden border border-line-soft bg-surface transition-all duration-300 hover:border-line">
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-white/30 transition-transform duration-500 group-hover:scale-x-100"></span>
          <div className="relative h-[180px] overflow-hidden border-b border-line-soft bg-surface-2/40">
            <div className="viz-grid absolute inset-0 opacity-70"></div>
            <div className="absolute inset-0 bg-surface/50"></div>
            <div className="relative flex h-full items-center justify-center">
              <div className="w-[85%] border border-line bg-surface p-3 font-mono">
                <div className="flex items-center justify-between border-b border-line-soft pb-2 mb-2">
                  <span className="text-[10px] text-muted uppercase">Simulation</span>
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Pass
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-muted">
                  <span>- 1,000 USDG</span>
                  <span className="text-white">+ 0.28 ETH</span>
                </div>
                <div className="mt-1 text-[10px] text-faint">Est. Gas: $0.15</div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display mb-2 text-[18px] font-bold text-white">Simulation before signing</h3>
            <p className="text-[14px] leading-relaxed text-muted">
              Every plan goes through a full simulation engine against live prices, so you know the balance changes and fees up front. No surprises.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="group relative flex h-full flex-col overflow-hidden border border-line-soft bg-surface transition-all duration-300 hover:border-line">
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-white/30 transition-transform duration-500 group-hover:scale-x-100"></span>
          <div className="relative h-[180px] overflow-hidden border-b border-line-soft bg-surface-2/40">
            <div className="viz-grid absolute inset-0 opacity-70"></div>
            <div className="absolute inset-0 bg-surface/50"></div>
            <div className="relative flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-2 border border-line bg-surface px-6 py-4">
                <FileCheck className="h-6 w-6 text-white" />
                <span className="text-[11px] font-bold tracking-widest text-white uppercase">Approve & Deploy</span>
                <span className="font-mono text-[9px] text-muted">review & sign</span>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display mb-2 text-[18px] font-bold text-white">One signature, any strategy</h3>
            <p className="text-[14px] leading-relaxed text-muted">
              However many steps your strategy needs, Fortress bundles them through its execution contract. You review the preview and sign once, no approvals to click through.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="group relative flex h-full flex-col overflow-hidden border border-line-soft bg-surface transition-all duration-300 hover:border-line">
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-white/30 transition-transform duration-500 group-hover:scale-x-100"></span>
          <div className="relative h-[180px] overflow-hidden border-b border-line-soft bg-surface-2/40">
            <div className="viz-grid absolute inset-0 opacity-70"></div>
            <div className="absolute inset-0 bg-surface/50"></div>
            <div className="relative flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-2 border border-line bg-surface px-6 py-4">
                <ShieldCheck className="h-6 w-6 text-white" />
                <span className="text-[11px] font-bold tracking-widest text-white uppercase">Non-custodial</span>
                <span className="font-mono text-[9px] text-muted">your keys, your funds</span>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display mb-2 text-[18px] font-bold text-white">Always your money</h3>
            <p className="text-[14px] leading-relaxed text-muted">
              Your funds stay in a contract only you control. Fortress never holds your keys or touches your money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
