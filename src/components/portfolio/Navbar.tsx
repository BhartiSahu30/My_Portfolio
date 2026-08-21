import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, LINKS } from "./data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-[var(--glass-border)]"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">Bharti Sahu</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <Button
            asChild
            variant="hero"
            size="sm"
            className="rounded-lg"
          >
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume"
            >
              <Download aria-hidden="true" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-foreground md:hidden"
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="glass border-t border-[var(--glass-border)] md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Mobile Resume */}
            <li className="pt-2 pb-1">
              <Button
                asChild
                variant="hero"
                size="sm"
                className="w-full rounded-lg"
              >
                <a
                  href={LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View resume"
                >
                  <Download aria-hidden="true" />
                  Download Resume
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}