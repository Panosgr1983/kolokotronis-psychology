import { Link } from "@tanstack/react-router";
import { Calendar, Leaf } from "lucide-react";

export function CtaBand() {
  return (
    <section className="bg-trust text-trust-foreground">
      <div className="container-page py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-5">
          <span className="hidden sm:inline-flex size-14 rounded-full border border-trust-foreground/30 items-center justify-center shrink-0">
            <Leaf className="size-6" />
          </span>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-1">Είστε έτοιμοι για το επόμενο βήμα;</h2>
            <p className="text-trust-foreground/80 text-sm md:text-base">
              Κλείστε μια πρώτη γνωριμία — χωρίς δέσμευση.
            </p>
          </div>
        </div>
        <Link to="/contact" className="btn-cta shrink-0 text-xs tracking-[0.18em] uppercase">
          <Calendar className="size-4" />
          Κλείστε ραντεβού
        </Link>
      </div>
    </section>
  );
}
