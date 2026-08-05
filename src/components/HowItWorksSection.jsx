import React from 'react';
import { Zap, LogOut } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section id="how" className="relative mx-auto max-w-[1100px] px-5 py-28 sm:py-36">
      {/* Section Header */}
      <div className="text-center">
        <p className="mb-3 text-[12.5px] font-bold uppercase tracking-[0.16em] text-white">
          How it works
        </p>
        <h2 className="font-display text-balance text-[36px] font-extrabold tracking-tight sm:text-[52px]">
          From a sentence to a self-running position
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-balance text-[17px] text-muted">
          Five simple steps. Complete control from start to finish.
        </p>
      </div>

      {/* 5 Steps Vertical Flow */}
      <div className="relative mt-24 flex flex-col gap-16 md:gap-24">
        {/* Step 01 */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <div className="flex flex-1 flex-col items-start md:max-w-[420px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[16px] font-bold text-white">01</span>
              <div className="h-px w-12 bg-line"></div>
            </div>
            <h3 className="font-display mb-4 text-[32px] font-extrabold tracking-tight text-white">
              Tell us your goal
            </h3>
            <p className="text-[17px] leading-relaxed text-muted">
              Just type what you want to do in plain English. Fortress translates your sentence into a concrete execution plan.
            </p>
          </div>

          <div className="flex flex-1 w-full justify-center">
            <div className="relative flex h-[280px] w-full max-w-[440px] items-center justify-center overflow-hidden border border-line bg-surface-2/40">
              <div className="viz-grid absolute inset-0 opacity-50"></div>
              <div className="w-full max-w-[340px] border border-line bg-surface p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-white" />
                  <span className="text-[11px] font-bold tracking-widest text-muted uppercase">Fortress Agent</span>
                </div>
                <div className="text-[15px] leading-relaxed text-white">
                  <span className="mr-1.5 text-muted">/</span>Supply USDG on Aave and borrow ETH against it
                  <span className="ml-1 inline-block h-[14px] w-[2px] translate-y-[2px] bg-white animate-fcursor"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 02 */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:flex-row-reverse">
          <div className="flex flex-1 flex-col items-start md:max-w-[420px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[16px] font-bold text-white">02</span>
              <div className="h-px w-12 bg-line"></div>
            </div>
            <h3 className="font-display mb-4 text-[32px] font-extrabold tracking-tight text-white">
              We map it out
            </h3>
            <p className="text-[17px] leading-relaxed text-muted">
              Fortress finds the best route across DeFi protocols and simulates the entire flow against live prices. You get a transparent breakdown of exactly what will happen before you commit.
            </p>
          </div>

          <div className="flex flex-1 w-full justify-center">
            <div className="relative flex h-[280px] w-full max-w-[440px] items-center justify-center overflow-hidden border border-line bg-surface-2/40">
              <div className="viz-grid absolute inset-0 opacity-50"></div>
              <div className="flex w-full max-w-[340px] flex-col gap-3">
                <div className="flex items-center gap-4 border border-line-soft bg-surface-2 p-4">
                  <div className="flex h-9 w-9 items-center justify-center bg-white/10 text-[13px] font-bold text-white">
                    1
                  </div>
                  <div>
                    <div className="text-[15px] font-medium text-white">Supply USDG</div>
                    <div className="mt-0.5 text-[12px] text-muted">Aave V3 · Robinhood</div>
                  </div>
                </div>

                <div className="relative z-10 -my-2 flex justify-center">
                  <div className="h-6 w-px bg-line"></div>
                </div>

                <div className="flex items-center gap-4 border border-line-soft bg-surface-2 p-4">
                  <div className="flex h-9 w-9 items-center justify-center bg-white/10 text-[13px] font-bold text-white">
                    2
                  </div>
                  <div>
                    <div className="text-[15px] font-medium text-white">Borrow ETH</div>
                    <div className="mt-0.5 text-[12px] text-muted">Aave V3 · Robinhood</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 03 */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <div className="flex flex-1 flex-col items-start md:max-w-[420px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[16px] font-bold text-white">03</span>
              <div className="h-px w-12 bg-line"></div>
            </div>
            <h3 className="font-display mb-4 text-[32px] font-extrabold tracking-tight text-white">
              You give the OK
            </h3>
            <p className="text-[17px] leading-relaxed text-muted">
              Review the plain-English preview and estimated gas costs. Once you're ready, approve it with a single signature. Your funds go into a smart contract that only you control.
            </p>
          </div>

          <div className="flex flex-1 w-full justify-center">
            <div className="relative flex h-[280px] w-full max-w-[440px] items-center justify-center overflow-hidden border border-line bg-surface-2/40">
              <div className="viz-grid absolute inset-0 opacity-50"></div>
              <div className="w-full max-w-[340px] border border-line bg-surface p-5">
                <div className="mb-5 flex flex-col gap-3">
                  <div className="flex justify-between text-[13.5px]">
                    <span className="text-muted">Network</span>
                    <span className="font-medium text-white">Robinhood</span>
                  </div>
                  <div className="flex justify-between text-[13.5px]">
                    <span className="text-muted">Estimated Gas</span>
                    <span className="font-mono text-white">~$0.02</span>
                  </div>
                </div>
                <div className="h-px w-full bg-line-soft mb-5"></div>
                <button className="w-full bg-white py-3 text-center text-[14px] font-semibold text-ink transition-colors hover:bg-gray-200">
                  Sign & Deploy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Step 04 */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:flex-row-reverse">
          <div className="flex flex-1 flex-col items-start md:max-w-[420px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[16px] font-bold text-white">04</span>
              <div className="h-px w-12 bg-line"></div>
            </div>
            <h3 className="font-display mb-4 text-[32px] font-extrabold tracking-tight text-white">
              It runs itself
            </h3>
            <p className="text-[17px] leading-relaxed text-muted">
              Fortress gets you in, keeps watch over your position 24/7, and gets you out when your specific conditions are met. You never have to actively manage it.
            </p>
          </div>

          <div className="flex flex-1 w-full justify-center">
            <div className="relative flex h-[280px] w-full max-w-[440px] items-center justify-center overflow-hidden border border-line bg-surface-2/40">
              <div className="viz-grid absolute inset-0 opacity-50"></div>
              <div className="relative w-full max-w-[340px] overflow-hidden border border-line bg-surface p-5">
                <div className="absolute right-5 top-5">
                  <span className="border border-white/20 bg-white/5 px-2 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase">
                    Live
                  </span>
                </div>
                <div className="mb-1 text-[11px] font-bold tracking-widest text-muted uppercase">Status</div>
                <div className="mb-6 text-[18px] font-medium text-white">Active & Monitoring</div>
                <div className="flex justify-between text-[12px] text-muted mb-2">
                  <span>Target Exit APY</span>
                  <span className="text-white">&gt; 12.5%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden bg-surface-2">
                  <div className="h-full bg-white w-4/5 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 05 */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <div className="flex flex-1 flex-col items-start md:max-w-[420px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[16px] font-bold text-white">05</span>
              <div className="h-px w-12 bg-line"></div>
            </div>
            <h3 className="font-display mb-4 text-[32px] font-extrabold tracking-tight text-white">
              Easy exit
            </h3>
            <p className="text-[17px] leading-relaxed text-muted">
              Change your mind or want to take profits? Exit your strategy instantly with one click. Fortress automatically unwinds all your positions and returns your assets to your wallet.
            </p>
          </div>

          <div className="flex flex-1 w-full justify-center">
            <div className="relative flex h-[280px] w-full max-w-[440px] items-center justify-center overflow-hidden border border-line bg-surface-2/40">
              <div className="viz-grid absolute inset-0 opacity-50"></div>
              <div className="w-full max-w-[340px] border border-line bg-surface p-5">
                <div className="mb-4 text-[11px] font-bold tracking-widest text-muted uppercase">Position Active</div>
                <div className="mb-6 flex justify-between items-end">
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] text-muted">Net Value</span>
                    <span className="font-mono text-[20px] text-white font-bold">$12,450.00</span>
                  </div>
                </div>
                <div className="h-px w-full bg-line-soft mb-5"></div>
                <button className="group w-full flex items-center justify-center gap-2 border border-line bg-surface-2 py-3 text-center text-[14px] font-bold text-white transition-colors hover:bg-white hover:text-ink">
                  EXIT POSITION
                  <LogOut className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
