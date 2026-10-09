import Icon from "@/components/Icon";

const faqs = [
  { icon: "production_quantity_limits", q: "What is the Minimum Order Quantity (MOQ)?", a: "Our standard wholesale minimum order is a single half-pallet or 20 cases of mixed beverage/cooking supplies. Free delivery is automatically triggered on all mainland UK commercial orders totaling £500 or more excluding VAT." },
  { icon: "credit_card", q: "How do 30-day credit terms work?", a: "Credit accounts are subject to initial underwriting checks. Once verified (usually within 24 hours), invoices are payable on 30-day end-of-month terms via BACS transfer or Direct Debit. Initial trial orders can be cleared immediately via company debit/credit card." },
  { icon: "fire_truck", q: "Can we specify tail-lift delivery for tight venues?", a: "Yes. If your restaurant, takeaway, or venue lacks a dedicated loading bay or forklift truck, we schedule tail-lift vehicles equipped with electric pump trucks for curbside or storeroom-adjacent offloading. Note this in your application." },
  { icon: "layers", q: "Can we order mixed pallets of different products?", a: "Absolutely. You do not need to order a full pallet of a single SKU. We regularly pick mixed pallets combining wholesale drinks, commercial flour bags (25kg), and cooking oil drums (10L / 20L) to match your kitchen storage footprint." },
  { icon: "timer", q: "How fast can an urgent initial order be delivered?", a: "If you have experienced an emergency supply chain outage from your previous vendor, call our trade desk directly on 01782 123 456. Same-day emergency loading is frequently possible for collection from Uttoxeter Road, or next-morning drop via expedited courier." },
  { icon: "verified", q: "What proof of business is required?", a: "To maintain true wholesale pricing restricted strictly to commercial entities, we require a verifiable Companies House registration number, VAT certificate, or commercial business utility bill indicating your active trading premise." },
];

export default function Faq() {
  return (
    <section className="mb-space-xl w-full">
      <div className="mx-auto mb-space-xl max-w-2xl space-y-space-xs text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-3 py-1 text-label-md text-on-primary-fixed-variant">
          <Icon name="help_outline" className="text-[16px]" /> Common Trade Inquiries
        </div>
        <h2 className="text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-surface">Wholesale &amp; Supply Terms FAQ</h2>
        <p className="text-body-md text-on-surface-variant">
          Everything you need to know about setting up your purchasing account
          and receiving regular commercial drops.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-space-md md:grid-cols-2">
        {faqs.map((f) => (
          <div key={f.q} className="space-y-space-xs rounded-xl bg-surface-card p-space-md shadow-sm sm:p-space-lg">
            <div className="flex items-start gap-space-xs text-on-surface">
              <Icon name={f.icon} className="mt-0.5 text-[22px] text-secondary" />
              <h3 className="text-headline-sm">{f.q}</h3>
            </div>
            <p className="text-body-md text-on-surface-variant">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
