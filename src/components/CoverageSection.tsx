import { MapPin, CheckCircle2 } from "lucide-react";

const regions = [
  {
    name: "Jawa Tengah",
    areas: ["Semarang", "Solo", "Pekalongan", "Tegal", "Magelang", "Purwokerto"],
  },
  {
    name: "Jawa Barat",
    areas: ["Bandung", "Cirebon", "Tasikmalaya", "Sukabumi", "Bogor", "Bekasi"],
  },
  {
    name: "Jawa Timur",
    areas: ["Surabaya", "Malang", "Kediri", "Jember", "Madiun", "Blitar"],
  },
  {
    name: "DKI Jakarta",
    areas: ["Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat", "Jakarta Timur", "Jakarta Utara"],
  },
  {
    name: "DIY",
    areas: ["Yogyakarta", "Sleman", "Bantul", "Gunung Kidul", "Kulon Progo"],
  },
  {
    name: "Bali",
    areas: ["Denpasar", "Badung", "Gianyar", "Tabanan", "Buleleng"],
  },
];

export const CoverageSection = () => {
  return (
    <section id="wilayah" className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Jangkauan Layanan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Wilayah <span className="gradient-text">Layanan</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Layanan Kawan Qurban menjangkau seluruh wilayah Jawa dan Bali untuk kebutuhan
            edukasi, konsultasi, rekomendasi, serta program kemitraan.
          </p>
        </div>

        {/* Map Visual Placeholder + Regions */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Visual Map Representation */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-border">
            <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Stylized Map Background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <path
                    d="M50,100 Q100,50 150,80 T250,70 T350,100 T400,80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                  <path
                    d="M0,120 Q80,90 160,110 T320,100 T400,120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                  />
                </svg>
              </div>
              
              <div className="text-center z-10">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Jawa & Bali</h3>
                <p className="text-muted-foreground">Cakupan Layanan Penuh</p>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-xs text-muted-foreground">Provinsi</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-xs text-muted-foreground">Kota/Kabupaten</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-xs text-muted-foreground">Peternak Mitra</div>
              </div>
            </div>
          </div>

          {/* Regions List */}
          <div className="space-y-6">
            {regions.map((region) => (
              <div key={region.name} className="bg-card rounded-2xl p-5 border border-border shadow-sm">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  {region.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {region.areas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground bg-muted/50 inline-block px-6 py-3 rounded-full">
            * Ketersediaan layanan menyesuaikan ketentuan pengiriman di masing-masing area
          </p>
        </div>
      </div>
    </section>
  );
};
