import { Card, CardContent } from "@/components/ui/card";
import { Eye, Shield, Heart, ClipboardList } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Jelas",
    description: "Informasi disampaikan ringkas, mudah dipahami, dan tidak berbelit.",
    color: "from-primary to-forest-light",
  },
  {
    icon: Shield,
    title: "Transparan",
    description: "Tidak melebih-lebihkan data; jika estimasi, kami tulis sebagai estimasi.",
    color: "from-accent to-gold-light",
  },
  {
    icon: Heart,
    title: "Berihsan",
    description: "Mendorong perlakuan yang baik kepada hewan dan praktik yang meminimalkan stres.",
    color: "from-sage-dark to-sage",
  },
  {
    icon: ClipboardList,
    title: "Rapi",
    description: "Mengutamakan sistem, checklist, dan alur kerja yang tertib—agar qurban lebih nyaman.",
    color: "from-earth to-earth-light",
  },
];

export const ValuesSection = () => {
  return (
    <section id="nilai" className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Prinsip Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nilai & <span className="gradient-text">Prinsip</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kami memegang prinsip berikut dalam setiap konten dan layanan yang kami hadirkan.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={value.title}
              variant="value"
              className="group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color}`} />
              
              <CardContent className="pt-8 pb-6 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
