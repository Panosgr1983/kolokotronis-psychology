import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";

const nav = [
  { to: "/", label: "Αρχική" },
  { to: "/about", label: "Σχετικά με εμένα" },
  { to: "/services", label: "Υπηρεσίες" },
  { to: "/blog", label: "Άρθρα" },
  { to: "/contact", label: "Επικοινωνία" },
] as const;

function Monogram() {
  return (
    <span className="inline-flex items-center justify-center size-12 border border-foreground/30 font-serif text-lg tracking-wider text-foreground shrink-0">
      ΝΚ
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-page flex items-center justify-between h-20 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Monogram />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base md:text-lg tracking-[0.18em] uppercase text-foreground">
              Νικολας Κολοκοτρωνης
            </span>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Ψυχολόγος</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[11px] tracking-[0.2em] uppercase text-foreground/75 hover:text-primary transition-colors pb-1 border-b-2 border-transparent"
              activeProps={{ className: "text-primary border-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden md:inline-flex btn-cta !py-2.5 !px-5 text-xs tracking-[0.18em] uppercase">
          <Calendar className="size-4" />
          Κλείστε ραντεβού
        </Link>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground/80 text-sm tracking-[0.15em] uppercase"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-cta mt-3">
              <Calendar className="size-4" />
              Κλείστε ραντεβού
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
