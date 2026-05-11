import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { CtaBand } from "@/components/CtaBand";
import portraitImg from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Σχετικά με εμένα — Νικόλας Κολοκοτρώνης" },
      { name: "description", content: "Γνωρίστε τον Νικόλα Κολοκοτρώνη: ψυχολόγος, σύμβουλος ψυχικής υγείας, δάσκαλος Ρέικι. Σπουδές, φιλοσοφία και τρόπος εργασίας." },
      { property: "og:title", content: "Σχετικά — Νικόλας Κολοκοτρώνης" },
      { property: "og:description", content: "Σπουδές, φιλοσοφία και τρόπος εργασίας." },
      { property: "og:image", content: "/og-about.jpg" },
    ],
  }),
  component: AboutPage,
});

const credentials = [
  "MSc Ψυχολογίας — Πανεπιστήμιο Αθηνών",
  "Σύμβουλος Ψυχικής Υγείας",
  "Πιστοποιημένος Reiki Master (Παραδοσιακό Σύστημα Usui)",
  "NLP Practitioner",
  "Σωματοδυναμική Ψυχοθεραπεία",
  "Συστημική Σκέψη & Πρακτική",
  "Κλινική Υπνοθεραπεία",
  "Συγγραφέας & στιχουργός",
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Σχετικά"
        title="Γεια σας, είμαι ο Νικόλας Κολοκοτρώνης"
        subtitle="Ψυχολόγος, σύμβουλος ψυχικής υγείας και ολιστικός θεραπευτής."
      />

      <section className="container-page py-16 md:py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <img
            src={portraitImg}
            alt="Νικόλας Κολοκοτρώνης"
            width={1024}
            height={1280}
            loading="lazy"
            className="rounded-2xl shadow-[var(--shadow-card)] aspect-[4/5] object-cover w-full"
          />
        </div>
        <div className="lg:col-span-3 space-y-5 text-foreground/85 leading-relaxed">
          <p>
            Από μικρή ηλικία με γοήτευε ο τρόπος που λειτουργεί ο ανθρώπινος νους — τα συναισθήματα, οι σχέσεις, η αναζήτηση του νοήματος. Αυτή η περιέργεια με οδήγησε στις σπουδές της Ψυχολογίας και αργότερα στη συστηματική μελέτη ολιστικών προσεγγίσεων.
          </p>
          <p>
            Σήμερα συνδυάζω επιστημονικά τεκμηριωμένες ψυχοθεραπευτικές μεθόδους με τεχνικές ενεργειακής εργασίας, σωματικής επίγνωσης και ενσυνειδητότητας. Ο στόχος είναι να υποστηρίξω κάθε άνθρωπο να βρει τη δική του ισορροπία — με σεβασμό στον ρυθμό του.
          </p>
          <p>
            Παράλληλα με την κλινική μου δουλειά, γράφω βιβλία και στίχους — γιατί πιστεύω ότι η τέχνη και η θεραπεία πηγάζουν από την ίδια πηγή: την ανάγκη να κατανοήσουμε.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">Εκπαίδευση & πιστοποιήσεις</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-2">Σπουδές</h2>
            <p className="text-muted-foreground">Διαρκής εκπαίδευση σε επιστημονικές και ολιστικές μεθόδους.</p>
          </div>
          <ul className="space-y-3">
            {credentials.map((c) => (
              <li key={c} className="flex gap-3 items-start bg-background rounded-lg p-4 border border-border">
                <Check className="size-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/85">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 grid md:grid-cols-2 gap-10">
        <div className="card-soft p-8 md:p-10">
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">Φιλοσοφία</p>
          <h2 className="font-serif text-3xl mb-4">Κατανόηση πριν την αλλαγή</h2>
          <p className="text-muted-foreground leading-relaxed">
            Πιστεύω πως η ουσιαστική αλλαγή ξεκινά από την κατανόηση και την αποδοχή. Ο ρόλος μου δεν είναι να σας δώσω απαντήσεις, αλλά να σταθώ δίπλα σας καθώς ανακαλύπτετε τις δικές σας. Κάθε άνθρωπος είναι μοναδικός — και η θεραπευτική διαδρομή πρέπει να σέβεται αυτή τη μοναδικότητα.
          </p>
        </div>
        <div className="card-soft p-8 md:p-10">
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">Πώς δουλεύω</p>
          <h2 className="font-serif text-3xl mb-4">Ένα ολιστικό πλαίσιο</h2>
          <p className="text-muted-foreground leading-relaxed">
            Συνδυάζω ψυχοθεραπευτικό διάλογο με τεχνικές σωματικής επίγνωσης, διαλογισμού και — όπου ταιριάζει — ενεργειακής εργασίας. Οι συνεδρίες είναι 50 λεπτά, σε ένα ζεστό και απόλυτα εμπιστευτικό περιβάλλον. Δουλεύουμε με τους δικούς σας στόχους και τον δικό σας ρυθμό.
          </p>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
