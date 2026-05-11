import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, Phone, MapPin, ShieldCheck, Award, BookOpen, GraduationCap } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CtaBand } from "@/components/CtaBand";
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

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b border-border">
        <div className="container-page grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-24">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-5">Ψυχολόγος · Νέο Ηράκλειο</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
              Ένας ασφαλής χώρος<br />για <em className="text-primary not-italic">αυτογνωσία</em>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Υποστήριξη για να κατανοήσετε καλύτερα τον εαυτό σας, να αντιμετωπίσετε τις δυσκολίες και να προχωρήσετε με σαφήνεια.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-cta">
                <Calendar className="size-4" /> Κλείσε ραντεβού
              </Link>
              <Link to="/about" className="btn-outline">
                Μάθετε περισσότερα <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-1" aria-hidden />
            <img
              src={heroImg}
              alt="Ζεστός, ήσυχος χώρος θεραπείας"
              width={1280}
              height={1280}
              className="relative rounded-2xl shadow-[var(--shadow-card)] aspect-[4/5] lg:aspect-[5/6] object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">Υπηρεσίες</p>
          <h2 className="font-serif text-3xl md:text-4xl">Πώς μπορώ να σας βοηθήσω</h2>
          <p className="mt-4 text-muted-foreground">Μια συνδυαστική προσέγγιση που ενώνει την επιστημονική γνώση με σεβασμό στον άνθρωπο.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="card-soft p-7">
              <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5">
                <s.icon className="size-6" />
              </div>
              <h3 className="font-serif text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.short}</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="text-primary text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
            Δείτε όλες τις υπηρεσίες <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-20 md:py-24">
          <div className="order-2 lg:order-1">
            <img
              src={portraitImg}
              alt="Νικόλας Κολοκοτρώνης"
              width={1024}
              height={1280}
              loading="lazy"
              className="rounded-2xl shadow-[var(--shadow-card)] aspect-[4/5] object-cover w-full max-w-md mx-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">Σχετικά με εμένα</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-5">Γεια σας, είμαι ο Νικόλας</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ψυχολόγος, σύμβουλος ψυχικής υγείας, δάσκαλος παραδοσιακού Ρέικι, συγγραφέας και στιχουργός. Συνδυάζω την ψυχοθεραπευτική εργασία με συμπληρωματικές προσεγγίσεις για να υποστηρίξω την ισορροπία σώματος και νου.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Η δουλειά μου βασίζεται στην εμπιστοσύνη, την ενσυναίσθηση και τον σεβασμό στη μοναδική διαδρομή του κάθε ανθρώπου.
            </p>
            <Link to="/about" className="btn-outline">
              Περισσότερα για εμένα <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="container-page py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {credentials.map((c) => (
            <div key={c.label} className="flex items-center gap-3 justify-center text-center md:text-left">
              <c.icon className="size-5 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground/80">{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />

      {/* BLOG PREVIEW */}
      <section className="container-page py-20 md:py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">Άρθρα</p>
            <h2 className="font-serif text-3xl md:text-4xl">Πρόσφατες σκέψεις</h2>
          </div>
          <Link to="/blog" className="text-primary text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
            Όλα τα άρθρα <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((p) => (
            <article key={p.title} className="card-soft overflow-hidden">
              <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{p.date}</p>
                <h3 className="font-serif text-xl leading-snug mb-3">{p.title}</h3>
                <Link to="/blog" className="text-sm text-primary font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                  Διαβάστε <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="bg-secondary/40 border-t border-border">
        <div className="container-page py-20 md:py-24 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">Επικοινωνία</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Πάμε να μιλήσουμε</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Επικοινωνήστε για μια πρώτη γνωριμία ή για να κλείσετε το ραντεβού σας.
            </p>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Τηλέφωνο</p>
                  <a href="tel:+306974371139" className="text-foreground font-medium hover:text-primary">+30 697 437 1139</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Διεύθυνση</p>
                  <p className="text-foreground font-medium">Απόλλωνος 30, ισόγειο, Νέο Ηράκλειο<br /><span className="text-sm text-muted-foreground font-normal">κοντά στον ηλεκτρικό σταθμό</span></p>
                </div>
              </li>
            </ul>
            <Link to="/contact" className="btn-cta mt-8">
              <Calendar className="size-4" /> Κλείσε ραντεβού
            </Link>
          </div>
          <div className="card-soft overflow-hidden p-0">
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
