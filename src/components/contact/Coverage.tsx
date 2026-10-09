import Icon from "@/components/Icon";

const strip = [
  { icon: "package_2", title: "Free UK Mainland Delivery", body: "Qualified on consolidated orders over £500" },
  { icon: "forklift", title: "Pallet & Tail-Lift Fleet", body: "Kerbside drop or commercial goods-in dock" },
  { icon: "nest_clock_farsight_analog", title: "Scheduled Drop Windows", body: "Pre-notified delivery ETA via SMS & email" },
];

export default function Coverage() {
  return (
    <section className="mb-space-xl w-full overflow-hidden rounded-2xl bg-surface-card p-space-md py-space-lg shadow-sm sm:p-space-lg md:mb-space-2xl md:p-space-xl">
      <div className="mb-space-lg flex flex-col justify-between gap-space-sm md:flex-row md:items-end">
        <div>
          <div className="mb-2 inline-flex items-center gap-1.5 rounded bg-surface-container px-2.5 py-1 text-label-md text-on-primary-fixed-variant">
            <Icon name="map" className="text-[16px]" /> Nationwide Supply Chain
          </div>
          <h2 className="text-headline-md text-on-surface">Mainland UK Logistics &amp; Depot Coverage</h2>
          <p className="mt-1 max-w-2xl text-body-md text-on-surface-variant">
            From our centralized hub in Stoke-on-Trent, our contracted fleet
            delivers full pallets and consolidated mixed orders throughout the UK
            mainland with GPS trackability.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-x-space-md gap-y-space-xs">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-secondary-container" />
            <span className="text-label-lg text-on-surface">Central Depot (ST3 1PF)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-stock-green" />
            <span className="text-label-lg text-on-surface">Next-Day Zone</span>
          </div>
        </div>
      </div>

      <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-xl bg-navy-deep/10 p-space-md shadow-inner sm:h-80">
        <div className="max-w-sm space-y-space-xs rounded-xl bg-surface-card/95 p-space-md text-center shadow-lg backdrop-blur-md">
          <Icon name="hub" className="text-[32px] text-secondary-container" />
          <h4 className="text-headline-sm text-on-surface">Stoke-on-Trent Hub</h4>
          <p className="text-body-sm text-on-surface-variant">
            Strategic transport corridor close to A50 &amp; M6, enabling fast
            dispatches across England, Wales, and Southern Scotland.
          </p>
          <div className="pt-space-xs">
            <a
              href="https://maps.google.com/?q=Unit+3+Garfield+Works+Uttoxeter+Road+ST3+1PF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-label-lg text-secondary hover:underline"
            >
              Open in Maps <Icon name="launch" className="text-[16px]" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-space-lg grid grid-cols-1 gap-space-md rounded-xl bg-surface-subtle p-space-md sm:grid-cols-3">
        {strip.map((s) => (
          <div key={s.title} className="flex items-center gap-space-sm">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-container">
              <Icon name={s.icon} className="text-[20px] text-on-surface" />
            </div>
            <div>
              <p className="text-label-lg text-on-surface">{s.title}</p>
              <p className="text-body-sm text-on-surface-variant">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
