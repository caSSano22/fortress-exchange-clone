import React, { useState, useEffect } from 'react';

const SAMPLE_PROMPTS = [
  "Supply USDG on Aave and borrow ETH against it",
  "Deposit my idle ETH in the safest lending market on Robinhood.",
  "Swap ETH for USDe when APY > 12.5% and supply to Morpho"
];

export default function HeroSection() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeChip, setActiveChip] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentPrompt = SAMPLE_PROMPTS[promptIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentPrompt.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentPrompt.slice(0, displayedText.length + 1));
        }, 40);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentPrompt.slice(0, displayedText.length - 1));
        }, 20);
      } else {
        setIsDeleting(false);
        setPromptIndex((prev) => (prev + 1) % SAMPLE_PROMPTS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, promptIndex]);

  // Cycle pipeline chips
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChip((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const chips = ['planner', 'resolver', 'validator', 'builder', 'simulator'];

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
      {/* Background Grids & Radial Glows */}
      <div className="absolute inset-0 bg-grid-drift opacity-100"></div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, transparent 30%, #0C0C0C 100%)',
        }}
      ></div>

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 w-[480px] h-[480px]"></span>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 w-[600px] h-[600px]"></span>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 w-[720px] h-[720px]"></span>
      </div>

      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center gap-8 px-5 text-center">
        <div className="flex flex-col items-center">
          <h1 className="font-display text-balance text-[40px] font-bold leading-[1.1] tracking-tight sm:text-[56px] lg:text-[64px]">
            Just say what you want.<br />
            <span className="text-muted">We handle the rest, on-chain.</span>
          </h1>

          <p className="mt-6 max-w-[620px] text-[17px] leading-relaxed text-muted sm:text-[19px]">
            Tell Fortress your goal in plain English. It figures out the steps, checks them against live prices, and runs the whole thing for you,{' '}
            <em className="not-italic text-white font-semibold">from getting in to getting out.</em>
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://app.fortress.exchange"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-12 items-center gap-3 bg-white px-8 text-xs font-bold tracking-[0.15em] text-ink uppercase transition-all hover:bg-white/90 active:scale-[0.97]"
            >
              LAUNCH APP
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <p className="mt-6 text-[13px] font-medium text-faint">
            Non-custodial · you stay in control · your keys, your funds
          </p>
        </div>

        {/* Interactive Command Terminal Simulator */}
        <div className="w-full max-w-[800px] mt-6">
          <div className="relative overflow-hidden border border-line bg-surface-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            {/* Top Prompt Area */}
            <div className="relative z-10 flex min-h-[150px] items-start gap-3 px-5 pt-5">
              <span className="font-mono mt-0.5 select-none text-[15px] text-fg-soft">/</span>
              <div className="flex-1 text-left text-[16px] leading-relaxed text-white sm:text-[17px]">
                {displayedText}
                <span className="ml-0.5 inline-block h-[18px] w-[2px] translate-y-[3px] bg-white align-middle animate-fcursor"></span>
              </div>
            </div>

            {/* Pipeline Stage Badges */}
            <div className="relative z-10 px-5 pb-3 pt-2">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex flex-wrap gap-x-3.5 gap-y-1">
                  {chips.map((chip, idx) => (
                    <span
                      key={chip}
                      className={`font-mono text-[11px] transition-colors duration-300 ${
                        activeChip === idx ? 'text-white font-bold' : 'text-faint'
                      }`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-[2px] w-full overflow-hidden bg-line">
                <div
                  className="h-full bg-white transition-all duration-500 ease-out"
                  style={{ width: `${((activeChip + 1) / chips.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Terminal Action Bar */}
            <div className="relative z-10 flex items-center justify-between border-t border-line px-5 py-3 bg-surface">
              <span className="font-mono text-[11.5px] text-faint">
                <span className="bg-line px-1.5 py-0.5 text-muted mr-1">/</span> to insert action
              </span>
              <button
                onClick={() => {
                  setDisplayedText('');
                  setIsDeleting(false);
                  setPromptIndex((prev) => (prev + 1) % SAMPLE_PROMPTS.length);
                }}
                className="inline-flex h-8 items-center bg-white px-4 text-[12.5px] font-semibold text-ink transition-colors hover:bg-gray-200"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
