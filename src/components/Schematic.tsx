export function Schematic() {
  return (
    <div>
      <div className="relative aspect-square max-w-[440px] mx-auto">
        <svg
          viewBox="0 0 400 400"
          role="img"
          aria-label="Diagram connecting four flagship privacy programs to a central architect and TPM role"
          className="w-full h-full"
        >
          <line className="schem-line-live" x1="200" y1="200" x2="200" y2="60" />
          <line className="schem-line-live" x1="200" y1="200" x2="340" y2="160" />
          <line className="schem-line-live" x1="200" y1="200" x2="300" y2="330" />
          <line className="schem-line-live" x1="200" y1="200" x2="80" y2="300" />
          <line className="schem-line" x1="200" y1="200" x2="60" y2="140" />

          <g>
            <circle cx="200" cy="200" r="40" className="fill-panel-2 stroke-accent" strokeWidth="1.4" />
            <text x="200" y="197" textAnchor="middle" className="fill-text font-display font-bold text-[13px]">
              RS
            </text>
            <text x="200" y="212" textAnchor="middle" className="fill-muted font-mono text-[8px]">
              ARCH+TPM
            </text>
          </g>

          <g className="schem-node">
            <circle cx="200" cy="60" r="30" className="fill-panel stroke-line" strokeWidth="1" />
            <text x="200" y="57" textAnchor="middle" className="fill-muted font-mono text-[9.5px]">PrES</text>
            <text x="200" y="69" textAnchor="middle" className="fill-muted font-mono text-[8px]">1→20 eng</text>
          </g>
          <g className="schem-node">
            <circle cx="340" cy="160" r="30" className="fill-panel stroke-line" strokeWidth="1" />
            <text x="340" y="157" textAnchor="middle" className="fill-muted font-mono text-[9.5px]">ECPC</text>
            <text x="340" y="169" textAnchor="middle" className="fill-muted font-mono text-[8px]">76B+ rcrds</text>
          </g>
          <g className="schem-node">
            <circle cx="300" cy="330" r="30" className="fill-panel stroke-line" strokeWidth="1" />
            <text x="300" y="327" textAnchor="middle" className="fill-muted font-mono text-[9.5px]">DSR</text>
            <text x="300" y="339" textAnchor="middle" className="fill-muted font-mono text-[8px]">$9M→$3.5M</text>
          </g>
          <g className="schem-node">
            <circle cx="80" cy="300" r="30" className="fill-panel stroke-line" strokeWidth="1" />
            <text x="80" y="297" textAnchor="middle" className="fill-muted font-mono text-[9.5px]">Dash</text>
            <text x="80" y="309" textAnchor="middle" className="fill-muted font-mono text-[8px]">$300M+ rev</text>
          </g>
          <g className="schem-node">
            <circle cx="60" cy="140" r="22" className="fill-panel stroke-line" strokeWidth="1" />
            <text x="60" y="137" textAnchor="middle" className="fill-muted font-mono text-[9px]">T-Mobile</text>
            <text x="60" y="149" textAnchor="middle" className="fill-muted font-mono text-[7px]">USA</text>
          </g>
        </svg>
      </div>
      <div className="text-center font-mono text-[10.5px] text-muted-2 tracking-wide uppercase mt-3.5">
        FIG. 00 — privacy program topology
      </div>
    </div>
  );
}
