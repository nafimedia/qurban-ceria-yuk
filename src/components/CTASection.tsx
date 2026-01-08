import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/6281234567890?text=Halo%20Kawan%20Qurban%2C%20saya%20ingin%20konsultasi%20tentang%20qurban";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-muted/50 to-muted pattern-islamic">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Arabic Quote */}
          <div className="mb-8">
            <p className="font-arabic text-3xl lg:text-4xl text-primary mb-4">
              وَلِكُلِّ أُمَّةٍ جَعَلْنَا مَنسَكًا
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Dan bagi setiap umat, Kami berikan syariat qurban..." (QS. Al-Hajj: 34)
            </p>
          </div>

          {/* Main CTA */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Siap Qurban dengan Lebih <span className="gradient-text">Yakin</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Konsultasi gratis sekarang dan dapatkan panduan lengkap untuk qurban Anda.
            Tim kami siap membantu dari pemilihan hewan hingga pelaksanaan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis via WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#layanan">
                Lihat Layanan Lainnya
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border shadow-sm">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Tim kami biasanya merespons dalam <strong className="text-foreground">15 menit</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
