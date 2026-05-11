import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center size-12 border border-footer-foreground/40 font-serif text-lg tracking-wider">
              ΝΚ
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-base tracking-[0.18em] uppercase">Νικόλας Κολοκοτρώνης</span>
              <span className="text-xs tracking-widest uppercase text-footer-foreground/60">Ψυχολόγος</span>
            </span>
          </div>
          <p className="text-sm text-footer-foreground/70 max-w-sm leading-relaxed">
            Ένας ασφαλής χώρος για αυτογνωσία, ισορροπία και αλλαγή.
          </p>
          <a
            href="https://www.facebook.com/nikolas.kolokotronis/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center size-9 rounded-full border border-footer-foreground/30 text-footer-foreground/80 hover:text-footer-foreground hover:border-footer-foreground/60 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="size-4" />
          </a>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase mb-4 text-footer-foreground/60">Πλοήγηση</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: "/", label: "Αρχική" },
              { to: "/about", label: "Σχετικά με εμένα" },
              { to: "/services", label: "Υπηρεσίες" },
              { to: "/blog", label: "Άρθρα" },
              { to: "/contact", label: "Επικοινωνία" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-footer-foreground/75 hover:text-footer-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase mb-4 text-footer-foreground/60">Επικοινωνία</h4>
          <ul className="space-y-3 text-sm text-footer-foreground/80">
            <li className="flex gap-3">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>Απόλλωνος 30, ισόγειο<br />Νέο Ηράκλειο, Αθήνα</span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 mt-0.5 shrink-0" />
              <a href="tel:+306974371139" className="hover:text-footer-foreground">+30 697 437 1139</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-footer-foreground/10">
        <div className="container-page py-5 text-xs text-footer-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Νικόλας Κολοκοτρώνης — Ψυχολόγος</span>
          <span>Νέο Ηράκλειο, Αθήνα</span>
        </div>
      </div>
    </footer>
  );
}
