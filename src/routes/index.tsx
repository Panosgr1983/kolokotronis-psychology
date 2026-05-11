import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, Phone, MapPin, ShieldCheck, Award, BookOpen, GraduationCap, PlayCircle, Leaf } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CtaBand } from "@/components/CtaBand";
import { ValuesBand } from "@/components/ValuesBand";
import { ContactForm } from "@/components/ContactForm";
import { services } from "@/lib/services-data";
import heroImg from "@/assets/hero-office.jpg";
import portraitImg from "@/assets/portrait.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Νικόλας Κολοκοτρώνης — Ψυχολόγος | Νέο Ηράκλειο" },
      { name: "description", content: "Ένας ασφαλής χώρος για αυτογνωσία, ισορροπία και αλλαγή. Ατομικές συνεδρίες, Ρέικι, NLP και συνδυαστική προσέγγιση στο Νέο Ηράκλειο." },
      { property: "og:title", content: "Νικόλας Κολοκοτρώνης — Ψυχολόγος" },
      { property: "og:description", content: "Ένας ασφαλής χώρος για αυτογνωσία, ισορροπία και αλλαγή." },
    ],
  }),
  component: HomePage,
});

const blogPosts = [
  { img: blog1, date: "12 Μαρ 2026", title: "Πώς να διαχειριστείτε το άγχος στην καθημερινότητα" },
  { img: blog2, date: "05 Μαρ 2026", title: "Αυτογνωσία: το κλειδί για ουσιαστικές αλλαγές" },
  { img: blog3, date: "27 Φεβ 2026", title: "Όρια: γιατί είναι σημαντικά και πώς τα θέτουμε" },
];

