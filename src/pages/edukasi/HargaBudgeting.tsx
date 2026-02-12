import { EducationPageLayout } from "@/components/EducationPageLayout";
import { Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HargaBudgeting = () => (
  <EducationPageLayout
    icon={<Wallet className="w-7 h-7 text-white" />}
    title="Harga & Budgeting"
    description="Tips menentukan budget dan menghindari penipuan harga."
    color="from-earth to-earth-light"
  >
    <div className="grid lg:grid-cols-2 gap-8">
      <Card variant="elevated">
        <CardHeader><CardTitle>Faktor Penentu Harga</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p><strong>Jenis & Ras:</strong> Sapi limosin/simental lebih mahal dari sapi lokal. Kambing etawa lebih mahal dari kambing kacang.</p>
          <p><strong>Berat Badan:</strong> Semakin berat, semakin mahal. Harga dihitung per kilogram hidup.</p>
          <p><strong>Lokasi:</strong> Harga bervariasi antar daerah. Daerah perkotaan umumnya lebih mahal karena biaya transportasi.</p>
          <p><strong>Waktu Pembelian:</strong> Harga cenderung naik mendekati Idul Adha. Beli 1-2 bulan sebelumnya bisa lebih hemat.</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Strategi Budgeting</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-3 text-muted-foreground">
            <li><strong>Menabung Bertahap:</strong> Sisihkan dana qurban sejak awal tahun (cicilan 12 bulan).</li>
            <li><strong>Patungan Sapi:</strong> Lebih ekonomis per orang dibanding kambing individual.</li>
            <li><strong>Beli Lebih Awal:</strong> Pesan 2-3 bulan sebelum Idul Adha untuk harga lebih stabil.</li>
            <li><strong>Bandingkan Harga:</strong> Survey minimal 3 penyedia sebelum memutuskan.</li>
          </ul>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Perbandingan Opsi</CardTitle></CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted-foreground">
              <thead><tr className="border-b"><th className="text-left py-2 font-semibold text-foreground">Opsi</th><th className="text-left py-2 font-semibold text-foreground">Kisaran Harga</th><th className="text-left py-2 font-semibold text-foreground">Untuk</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="py-2">Kambing Kacang</td><td className="py-2">Rp 2-4 juta</td><td className="py-2">1 orang</td></tr>
                <tr className="border-b"><td className="py-2">Kambing Etawa</td><td className="py-2">Rp 3-6 juta</td><td className="py-2">1 orang</td></tr>
                <tr className="border-b"><td className="py-2">Domba</td><td className="py-2">Rp 2,5-5 juta</td><td className="py-2">1 orang</td></tr>
                <tr className="border-b"><td className="py-2">Sapi Lokal</td><td className="py-2">Rp 18-28 juta</td><td className="py-2">1-7 orang</td></tr>
                <tr><td className="py-2">Sapi Limosin</td><td className="py-2">Rp 25-45 juta</td><td className="py-2">1-7 orang</td></tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Tips Anti Tipu-Tipu</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>🔍 Selalu periksa hewan secara langsung</li>
            <li>📝 Minta kwitansi dan perjanjian tertulis</li>
            <li>📸 Dokumentasi hewan yang dipilih</li>
            <li>🏪 Beli dari penjual/lembaga terpercaya</li>
            <li>⚠️ Waspada harga jauh di bawah pasaran</li>
            <li>👥 Minta rekomendasi dari orang yang berpengalaman</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </EducationPageLayout>
);

export default HargaBudgeting;
