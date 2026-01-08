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

const educationTopics = [
  {
    icon: Scale,
    title: "Dasar Hukum Qurban",
    description: "Pengertian, hukum, waktu pelaksanaan, syarat hewan, dan FAQ untuk pemula.",
    topics: ["Pengertian & tujuan qurban", "Hukum dan waktu pelaksanaan", "Syarat hewan & larangan cacat", "Patungan qurban"],
    color: "from-primary to-forest-light",
  },
  {
    icon: Search,
    title: "Pilih Hewan",
    description: "Panduan lengkap memilih hewan qurban yang sehat dan layak.",
    topics: ["Jenis hewan qurban", "Ciri hewan sehat", "Kondisi tidak layak", "Checklist sebelum DP"],
    color: "from-accent to-gold-light",
  },
  {
    icon: Wallet,
    title: "Harga & Budgeting",
    description: "Tips menentukan budget dan menghindari penipuan harga.",
    topics: ["Faktor penentu harga", "Strategi budgeting", "Perbandingan opsi", "Tips anti tipu-tipu"],
    color: "from-earth to-earth-light",
  },
  {
    icon: ClipboardCheck,
    title: "Persiapan Teknis",
    description: "Checklist lengkap dari H-30 sampai Hari H.",
    topics: ["Timeline persiapan", "Persiapan panitia", "Kandang sementara", "Manajemen logistik"],
    color: "from-sage-dark to-sage",
  },
  {
    icon: Scissors,
    title: "Teknis Penyembelihan",
    description: "Panduan prinsip dan prosedur penyembelihan yang benar.",
    topics: ["Prinsip dasar", "Persiapan alat", "Prosedur step-by-step", "Kesalahan umum"],
    color: "from-primary to-forest-light",
  },
  {
    icon: PackageCheck,
    title: "Pasca Penyembelihan",
    description: "Penanganan daging, distribusi, dan kebersihan lokasi.",
    topics: ["Penanganan karkas", "Pengemasan", "Distribusi daging", "Pengelolaan limbah"],
    color: "from-accent to-gold-light",
  },
  {
    icon: HeartHandshake,
    title: "Kesejahteraan Hewan",
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
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Pusat Edukasi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Materi <span className="gradient-text">Edukasi Qurban</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pelajari seluruh aspek qurban dari A sampai Z. Konten disusun dengan rujukan
            tepercaya dan berbasis ilmiah oleh tim dosen dan praktisi peternakan.
          </p>
        </div>

        {/* Education Topics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {educationTopics.map((topic, index) => (
            <Card
              key={topic.title}
              variant="elevated"
              className="group cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <topic.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{topic.title}</CardTitle>
                <CardDescription className="text-sm">{topic.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-4">
                  {topic.topics.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="w-full group-hover:bg-muted transition-colors">
                  Pelajari
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
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