const credentials = [
  { icon: GraduationCap, label: "MSc Ψυχολογίας" },
  { icon: Award, label: "Πιστοποιημένος Reiki Master" },
  { icon: BookOpen, label: "NLP Practitioner" },
  { icon: ShieldCheck, label: "Μέλος Συλλόγου Ελλήνων Ψυχολόγων (ΣΕΨ)" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="font-serif text-3xl md:text-4xl text-foreground">{children}</h2>
      <span className="block w-16 h-px bg-primary/60 mx-auto mt-4" />
    </div>
  );
}

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Ζεστός, ήσυχος χώρος θεραπείας"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/20" />
        <div className="relative container-page min-h-[80vh] flex items-center py-24 md:py-32">
          <div className="max-w-xl text-background">
            <Leaf className="size-7 text-cta mb-6 -rotate-12" />
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Κατανόηση.<br />
              Αποδοχή.<br />
              Αλλαγή.
            </h1>
            <p className="mt-7 text-base md:text-lg text-background/80 leading-relaxed max-w-md">
              Ένας ασφαλής χώρος για να μιλήσετε, να κατανοήσετε, να προχωρήσετε.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/about" className="btn-cta text-xs tracking-[0.18em] uppercase">
                Μαθετε περισσοτερα
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2.5 text-sm tracking-[0.18em] uppercase text-background/90 hover:text-cta transition-colors">
                <PlayCircle className="size-7 text-cta" strokeWidth={1.25} />
                Πως μπορω να σας βοηθησω
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20 md:py-24">
        <SectionTitle>Πώς μπορώ να σας βοηθήσω</SectionTitle>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-8">
          {services.map((s) => (
            <article key={s.title} className="text-center px-2">
              <div className="size-14 mx-auto mb-5 text-primary flex items-center justify-center">
                <s.icon className="size-9" strokeWidth={1.25} />
              </div>
              <h3 className="font-serif text-lg md:text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.short}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="text-primary text-xs tracking-[0.2em] uppercase font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
            Ολες οι υπηρεσιες <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-20 md:py-24">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">Σχετικα με εμενα</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Γεια σας, είμαι ο Νικόλας Κολοκοτρώνης
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Πιστεύω ότι κάθε άνθρωπος κουβαλά μέσα του τη δύναμη να αλλάξει — απλώς, μερικές φορές, χρειάζεται κάποιον δίπλα του για να τη ξαναβρεί. Αυτόν τον ρόλο επιλέγω να κρατώ στη δουλειά μου.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Είμαι Ψυχολόγος και σύμβουλος ψυχικής υγείας, με εξειδίκευση σε συμπληρωματικές προσεγγίσεις (Ρέικι, NLP, Σωματοδυναμική Ψυχοθεραπεία) και πολυετή εμπειρία στην υποστήριξη ενηλίκων που επιθυμούν να ξεπεράσουν δυσκολίες και να ζήσουν μια πιο ισορροπημένη και ουσιαστική ζωή.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Η προσέγγισή μου βασίζεται στην επιστημονική γνώση, την ενσυναίσθηση και τη συνεργασία, δημιουργώντας ένα ασφαλές και εμπιστευτικό πλαίσιο.
            </p>
            <Link to="/about" className="btn-outline text-xs tracking-[0.18em] uppercase">
              Περισσοτερα για εμενα
            </Link>
          </div>
          <div>
            <img
              src={portraitImg}
              alt="Νικόλας Κολοκοτρώνης"
              width={1024}
              height={1024}
              loading="lazy"
              className="rounded-l-[3rem] rounded-tr-[3rem] aspect-square object-cover w-full max-w-lg ml-auto shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="container-page py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {credentials.map((c) => (
            <div key={c.label} className="flex items-center gap-3 justify-center text-center md:text-left">
              <c.icon className="size-5 text-primary shrink-0" strokeWidth={1.5} />
              <span className="text-sm font-medium text-foreground/80">{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      <ValuesBand />

      {/* TESTIMONIALS */}
      <section className="bg-background">
        <div className="container-page py-20 md:py-24">
          <SectionTitle>Τι λένε όσοι έχουν συνεργαστεί μαζί μου</SectionTitle>
          <div className="mt-14 grid md:grid-cols-3 gap-7">
            {[
              {
                quote: "Για πρώτη φορά ένιωσα ότι με ακούει κάποιος χωρίς να με κρίνει. Σε λίγους μήνες κατάλαβα πράγματα που με βασάνιζαν χρόνια.",
                name: "Μ. Π.",
                role: "Συνεδρίες ατομικής συμβουλευτικής",
              },
              {
                quote: "Ήρθα με έντονο άγχος και έφυγα με εργαλεία που χρησιμοποιώ καθημερινά. Ζεστός, ανθρώπινος και πραγματικά παρών.",
                name: "Α. Κ.",
                role: "NLP & συμβουλευτική",
              },
              {
                quote: "Η συνεδρία Ρέικι ήταν μια εμπειρία βαθιάς χαλάρωσης που δεν είχα ξαναζήσει. Έφυγα με μια αίσθηση ισορροπίας.",
                name: "Ε. Σ.",
                role: "Συνεδρίες Ρέικι",
              },
            ].map((t) => (
              <figure key={t.name} className="card-soft p-7 flex flex-col">
                <blockquote className="font-serif text-lg leading-relaxed text-foreground/90 flex-1">
                  «{t.quote}»
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground mt-1">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />


      {/* BLOG PREVIEW */}
      <section className="container-page py-20 md:py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 className="font-serif text-3xl md:text-4xl">Πρόσφατα Άρθρα</h2>
          <Link to="/blog" className="text-primary text-xs tracking-[0.2em] uppercase font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
            Δειτε ολα τα αρθρα <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {blogPosts.map((p) => (
            <article key={p.title} className="card-soft overflow-hidden">
              <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">{p.date}</p>
                <h3 className="font-serif text-xl leading-snug mb-4">{p.title}</h3>
                <Link to="/blog" className="text-xs tracking-[0.18em] uppercase text-primary font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                  Διαβαστε περισσοτερα <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="bg-secondary/50 border-t border-border">
        <div className="container-page py-16 md:py-20 grid lg:grid-cols-3 gap-10">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">Στοιχεια επικοινωνιας</p>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin className="size-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-foreground font-medium">Απόλλωνος 30, ισόγειο</p>
                  <p className="text-sm text-muted-foreground">Νέο Ηράκλειο, Αθήνα<br />κοντά στον ηλεκτρικό σταθμό</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="size-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                <a href="tel:+306974371139" className="text-foreground font-medium hover:text-primary">+30 697 437 1139</a>
              </li>
              <li className="text-sm text-muted-foreground">
                <p className="text-foreground font-medium mb-1">Ωράριο</p>
                Δευ – Παρ: 10:00 – 20:00<br />
                Σάββατο: κατόπιν ραντεβού
              </li>
            </ul>
            <Link to="/contact" className="btn-cta mt-7 text-xs tracking-[0.18em] uppercase">
              <Calendar className="size-4" /> Κλειστε ραντεβου
            </Link>
          </div>

          <div className="card-soft p-6">
            <ContactForm compact />
          </div>

          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Απόλλωνος+30,+Νέο+Ηράκλειο,+Αθήνα&output=embed"
              loading="lazy"
              className="w-full h-full min-h-[360px] border-0"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
