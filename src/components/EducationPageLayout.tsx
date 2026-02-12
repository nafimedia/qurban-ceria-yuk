import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface EducationPageLayoutProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  children: React.ReactNode;
}

export const EducationPageLayout = ({ icon, title, description, color, children }: EducationPageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        {/* Hero Banner */}
        <div className={`bg-gradient-to-br ${color} py-16 lg:py-24`}>
          <div className="section-container">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-6" onClick={() => navigate("/#edukasi")}>
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Edukasi
            </Button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                {icon}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
            </div>
            <p className="text-lg text-white/80 max-w-2xl">{description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="section-container py-12 lg:py-20">
          {children}
        </div>

        {/* CTA */}
        <div className="bg-muted py-12">
          <div className="section-container text-center">
            <p className="text-muted-foreground mb-4">Masih ada pertanyaan tentang {title.toLowerCase()}?</p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/6281234567890?text=Halo%20Kawan%20Qurban%2C%20saya%20ingin%20bertanya%20tentang%20materi%20edukasi" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Tanya via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
