import { MessageCircle, Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  layanan: [
    { label: "Konsultasi Gratis", href: "#layanan" },
    { label: "Kemitraan Pre-Order", href: "#layanan" },
    { label: "Qurban End-to-End", href: "#layanan" },
  ],
  edukasi: [
    { label: "Dasar Hukum Qurban", href: "#edukasi" },
    { label: "Pilih Hewan", href: "#edukasi" },
    { label: "Harga & Budgeting", href: "#edukasi" },
    { label: "Persiapan Teknis", href: "#edukasi" },
  ],
  tentang: [
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Nilai & Prinsip", href: "#nilai" },
    { label: "Wilayah Layanan", href: "#wilayah" },
    { label: "Tim & Mitra", href: "#tim" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-gold-light flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Kawan Qurban</span>
                <span className="text-xs text-primary-foreground/60">Edukasi & Layanan</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              Platform edukasi qurban terpercaya. Membantu Anda menjalani ibadah qurban
              dengan lebih jelas, tertib, dan beradab.
            </p>
            <div className="space-y-2">
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +62 812-3456-7890
              </a>
              <a 
                href="mailto:info@kawanqurban.id" 
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@kawanqurban.id
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                Jawa & Bali, Indonesia
              </div>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Edukasi */}
          <div>
            <h4 className="font-semibold mb-4">Edukasi</h4>
            <ul className="space-y-2">
              {footerLinks.edukasi.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tentang */}
          <div>
            <h4 className="font-semibold mb-4">Tentang</h4>
            <ul className="space-y-2">
              {footerLinks.tentang.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <a 
                href="https://noransgp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors"
              >
                noransgp.com
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Kawan Qurban. Dikembangkan oleh Tim noransgp.com
            </p>
            <p className="text-xs text-primary-foreground/40">
              Qurban lebih jelas, tertib, dan beradab.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
