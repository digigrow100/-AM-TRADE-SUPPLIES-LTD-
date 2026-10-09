import Link from "next/link";
import Icon from "@/components/Icon";

export default function StatusBar() {
  return (
    <div className="mb-space-lg flex w-full flex-wrap items-center justify-between gap-space-sm rounded-xl bg-surface-card p-space-md shadow-sm">
      <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
        <Link href="/" className="text-label-lg transition-colors hover:text-secondary">
          Home
        </Link>
        <Icon name="chevron_right" className="text-[16px] text-outline" />
        <span className="text-label-lg text-on-surface">Trade Account &amp; Enquiries</span>
      </div>
      <div className="flex flex-wrap items-center gap-space-sm">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-stock-green-bg px-3 py-1 text-label-md text-stock-green">
          <span className="h-2 w-2 rounded-full bg-stock-green" /> Fast-Track Applications Active
        </span>
        <span className="hidden text-body-sm text-on-surface-variant md:inline">
          Same-day turnaround for standard business verification
        </span>
      </div>
    </div>
  );
}
