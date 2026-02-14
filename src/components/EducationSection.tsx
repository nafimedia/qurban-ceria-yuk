import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const educationTopics = [
  {
    emoji: "⚖️",
    title: "Dasar Hukum Qurban",
    slug: "dasar-hukum-qurban",
    color: "from-primary to-forest-light",
  },
  {
    emoji: "🐄",
    title: "Pilih Hewan",
    slug: "pilih-hewan",
    color: "from-accent to-gold-light",
  },
  {
    emoji: "💰",
    title: "Harga & Budgeting",
    slug: "harga-budgeting",
    color: "from-earth to-earth-light",
  },
  {
    emoji: "📋",
    title: "Persiapan Teknis",
    slug: "persiapan-teknis",
    color: "from-sage-dark to-sage",
  },
  {
    emoji: "🔪",
    title: "Teknis Penyembelihan",
    slug: "teknis-penyembelihan",
    color: "from-primary to-forest-light",
  },
  {
    emoji: "📦",
    title: "Pasca Penyembelihan",
    slug: "pasca-penyembelihan",
    color: "from-accent to-gold-light",
  },
  {
    emoji: "🤲",
    title: "Kesejahteraan Hewan",
    slug: "kesejahteraan-hewan",
    color: "from-earth to-earth-light",
  },
];

export const EducationSection = () => {
  return (
    <section id="edukasi" className="py-20 lg:py-28 bg-background pattern-islamic">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Seputar <span className="gradient-text">Qurban</span>
          </h2>
          <div className="section-divider mb-6" />
        </div>

        {/* Education Topics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {educationTopics.map((topic) => (
            <Link
              key={topic.title}
              to={`/edukasi/${topic.slug}`}
              className="group block"
            >
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{topic.emoji}</span>
                <h3 className="text-sm font-bold text-foreground mb-3 leading-tight">{topic.title}</h3>
                <span className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  Pelajari
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Butuh penjelasan lebih lanjut atau ada pertanyaan spesifik?
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Kawan%20Qurban%2C%20saya%20ingin%20bertanya%20tentang%20materi%20edukasi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 rounded-xl px-8 text-base font-semibold bg-gradient-to-r from-accent to-gold-light text-white shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
          >
            Tanya Langsung via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
