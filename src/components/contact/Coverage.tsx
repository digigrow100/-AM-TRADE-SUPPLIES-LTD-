import Icon from "@/components/Icon";

const strip = [
  { icon: "location_on", title: "Share Your Postcode", body: "So we can check delivery to your premises" },
  { icon: "inventory_2", title: "List Your Products", body: "Choose from our drinks, oils and flour" },
  { icon: "receipt_long", title: "Ask for a Quote", body: "We price your order once we have the details" },
];

export default function Coverage() {
  return (
    <section className="mb-space-xl w-full overflow-hidden rounded-2xl bg-surface-card p-space-md py-space-lg shadow-sm sm:p-space-lg md:mb-space-2xl md:p-space-xl">
      <div className="mb-space-lg">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded bg-surface-container px-2.5 py-1 text-label-md text-on-primary-fixed-variant">
          <Icon name="map" className="text-[16px]" /> Delivery and Supply Area
        </div>
        <h2 className="text-headline-md text-on-surface">Supplying Businesses From Stoke-on-Trent</h2>
        <p className="mt-1 max-w-2xl text-body-md text-on-surface-variant">
          Our base is in Stoke-on-Trent. Whether we can deliver to you depends on
          your location, so include your postcode in your enquiry and we will
          confirm what we can do.
        </p>
      </div>

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-surface-container p-space-lg shadow-inner sm:p-space-xl">
        <div className="max-w-sm space-y-space-xs rounded-xl bg-surface-card/95 p-space-md text-center shadow-lg">
          <Icon name="hub" className="text-[32px] text-secondary-container" />
          <h3 className="text-headline-sm text-on-surface">Stoke-on-Trent</h3>
          <p className="text-body-sm text-on-surface-variant">
            Tell us where your business is and we will let you know about
            delivery options.
          </p>
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
