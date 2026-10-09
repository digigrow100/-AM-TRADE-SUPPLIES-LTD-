import Image from "next/image";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

const metrics = [
  { value: "24/48h", label: "Mainland Dispatch", className: "" },
  { value: "£500+", label: "Free Delivery Threshold", className: "" },
  { value: "100%", label: "Traceable Logistics", className: "col-span-2 sm:col-span-1" },
];

export default function Logistics() {
  return (
    <section className="relative my-space-lg overflow-hidden rounded-2xl bg-surface-container p-space-lg py-space-xl md:p-space-2xl">
      <div className="relative z-10 grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
        <div className="space-y-space-md lg:col-span-7">
          <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-card px-space-sm py-1 text-label-md text-on-surface shadow-sm">
            <Icon name="location_on" className="text-[16px] text-secondary-container" />
            Stoke-on-Trent Distribution Hub • National Reach
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Direct Pallet Fulfillment for High-Turnover Food Service
          </h2>
          <p className="text-body-md text-on-surface-variant">
            From our centralized hub at Garfield Works, we orchestrate full-pallet
            drops, mixed-commodity orders, and multi-branch scheduled drops
            tailored for commercial kitchens, franchises, and regional
            wholesalers.
          </p>
          <div className="grid grid-cols-2 gap-space-md pt-space-sm sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className={`rounded-lg bg-surface-card p-space-md shadow-sm ${m.className}`}>
                <span className="block text-headline-md text-secondary-container">{m.value}</span>
                <span className="text-body-sm text-on-surface-variant">{m.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            {["BRCGS Compliant Handling", "Dedicated Account Managers"].map((t) => (
              <div key={t} className="flex items-center gap-space-xs text-label-lg text-on-surface">
                <Icon name="check_circle" className="text-[20px] text-stock-green" />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-space-md lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
            <Image
              src={images.homeLogistics}
              alt="Delivery lorry loading wrapped pallets at a warehouse loading bay"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-space-md bottom-space-md rounded-lg bg-navy-deep/90 p-space-md text-on-primary backdrop-blur-md">
              <p className="text-label-lg text-secondary-container">Guaranteed Supply Chain</p>
              <p className="mt-0.5 text-body-sm text-surface-container-highest">
                Next-day routing across the Midlands, North West, and Greater
                London corridors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
