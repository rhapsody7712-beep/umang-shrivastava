import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/content/site";

const links = [
  { href: "/experience", label: "Experience" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-line bg-bg/85">
      <div className="max-w-[1100px] mx-auto px-7 py-4 flex items-center justify-between">
        <Link href="/" className="font-display font-semibold text-[16px]">
          {site.navMark.monogram}<span className="text-accent"> · {site.navMark.suffix}</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-7 text-[13px] text-muted">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-text transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
