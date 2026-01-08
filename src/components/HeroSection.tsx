import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-qurban.jpg";

const WHATSAPP_LINK = "https://wa.me/6281234567890?text=Halo%20Kawan%20Qurban%2C%20saya%20ingin%20konsultasi%20tentang%20qurban";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peternakan dengan sapi dan kambing sehat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary">Platform Edukasi Qurban Terpercaya</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Qurban Lebih{" "}
            <span className="gradient-text">Jelas, Tertib,</span>
            <br />
            dan <span className="gradient-text">Beradab</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Edukasi lengkap tentang hewan qurban, konsultasi gratis, dan layanan kemitraan
            untuk Shohibul Qurban, panitia masjid, dan komunitas di seluruh Jawa-Bali.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#edukasi">
                <BookOpen className="w-5 h-5" />
                Pelajari Edukasi
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Peternak<br />Mitra</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-primary">Jawa-Bali</div>
                <div className="text-sm text-muted-foreground">Wilayah<br />Layanan</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-primary">Gratis</div>
                <div className="text-sm text-muted-foreground">Konsultasi<br />Qurban</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
