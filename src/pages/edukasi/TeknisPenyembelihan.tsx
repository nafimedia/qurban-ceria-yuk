import { EducationPageLayout } from "@/components/EducationPageLayout";
import { Scissors } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TeknisPenyembelihan = () => (
  <EducationPageLayout
    icon={<Scissors className="w-7 h-7 text-white" />}
    title="Teknis Penyembelihan"
    description="Panduan prinsip dan prosedur penyembelihan yang benar."
    color="from-primary to-forest-light"
  >
    <div className="grid lg:grid-cols-2 gap-8">
      <Card variant="elevated">
        <CardHeader><CardTitle>Prinsip Dasar</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p><strong>Bismillah, Allahu Akbar:</strong> Wajib membaca basmalah saat menyembelih. Menghadapkan hewan ke arah kiblat.</p>
          <p><strong>Ihsan (Kebaikan):</strong> Perlakukan hewan dengan lembut. Tajamkan pisau sebelumnya. Jangan memperlihatkan pisau ke hewan.</p>
          <p><strong>Kecepatan:</strong> Sembelih dengan gerakan cepat dan tegas untuk meminimalkan rasa sakit.</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Persiapan Alat</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>🔪 Pisau tajam (bukan gergaji atau pisau tumpul)</li>
            <li>🪢 Tali pengikat yang kuat dan aman</li>
            <li>💧 Air bersih dalam jumlah cukup</li>
            <li>🧤 Sarung tangan dan perlengkapan kebersihan</li>
            <li>📐 Alas penyembelihan yang bersih</li>
            <li>🪣 Wadah penampung darah</li>
          </ul>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Prosedur Step-by-Step</CardTitle></CardHeader>
        <CardContent>
          <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
            <li>Baringkan hewan di sisi kiri, menghadap kiblat</li>
            <li>Tenangkan hewan, jangan biarkan melihat pisau</li>
            <li>Baca <em>Bismillahi Allahu Akbar</em></li>
            <li>Potong dengan cepat: saluran napas (hulqum), saluran makanan (mari'), dan dua urat nadi (wadajain)</li>
            <li>Biarkan darah mengalir sempurna</li>
            <li>Tunggu hewan benar-benar tidak bergerak sebelum proses selanjutnya</li>
          </ol>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Kesalahan Umum</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>❌ Menggunakan pisau tumpul</li>
            <li>❌ Tidak membaca basmalah</li>
            <li>❌ Memotong kepala hingga putus</li>
            <li>❌ Menguliti sebelum hewan benar-benar mati</li>
            <li>❌ Menyembelih di depan hewan lain</li>
            <li>❌ Tidak menghadapkan ke arah kiblat</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </EducationPageLayout>
);

export default TeknisPenyembelihan;
