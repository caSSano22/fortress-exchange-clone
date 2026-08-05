import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-line-soft bg-[#0a0a0a] py-16 text-muted">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-8 px-5 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <div className="flex items-center gap-3">
            <span className="text-[16px] font-bold tracking-[0.18em] uppercase text-white">
              FORTRESS
            </span>
          </div>
          <p className="text-[13px] text-muted">
            On-chain strategies from a single sentence, run for you.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[12px] font-semibold tracking-widest uppercase">
          <a href="#how" className="transition-colors hover:text-white">
            How it works
          </a>
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a
            href="https://0xfortress.gitbook.io/fortress"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Docs
          </a>
          <a
            href="https://x.com/try_fortress"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            X / Twitter
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1100px] border-t border-line-soft px-5 pt-8 text-center text-[12px] text-faint">
        © 2026 Fortress. Your keys, your funds.
      </div>
    </footer>
  );
}
