import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

const steps = [
  { value: "1", label: "Tell us what you need" },
  { value: "2", label: "Receive a quote" },
  { value: "3", label: "Arrange your supply" },
];

export default function Logistics() {
  return (
    <section className="relative my-space-lg overflow-hidden rounded-2xl bg-surface-container p-space-lg py-space-xl md:p-space-2xl">
      <div className="relative z-10 grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
        <div className="space-y-space-md lg:col-span-7">
          <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-card px-space-sm py-1 text-label-md text-on-surface shadow-sm">
            <Icon name="location_on" className="text-[16px] text-secondary-container" />
            Stoke-on-Trent wholesale supply
          </div>
          <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">
            Local Wholesale Supply from Stoke-on-Trent
          </h2>
          <p className="text-body-md text-on-surface-variant">
            We supply trade customers from Stoke-on-Trent. Delivery availability
            depends on your location, so send us your postcode and we will
            confirm what is possible.
          </p>
          <div className="grid grid-cols-1 gap-space-md pt-space-sm sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.label} className="rounded-lg bg-surface-card p-space-md shadow-sm">
                <span className="block text-headline-md text-secondary-container">{s.value}</span>
                <span className="text-body-sm text-on-surface-variant">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-sm pt-space-sm">
            {["Quotes based on your order", "Delivery confirmed by postcode"].map((t) => (
              <div key={t} className="flex items-center gap-space-xs text-label-lg text-on-surface">
                <Icon name="check_circle" className="text-[20px] text-stock-green" />
                {t}
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-space-xs text-label-lg text-secondary hover:underline"
          >
            Check delivery to your area <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>

        <div className="flex flex-col gap-space-md lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
            <Image
              src={images.homeLogistics}
              alt="Delivery lorry being loaded with wrapped pallets at a warehouse loading bay"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-space-md bottom-space-md rounded-lg bg-navy-deep/90 p-space-md text-on-primary backdrop-blur-md">
              <p className="text-label-lg text-secondary-container">Check Your Delivery Area</p>
              <p className="mt-0.5 text-body-sm text-surface-container-highest">
                Include your postcode with your enquiry and we will confirm
                availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
