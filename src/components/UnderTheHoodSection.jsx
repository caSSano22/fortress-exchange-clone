import React from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function UnderTheHoodSection() {
  return (
    <section className="relative w-full overflow-hidden px-5 py-32 bg-[#0c0c0c]">
      <div className="absolute inset-0 bg-grid-drift opacity-30"></div>

      <div className="relative mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="text-center">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white">
            Under the hood
          </p>
          <h2 className="font-display text-balance text-[36px] font-extrabold tracking-tight sm:text-[48px]">
            From words to execution
          </h2>
          <p className="mx-auto mt-5 max-w-[500px] text-balance text-[16px] text-muted">
            You speak. Fortress parses, plans, and executes entirely on-chain.
          </p>
        </div>

        {/* Pipeline Diagram Flow */}
        <div className="mt-20 flex flex-col items-center">
          {/* Stage 01 */}
          <div className="w-full max-w-[680px]">
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-faint">Stage 01</span>
              <div className="h-px flex-1 bg-line-soft"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-faint">User Intent</span>
            </div>

            <div className="relative overflow-hidden border border-line bg-surface">
              <div className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-fscan"></div>
              <div className="flex items-center gap-3 border-b border-line-soft px-5 py-3">
                <div className="h-2 w-2 rounded-full bg-white/40"></div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
                  fortress.ai / prompt
                </span>
              </div>
              <div className="px-6 py-7">
                <div className="flex items-start gap-3">
                  <span className="mt-1 select-none font-mono text-[13px] text-faint">$</span>
                  <p className="font-display text-[22px] font-bold leading-snug tracking-tight text-white sm:text-[28px]">
                    Deposit my idle <span className="underline decoration-white/30">ETH</span> in the safest lending market on Base.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connector Arrow */}
          <div className="flex flex-col items-center py-4">
            <div className="h-8 w-px bg-line"></div>
            <ChevronDown className="h-4 w-4 text-line -mt-1" />
          </div>

          {/* Stage 02 */}
          <div className="w-full max-w-[680px]">
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-faint">Stage 02</span>
              <div className="h-px flex-1 bg-line-soft"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-faint">AI Parse</span>
            </div>

            <div className="border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line-soft px-5 py-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-faint">intent.parsed</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white flex items-center gap-1">
                  <Check className="h-3 w-3 text-emerald-400" /> confidence 99%
                </span>
              </div>
              <div className="grid grid-cols-3 divide-x divide-line-soft">
                <div className="px-5 py-5">
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-faint">intent</div>
                  <div className="font-display text-[16px] font-bold text-white">safe_yield</div>
                </div>
                <div className="px-5 py-5">
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-faint">network</div>
                  <div className="font-display text-[16px] font-bold text-white">base</div>
                </div>
                <div className="px-5 py-5">
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-faint">asset</div>
                  <div className="font-display text-[16px] font-bold text-white">ETH</div>
                </div>
              </div>
            </div>
          </div>

          {/* Connector Arrow */}
          <div className="flex flex-col items-center py-4">
            <div className="h-8 w-px bg-line"></div>
            <ChevronDown className="h-4 w-4 text-line -mt-1" />
          </div>

          {/* Stage 03 */}
          <div className="w-full max-w-[680px]">
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-faint">Stage 03</span>
              <div className="h-px flex-1 bg-line-soft"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-faint">Execution Plan</span>
            </div>

            <div className="border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line-soft px-5 py-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-faint">execution_plan[]</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-faint">3 ops · 1 tx</span>
              </div>

              <div className="divide-y divide-line-soft">
                {/* Op 01 */}
                <div className="flex items-center gap-4 px-5 py-4">
                  <span className="font-mono text-[11px] text-faint">01</span>
                  <div className="h-px w-5 bg-line"></div>
                  <span className="w-[52px] font-mono text-[12px] font-bold uppercase tracking-widest text-white">SCAN</span>
                  <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono text-[11px] text-muted">Checking 6 lending markets</span>
                    <span className="border border-line-soft bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-fg-soft">
                      Aave · Morpho · Compound
                    </span>
                  </div>
                </div>

                {/* Op 02 */}
                <div className="flex items-center gap-4 px-5 py-4">
                  <span className="font-mono text-[11px] text-faint">02</span>
                  <div className="h-px w-5 bg-line"></div>
                  <span className="w-[52px] font-mono text-[12px] font-bold uppercase tracking-widest text-white">RANK</span>
                  <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono text-[11px] text-muted">Sorting by yield / risk ratio</span>
                    <span className="border border-line-soft bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-fg-soft">
                      risk-engine v2
                    </span>
                  </div>
                </div>

                {/* Op 03 */}
                <div className="flex items-center gap-4 px-5 py-4">
                  <span className="font-mono text-[11px] text-faint">03</span>
                  <div className="h-px w-5 bg-line"></div>
                  <span className="w-[52px] font-mono text-[12px] font-bold uppercase tracking-widest text-white">SUPPLY</span>
                  <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono text-[11px] text-muted">Deposit ETH at best rate</span>
                    <span className="border border-line-soft bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-fg-soft">
                      Morpho · Base
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="grid grid-cols-2 divide-x divide-line-soft border-t border-line-soft">
                <div className="px-5 py-4">
                  <div className="mb-0.5 font-mono text-[10px] uppercase tracking-widest text-faint">Best APY</div>
                  <div className="font-display text-[18px] font-bold text-white">4.82%</div>
                  <div className="font-mono text-[10px] text-muted">Morpho · Base</div>
                </div>
                <div className="px-5 py-4">
                  <div className="mb-0.5 font-mono text-[10px] uppercase tracking-widest text-faint">Gas Est.</div>
                  <div className="font-display text-[18px] font-bold text-white">~$0.03</div>
                  <div className="font-mono text-[10px] text-muted">Base L2</div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-line-soft px-5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
                  simulated · risk-checked · ready
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white">[ execute ]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
