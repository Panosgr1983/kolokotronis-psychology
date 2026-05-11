import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";

export function CtaBand() {
  return (
    <section className="bg-trust text-trust-foreground">
      <div className="container-page py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl mb-1">Είστε έτοιμοι για το επόμενο βήμα;</h2>
          <p className="text-trust-foreground/80 text-sm md:text-base">Κλείστε μια πρώτη γνωριμία — χωρίς δέσμευση.</p>
        </div>
        <Link to="/contact" className="btn-cta shrink-0">
          <Calendar className="size-4" />
          Κλείσε ραντεβού
        </Link>
      </div>
    </section>
  );
}
