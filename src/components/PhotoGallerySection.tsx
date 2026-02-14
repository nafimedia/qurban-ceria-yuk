import gallerySapi1 from "@/assets/gallery-sapi-1.jpg";
import galleryKambing1 from "@/assets/gallery-kambing-1.jpg";
import galleryPasar1 from "@/assets/gallery-pasar-1.jpg";
import gallerySapi2 from "@/assets/gallery-sapi-2.jpg";
import galleryDomba1 from "@/assets/gallery-domba-1.jpg";
import galleryKegiatan1 from "@/assets/gallery-kegiatan-1.jpg";

const photos = [
  { src: gallerySapi1, alt: "Sapi-sapi qurban di kandang peternakan mitra", label: "Kandang Sapi" },
  { src: galleryKambing1, alt: "Sapi sedang makan rumput di peternakan", label: "Sapi Makan" },
  { src: galleryPasar1, alt: "Sapi-sapi di dalam kandang peternakan", label: "Peternakan Mitra" },
  { src: gallerySapi2, alt: "Sapi-sapi beristirahat di kandang", label: "Sapi Istirahat" },
  { src: galleryDomba1, alt: "Peternak mengecek kondisi sapi", label: "Perawatan Hewan" },
  { src: galleryKegiatan1, alt: "Kunjungan ke peternakan mitra", label: "Kunjungan Peternakan" },
];

export const PhotoGallerySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Galeri
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Dokumentasi <span className="gradient-text">Hewan & Kegiatan</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lihat langsung kondisi hewan qurban dan kegiatan kami bersama peternak mitra.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {photos.map((photo) => (
            <div
              key={photo.label}
              className="group relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-semibold text-white">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
