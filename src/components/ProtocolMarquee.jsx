import React from 'react';

const PROTOCOLS = ['Morpho', 'Aave', 'Uniswap', 'Pendle', 'LI.FI', 'Robinhood'];

export default function ProtocolMarquee() {
  const items = [...PROTOCOLS, ...PROTOCOLS, ...PROTOCOLS, ...PROTOCOLS];

  return (
    <section className="relative border-y border-line-soft py-8 overflow-hidden bg-[#0c0c0c]">
      <div className="mx-auto max-w-[1100px] px-5">
        <p className="mb-6 text-center text-[12px] uppercase tracking-[0.18em] text-faint">
          Built on the protocols you already trust on Robinhood
        </p>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max gap-12 animate-fmarquee">
            {items.map((proto, index) => (
              <span
                key={index}
                className="font-mono whitespace-nowrap text-[18px] font-medium text-muted/70 hover:text-white transition-colors duration-200"
              >
                {proto}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
