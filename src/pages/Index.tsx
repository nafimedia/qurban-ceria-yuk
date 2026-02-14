import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { EducationSection } from "@/components/EducationSection";
import { PhotoGallerySection } from "@/components/PhotoGallerySection";
import { CoverageSection } from "@/components/CoverageSection";
import { TeamSection } from "@/components/TeamSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PhotoGallerySection />
        <EducationSection />
        <AboutSection />
        <ValuesSection />
        <ServicesSection />
        <CoverageSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
