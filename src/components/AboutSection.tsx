import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MessageCircle, Handshake, Users } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Edukasi Lengkap",
    description: "Konten edukatif tentang hewan qurban, dari dasar hingga teknis pelaksanaan, disusun dengan rujukan tepercaya.",
  },
  {
    icon: MessageCircle,
    title: "Konsultasi Gratis",
    description: "Tanya jawab gratis seputar budget, kesehatan hewan, standar kelayakan, hingga tips aman sebelum DP.",
  },
  {
    icon: Handshake,
    title: "Rekomendasi Terpercaya",
    description: "Layanan rekomendasi tempat pembelian ternak qurban dari peternak yang sudah terkurasi.",
  },
  {
    icon: Users,
    title: "Kemitraan Qurban",
    description: "Program Pre-Order dan Qurban End-to-End untuk kebutuhan yang lebih praktis dan terorganisir.",
  },
];

export const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-muted/30 pattern-islamic">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Apa Itu <span className="gradient-text">Kawan Qurban</span>?
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kawan Qurban adalah platform edukasi yang membahas segala hal tentang hewan qurban—
            mulai dari dasar-dasar qurban, cara memilih hewan yang sehat dan layak, hingga persiapan
            teknis pelaksanaan—disusun dengan rujukan tepercaya dan berbasis ilmiah.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              variant="elevated"
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-forest-light flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-card rounded-3xl border border-border p-8 lg:p-12 shadow-md">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Kawan Qurban dikembangkan oleh{" "}
              <span className="font-semibold text-foreground">Tim noransgp.com</span>, yang terdiri
              dari dosen dan praktisi peternakan, dengan tujuan menghadirkan pengalaman qurban yang
              lebih jelas, tertib, dan beradab.
            </p>
            <p className="text-base text-muted-foreground">
              Kami hadir untuk membantu <strong>Shohibul Qurban</strong>, panitia masjid, komunitas,
              dan siapa pun yang ingin qurban dengan lebih yakin dan nyaman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
