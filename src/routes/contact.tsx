import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Facebook, Clock } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Επικοινωνία — Νικόλας Κολοκοτρώνης | Νέο Ηράκλειο" },
      { name: "description", content: "Κλείστε ραντεβού. Απόλλωνος 30, Νέο Ηράκλειο. Τηλέφωνο: +30 697 437 1139." },
      { property: "og:title", content: "Επικοινωνία — Νικόλας Κολοκοτρώνης" },
      { property: "og:description", content: "Κλείστε ραντεβού στο Νέο Ηράκλειο." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Επικοινωνία"
        title="Κλείστε το ραντεβού σας"
        subtitle="Επικοινωνήστε για μια πρώτη γνωριμία ή για να ορίσουμε συνεδρία."
      />

      <section className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-10">
        {/* INFO */}
        <div className="space-y-6">
          <div className="card-soft p-7 flex gap-5">
            <span className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Phone className="size-5" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Τηλέφωνο</p>
              <a href="tel:+306974371139" className="font-serif text-2xl text-foreground hover:text-primary">+30 697 437 1139</a>
              <p className="text-sm text-muted-foreground mt-1">Καλέστε για άμεση εξυπηρέτηση</p>
            </div>
          </div>

          <div className="card-soft p-7 flex gap-5">
            <span className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin className="size-5" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Διεύθυνση</p>
              <p className="font-medium text-foreground">Απόλλωνος 30, ισόγειο</p>
              <p className="text-foreground">Νέο Ηράκλειο, Αθήνα</p>
              <p className="text-sm text-muted-foreground mt-1">Κοντά στον ηλεκτρικό σταθμό</p>
            </div>
          </div>

          <div className="card-soft p-7 flex gap-5">
            <span className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Clock className="size-5" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Ωράριο</p>
              <p className="text-foreground">Δευ – Παρ: 10:00 – 20:00</p>
              <p className="text-foreground">Σάββατο: κατόπιν ραντεβού</p>
            </div>
          </div>

          <div className="card-soft p-7 flex gap-5">
            <span className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Facebook className="size-5" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Social</p>
              <a href="https://www.facebook.com/nikolas.kolokotronis/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">Facebook</a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="card-soft p-8 md:p-10">
          <h2 className="font-serif text-2xl mb-2">Στείλτε μήνυμα</h2>
          <p className="text-sm text-muted-foreground mb-6">Θα σας απαντήσω εντός 24 ωρών.</p>

          {sent ? (
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center">
              <p className="font-serif text-xl text-primary mb-1">Ευχαριστώ!</p>
              <p className="text-muted-foreground text-sm">Έλαβα το μήνυμά σας και θα επικοινωνήσω σύντομα.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Ονοματεπώνυμο</label>
                <input required maxLength={100} className="w-full bg-background border border-input rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input required type="email" maxLength={150} className="w-full bg-background border border-input rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Τηλέφωνο</label>
                  <input type="tel" maxLength={20} className="w-full bg-background border border-input rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Μήνυμα</label>
                <textarea required maxLength={1500} rows={5} className="w-full bg-background border border-input rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
              <button type="submit" className="btn-cta w-full">
                <Send className="size-4" /> Αποστολή μηνύματος
              </button>
              <p className="text-xs text-muted-foreground text-center">Τα στοιχεία σας είναι ασφαλή και δεν κοινοποιούνται.</p>
            </form>
          )}
        </div>
      </section>

      {/* MAP */}
      <section className="container-page pb-20">
        <div className="card-soft overflow-hidden p-0">
          <iframe
            title="Χάρτης - Απόλλωνος 30, Νέο Ηράκλειο"
            src="https://www.google.com/maps?q=Απόλλωνος+30,+Νέο+Ηράκλειο,+Αθήνα&output=embed"
            loading="lazy"
            className="w-full h-[420px] border-0"
          />
        </div>
      </section>
    </PageShell>
  );
}
