import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";

const nav = [
  { to: "/", label: "Αρχική" },
  { to: "/about", label: "Σχετικά" },
  { to: "/services", label: "Υπηρεσίες" },
  { to: "/blog", label: "Άρθρα" },
  { to: "/contact", label: "Επικοινωνία" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container-page flex items-center justify-between h-18 py-4 text-slate-800">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl text-foreground">Ν. Κολοκοτρώνης</span>
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Ψυχολόγος</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden md:inline-flex btn-cta !py-2.5 !px-5 text-sm">
          <Calendar className="size-4" />
          Κλείσε ραντεβού
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
                className="py-3 text-foreground/80"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-cta mt-3">
              <Calendar className="size-4" />
              Κλείσε ραντεβού
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
