import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageCircle, BookOpen, ShoppingBag, Truck, CheckCircle2 } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/6281234567890?text=Halo%20Kawan%20Qurban%2C%20saya%20ingin%20konsultasi%20tentang%20qurban";
const WHATSAPP_KEMITRAAN = "https://wa.me/6281234567890?text=Halo%20Kawan%20Qurban%2C%20saya%20tertarik%20dengan%20program%20kemitraan";

const services = [
  {
    icon: MessageCircle,
    title: "Konsultasi Gratis",
    description: "Tanya jawab seputar qurban tanpa biaya. Kami siap membantu Anda memahami budget, kesehatan hewan, dan tips aman.",
    features: [
      "Penentuan budget qurban",
      "Cara mengecek kesehatan hewan",
      "Standar kelayakan hewan",
      "Tips aman sebelum DP/transfer",
    ],
    cta: "Mulai Konsultasi",
    link: WHATSAPP_LINK,
    variant: "whatsapp" as const,
    highlight: true,
  },
  {
    icon: ShoppingBag,
    title: "Kemitraan Pre-Order",
    description: "Program pemesanan hewan qurban lebih awal dengan harga lebih terjangkau dan pilihan lebih luas.",
    features: [
      "Booking H-30 sampai H-7",
      "Harga lebih kompetitif",
      "Pilihan hewan lebih luas",
      "Garansi kesehatan hewan",
    ],
    cta: "Info Kemitraan",
    link: WHATSAPP_KEMITRAAN,
    variant: "hero" as const,
    highlight: false,
  },
  {
    icon: Truck,
    title: "Qurban End-to-End",
    description: "Layanan lengkap dari penyediaan hewan hingga pengiriman ke lokasi Anda di hari H.",
    features: [
      "Penyediaan hewan berkualitas",
      "Pengiriman ke lokasi tujuan",
      "Opsional pemotongan",
      "Koordinasi dengan panitia",
    ],
    cta: "Info Layanan",
    link: WHATSAPP_KEMITRAAN,
    variant: "hero" as const,
    highlight: false,
  },
];

export const ServicesSection = () => {
  return (
    <section id="layanan" className="py-20 lg:py-28 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Layanan <span className="gradient-text">Kawan Qurban</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dari konsultasi gratis hingga layanan kemitraan lengkap, kami siap membantu
            Anda menjalani ibadah qurban dengan lebih nyaman dan tertib.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              variant="service"
              className={`relative ${service.highlight ? "ring-2 ring-accent/50" : ""}`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent to-gold-light text-white text-xs font-semibold rounded-full shadow-gold">
                  Gratis!
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.highlight ? "from-accent to-gold-light" : "from-primary to-forest-light"} flex items-center justify-center mb-4`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant={service.variant} size="lg" className="w-full" asChild>
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    {service.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
