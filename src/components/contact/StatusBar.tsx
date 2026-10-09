import Link from "next/link";
import Icon from "@/components/Icon";

export default function StatusBar() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-space-lg flex w-full items-center gap-space-xs rounded-xl bg-surface-card p-space-md text-body-sm text-on-surface-variant shadow-sm"
    >
      <Link href="/" className="inline-block py-1 text-label-lg transition-colors hover:text-secondary">
        Home
      </Link>
      <Icon name="chevron_right" className="text-[16px] text-outline" />
      <span className="text-label-lg text-on-surface">Contact Us</span>
    </nav>
  );
}
