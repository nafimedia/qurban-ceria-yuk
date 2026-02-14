import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Search, 
  Wallet, 
  ClipboardCheck, 
  Scissors, 
  PackageCheck, 
  HeartHandshake,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const educationTopics = [
  {
    icon: Scale,
    title: "Dasar Hukum Qurban",
    slug: "dasar-hukum-qurban",
    description: "Pengertian, hukum, waktu pelaksanaan, syarat hewan, dan FAQ untuk pemula.",
    topics: ["Pengertian & tujuan qurban", "Hukum dan waktu pelaksanaan", "Syarat hewan & larangan cacat", "Patungan qurban"],
    color: "from-primary to-forest-light",
  },
  {
    icon: Search,
    title: "Pilih Hewan",
    slug: "pilih-hewan",
    description: "Panduan lengkap memilih hewan qurban yang sehat dan layak.",
    topics: ["Jenis hewan qurban", "Ciri hewan sehat", "Kondisi tidak layak", "Checklist sebelum DP"],
    color: "from-accent to-gold-light",
  },
  {
    icon: Wallet,
    title: "Harga & Budgeting",
    slug: "harga-budgeting",
    description: "Tips menentukan budget dan menghindari penipuan harga.",
    topics: ["Faktor penentu harga", "Strategi budgeting", "Perbandingan opsi", "Tips anti tipu-tipu"],
    color: "from-earth to-earth-light",
  },
  {
    icon: ClipboardCheck,
    title: "Persiapan Teknis",
    slug: "persiapan-teknis",
    description: "Checklist lengkap dari H-30 sampai Hari H.",
    topics: ["Timeline persiapan", "Persiapan panitia", "Kandang sementara", "Manajemen logistik"],
    color: "from-sage-dark to-sage",
  },
  {
    icon: Scissors,
    title: "Teknis Penyembelihan",
    slug: "teknis-penyembelihan",
    description: "Panduan prinsip dan prosedur penyembelihan yang benar.",
    topics: ["Prinsip dasar", "Persiapan alat", "Prosedur step-by-step", "Kesalahan umum"],
    color: "from-primary to-forest-light",
  },
  {
    icon: PackageCheck,
    title: "Pasca Penyembelihan",
    slug: "pasca-penyembelihan",
    description: "Penanganan daging, distribusi, dan kebersihan lokasi.",
    topics: ["Penanganan karkas", "Pengemasan", "Distribusi daging", "Pengelolaan limbah"],
    color: "from-accent to-gold-light",
  },
  {
    icon: HeartHandshake,
    title: "Kesejahteraan Hewan",
    slug: "kesejahteraan-hewan",
    description: "Prinsip berihsan dan perlakuan baik pada hewan.",
    topics: ["Prinsip berihsan", "Handling hewan", "Mengurangi stres", "Do & Don'ts"],
    color: "from-earth to-earth-light",
  },
];

export const EducationSection = () => {
  return (
    <section id="edukasi" className="py-20 lg:py-28 bg-background pattern-islamic">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Seputar <span className="gradient-text">Qurban</span>
          </h2>
          <div className="section-divider mb-6" />
        </div>

        {/* Education Topics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {educationTopics.map((topic, index) => (
            <Link
              key={topic.title}
              to={`/edukasi/${topic.slug}`}
              className="group block"
            >
              <Card
                variant="elevated"
                className="h-full cursor-pointer overflow-hidden relative border-transparent hover:border-accent/30"
              >
                {/* Decorative gradient top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${topic.color}`} />

                <CardHeader className="pb-3 pt-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <topic.icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{topic.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{topic.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2.5 mb-5">
                    {topic.topics.map((item) => (
                      <li key={item} className="text-xs text-muted-foreground flex items-center gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${topic.color} shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    Pelajari
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Butuh penjelasan lebih lanjut atau ada pertanyaan spesifik?
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="https://wa.me/6281234567890?text=Halo%20Kawan%20Qurban%2C%20saya%20ingin%20bertanya%20tentang%20materi%20edukasi" target="_blank" rel="noopener noreferrer">
              Tanya Langsung via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
