import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Άρθρα — Ψυχολογία & Αυτογνωσία | Ν. Κολοκοτρώνης" },
      { name: "description", content: "Σκέψεις και άρθρα για την ψυχική υγεία, την αυτογνωσία και την ολιστική ευεξία." },
      { property: "og:title", content: "Άρθρα — Νικόλας Κολοκοτρώνης" },
      { property: "og:description", content: "Σκέψεις για την ψυχική υγεία και την αυτογνωσία." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { img: blog1, date: "12 Μαρ 2024", category: "Άγχος", title: "Πώς να διαχειριστείτε το άγχος στην καθημερινότητα", excerpt: "Πρακτικές τεχνικές που μπορείτε να εφαρμόσετε από σήμερα." },
  { img: blog2, date: "05 Μαρ 2024", category: "Αυτογνωσία", title: "Αυτογνωσία: το κλειδί για ουσιαστικές αλλαγές", excerpt: "Γιατί η κατανόηση του εαυτού είναι το πρώτο βήμα." },
  { img: blog3, date: "27 Φεβ 2024", category: "Σχέσεις", title: "Όρια: γιατί είναι σημαντικά και πώς τα θέτουμε", excerpt: "Υγιή όρια ως πράξη αυτοφροντίδας." },
  { img: blog2, date: "15 Φεβ 2024", category: "Ευεξία", title: "Διαλογισμός: ένας απλός οδηγός για αρχάριους", excerpt: "Πέντε λεπτά την ημέρα μπορούν να αλλάξουν πολλά." },
  { img: blog3, date: "02 Φεβ 2024", category: "Ψυχοθεραπεία", title: "Πότε είναι η κατάλληλη στιγμή για ψυχοθεραπεία;", excerpt: "Σημάδια και σκέψεις για να αποφασίσετε." },
  { img: blog1, date: "20 Ιαν 2024", category: "Ολιστικά", title: "Ρέικι: τι είναι και τι δεν είναι", excerpt: "Μια ξεκάθαρη ματιά σε μια παρεξηγημένη πρακτική." },
];

function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Άρθρα"
        title="Σκέψεις για την ψυχική υγεία"
        subtitle="Άρθρα για την αυτογνωσία, τις σχέσεις και την ολιστική ευεξία."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <article key={i} className="card-soft overflow-hidden flex flex-col">
              <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  <span className="text-primary font-medium">{p.category}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h2 className="font-serif text-xl leading-snug mb-3">{p.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.excerpt}</p>
                <button type="button" className="text-sm text-primary font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all self-start">
                  Διαβάστε <ArrowRight className="size-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
