import Icon from "@/components/Icon";

const practices = [
  {
    icon: "qr_code_scanner",
    title: "Comprehensive Batch Tracking",
    body: "Every pallet received is logged via serialized lot codes, providing immediate traceability from milling dates to customer receipt.",
  },
  {
    icon: "thermostat",
    title: "Controlled Ambient Warehousing",
    body: "Garfield Works maintains climate-stabilized storage to prevent moisture spoilage in flour and temperature degradation in cooking oils.",
  },
  {
    icon: "cleaning_services",
    title: "Rigorous Hygiene Audits",
    body: "Continuous pest prevention and daily sanitization logs ensuring flawless health inspection records across our whole fleet.",
  },
];

const standards = [
  {
    icon: "verified",
    iconClass: "text-stock-green",
    title: "FSA Food Hygiene Scheme",
    body: "Local Environmental Health Authority Approved",
    tag: "5 / 5 RATING",
    tagClass: "bg-stock-green-bg text-stock-green font-bold",
  },
  {
    icon: "policy",
    iconClass: "text-secondary-container",
    title: "HACCP Principles Enforced",
    body: "Hazard Analysis & Critical Control Points",
    tag: "CERTIFIED",
    tagClass: "bg-surface-container text-on-surface font-semibold",
  },
  {
    icon: "history_edu",
    iconClass: "text-primary",
    title: "Full Product Data Sheets (COSHH & Allergen)",
    body: "Available on demand via online Trade Portal",
    tag: "AVAILABLE",
    tagClass: "bg-surface-container text-on-surface font-semibold",
  },
];

export default function Quality() {
  return (
    <section className="mb-space-xl rounded-2xl bg-surface-card p-space-md py-space-lg shadow-sm sm:p-space-lg md:mb-space-2xl lg:p-space-2xl">
      <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
        <div className="space-y-space-md lg:col-span-6">
          <div className="inline-flex items-center gap-space-xs rounded-full bg-stock-green-bg px-space-sm py-space-xs text-label-md text-stock-green">
            <Icon name="shield" className="text-[16px]" />
            BRITISH FOOD STANDARDS COMPLIANCE
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-surface">
            Strict Quality Assurance &amp; Complete Batch Traceability
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Food safety is not an afterthought in our distribution chain—it is
            the baseline of our operations. MB Trade Supplies adheres rigorously
            to all UK Food Standards Agency protocols, local authority hygiene
            benchmarks, and environmental health mandates.
          </p>
          <div className="space-y-space-sm pt-space-xs">
            {practices.map((p) => (
              <div key={p.title} className="flex items-start gap-space-sm">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container text-navy-deep">
                  <Icon name={p.icon} className="text-[18px]" />
                </div>
                <div>
                  <p className="text-headline-sm text-on-surface">{p.title}</p>
                  <p className="text-body-sm text-on-surface-variant">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-space-md rounded-2xl bg-surface-subtle p-space-md sm:p-space-lg lg:col-span-6">
          <h3 className="text-headline-sm text-on-surface">Audited Facility Standards</h3>
          <div className="space-y-space-xs">
            {standards.map((s) => (
              <div
                key={s.title}
                className="flex flex-col gap-space-sm rounded-lg bg-surface-card p-space-md shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-space-sm">
                  <Icon name={s.icon} className={`text-[22px] ${s.iconClass}`} />
                  <div>
                    <p className="text-label-lg text-on-surface">{s.title}</p>
                    <p className="text-body-sm text-on-surface-variant">{s.body}</p>
                  </div>
                </div>
                <span className={`self-start whitespace-nowrap rounded px-space-sm py-1 text-label-md sm:self-auto ${s.tagClass}`}>
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-surface-container-high p-space-md text-body-sm text-on-surface">
            <span className="font-semibold">Company Reg:</span> 14298102 •{" "}
            <span className="font-semibold">VAT:</span> GB 412 8931 04. Audited
            annually under English commercial and food storage jurisdiction.
          </div>
        </div>
      </div>
    </section>
  );
}
