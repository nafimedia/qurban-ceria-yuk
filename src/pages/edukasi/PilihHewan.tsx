import { EducationPageLayout } from "@/components/EducationPageLayout";
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PilihHewan = () => (
  <EducationPageLayout
    icon={<Search className="w-7 h-7 text-white" />}
    title="Pilih Hewan"
    description="Panduan lengkap memilih hewan qurban yang sehat dan layak."
    color="from-accent to-gold-light"
  >
    <div className="grid lg:grid-cols-2 gap-8">
      <Card variant="elevated">
        <CardHeader><CardTitle>Jenis Hewan Qurban</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p><strong>Sapi/Kerbau:</strong> Untuk 1-7 orang. Berat ideal 250-400 kg. Umur minimal 2 tahun ditandai pergantian gigi seri.</p>
          <p><strong>Kambing:</strong> Untuk 1 orang. Berat ideal 25-40 kg. Umur minimal 1 tahun (kacang) atau 2 tahun (etawa).</p>
          <p><strong>Domba:</strong> Untuk 1 orang. Berat ideal 30-45 kg. Umur minimal 6 bulan dengan syarat sudah berganti gigi.</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Ciri Hewan Sehat</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Mata cerah dan bersih, tidak berair</li>
            <li>✅ Bulu mengkilap dan tidak rontok berlebihan</li>
            <li>✅ Aktif bergerak, nafsu makan baik</li>
            <li>✅ Hidung bersih, tidak ada lendir berlebihan</li>
            <li>✅ Berdiri tegap, kaki kokoh dan simetris</li>
            <li>✅ Kotoran normal, tidak diare</li>
          </ul>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Kondisi Tidak Layak</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>❌ Buta sebelah atau kedua mata</li>
            <li>❌ Pincang yang jelas terlihat</li>
            <li>❌ Kurus kering (tulang rusuk tampak jelas)</li>
            <li>❌ Sakit yang parah, luka terbuka</li>
            <li>❌ Telinga terpotong lebih dari separuh</li>
            <li>❌ Tanduk patah sampai ke pangkal</li>
          </ul>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Checklist Sebelum DP</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>☐ Periksa fisik hewan secara langsung</li>
            <li>☐ Minta surat keterangan kesehatan hewan</li>
            <li>☐ Pastikan umur sesuai syarat</li>
            <li>☐ Tanyakan riwayat vaksinasi</li>
            <li>☐ Sepakati harga dan waktu pengiriman tertulis</li>
            <li>☐ Dokumentasi foto/video hewan</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </EducationPageLayout>
);

export default PilihHewan;
