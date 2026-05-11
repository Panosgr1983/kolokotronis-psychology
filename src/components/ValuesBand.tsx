import { ShieldCheck, UserCheck, BookCheck, MapPin } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Εμπιστευτικότητα",
    text: "Ο απόρρητος χαρακτήρας της συνεδρίας είναι απόλυτη προτεραιότητα.",
  },
  {
    icon: UserCheck,
    title: "Εξατομικευμένη προσέγγιση",
    text: "Κάθε άνθρωπος είναι μοναδικός — προσαρμόζω τη διαδικασία στις δικές σας ανάγκες.",
  },
  {
    icon: BookCheck,
    title: "Επιστημονική τεκμηρίωση",
    text: "Βασίζομαι σε σύγχρονες ψυχοθεραπευτικές μεθόδους και διαρκή επιμόρφωση.",
  },
  {
    icon: MapPin,
    title: "Κεντρική τοποθεσία",
    text: "Το γραφείο μου βρίσκεται στο Νέο Ηράκλειο, εύκολα προσβάσιμο.",
  },
];

export function ValuesBand() {
  return (
    <section className="bg-trust text-trust-foreground">
      <div className="container-page py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((v) => (
          <div key={v.title} className="flex gap-4">
            <span className="shrink-0 size-11 rounded-full border border-trust-foreground/30 flex items-center justify-center text-cta">
              <v.icon className="size-5" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="font-serif text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-trust-foreground/75 leading-relaxed">{v.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
