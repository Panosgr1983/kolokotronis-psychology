import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground mt-24">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl mb-3">Νικόλας Κολοκοτρώνης</h3>
          <p className="text-sm text-footer-foreground/70 max-w-sm leading-relaxed">
            Ψυχολόγος & σύμβουλος ψυχικής υγείας. Ένας ασφαλής χώρος για αυτογνωσία, ισορροπία και αλλαγή.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Πλοήγηση</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Αρχική" },
              { to: "/about", label: "Σχετικά με εμένα" },
              { to: "/services", label: "Υπηρεσίες" },
              { to: "/blog", label: "Άρθρα" },
              { to: "/contact", label: "Επικοινωνία" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-footer-foreground/70 hover:text-footer-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Επικοινωνία</h4>
          <ul className="space-y-3 text-sm text-footer-foreground/80">
            <li className="flex gap-3">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>Απόλλωνος 30, ισόγειο<br />Νέο Ηράκλειο, Αθήνα</span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 mt-0.5 shrink-0" />
              <a href="tel:+306974371139" className="hover:text-footer-foreground">+30 697 437 1139</a>
            </li>
            <li className="flex gap-3">
              <Facebook className="size-4 mt-0.5 shrink-0" />
              <a href="https://www.facebook.com/nikolas.kolokotronis/" target="_blank" rel="noopener noreferrer" className="hover:text-footer-foreground">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-footer-foreground/10">
        <div className="container-page py-6 text-xs text-footer-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Νικόλας Κολοκοτρώνης. Όλα τα δικαιώματα διατηρούνται.</span>
          <span>Νέο Ηράκλειο, Αθήνα</span>
        </div>
      </div>
    </footer>
  );
}
