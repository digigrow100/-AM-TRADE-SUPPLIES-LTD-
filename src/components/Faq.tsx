import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { faqLd } from "@/lib/seo";

export type FaqItem = { q: string; a: string; icon: string };

export default function Faq({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: FaqItem[];
}) {
  return (
    <section className="mb-space-xl w-full">
      <JsonLd data={faqLd(items)} />
      <div className="mx-auto mb-space-xl max-w-2xl space-y-space-xs text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-3 py-1 text-label-md text-on-primary-fixed-variant">
          <Icon name="help_outline" className="text-[16px]" /> {eyebrow}
        </div>
        <h2 className="text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
          {title}
        </h2>
        <p className="text-body-md text-on-surface-variant">{intro}</p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-space-md md:grid-cols-2">
        {items.map((f) => (
          <div
            key={f.q}
            className="space-y-space-xs rounded-xl bg-surface-card p-space-md shadow-sm sm:p-space-lg"
          >
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
