import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Tractor, ShieldCheck } from "lucide-react";

const teamHighlights = [
  {
    icon: GraduationCap,
    title: "Dosen & Akademisi",
    description: "Tim ahli dari latar belakang peternakan dan ilmu hewan",
  },
  {
    icon: Users,
    title: "Praktisi Lapangan",
    description: "Pengalaman langsung dalam pendampingan dan pelaksanaan qurban",
  },
  {
    icon: Tractor,
    title: "100+ Peternak Mitra",
    description: "Jaringan peternak rakyat dan modern di seluruh Jawa-Bali",
  },
  {
    icon: ShieldCheck,
    title: "Standar Kualitas",
    description: "Kurasi ketat untuk kesehatan, kelayakan, dan perlakuan hewan",
  },
];

export const TeamSection = () => {
  return (
    <section id="tim" className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Di Balik Layar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tim & <span className="gradient-text">Mitra</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kawan Qurban dikelola oleh Tim noransgp.com yang terdiri dari dosen dan praktisi
            peternakan berpengalaman dalam edukasi dan praktik lapangan terkait ternak.
          </p>
        </div>

        {/* Team Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamHighlights.map((item, index) => (
            <Card key={item.title} variant="feature" className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Info */}
        <div className="bg-gradient-to-br from-primary to-forest-dark rounded-3xl p-8 lg:p-12 text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Jaringan Peternak Terpercaya
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  Untuk memastikan akses hewan qurban yang lebih luas dan berkualitas, kami bermitra
                  dengan jaringan lebih dari 100 peternak di wilayah Jawa–Bali, mencakup peternak
                  rakyat maupun peternakan modern.
                </p>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Jaringan ini memungkinkan kami melakukan kurasi dan penyediaan hewan melalui skema
                  pre-order dan layanan end-to-end, dengan tetap mengutamakan standar kesehatan,
                  kelayakan, dan perlakuan yang baik.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-sm text-primary-foreground/80">Peternak Mitra</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold mb-2">6</div>
                  <div className="text-sm text-primary-foreground/80">Provinsi</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold mb-2">Pre-Order</div>
                  <div className="text-sm text-primary-foreground/80">Program</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold mb-2">End-to-End</div>
                  <div className="text-sm text-primary-foreground/80">Layanan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
