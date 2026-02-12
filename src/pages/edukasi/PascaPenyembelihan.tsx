import { EducationPageLayout } from "@/components/EducationPageLayout";
import { PackageCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PascaPenyembelihan = () => (
  <EducationPageLayout
    icon={<PackageCheck className="w-7 h-7 text-white" />}
    title="Pasca Penyembelihan"
    description="Penanganan daging, distribusi, dan kebersihan lokasi."
    color="from-accent to-gold-light"
  >
    <div className="grid lg:grid-cols-2 gap-8">
      <Card variant="elevated">
        <CardHeader><CardTitle>Penanganan Karkas</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>Setelah hewan dipastikan mati, lakukan pengulitan dengan hati-hati. Gantung karkas untuk memudahkan proses.</p>
          <p>Pisahkan jeroan dan bersihkan segera. Cuci karkas dengan air bersih sebelum pemotongan daging.</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Pengemasan</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>📦 Gunakan kantong plastik food-grade</li>
            <li>⚖️ Timbang setiap paket secara merata</li>
            <li>🏷️ Beri label jenis daging (has, paha, iga, dll)</li>
            <li>❄️ Simpan di tempat sejuk jika distribusi memakan waktu</li>
            <li>🧊 Gunakan cooler box untuk pengiriman jarak jauh</li>
          </ul>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Distribusi Daging</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>Pembagian yang umum: <strong>⅓ untuk shohibul qurban, ⅓ untuk kerabat/tetangga, ⅓ untuk fakir miskin.</strong></p>
          <p>Siapkan daftar penerima sebelum hari H. Prioritaskan yang kurang mampu dan janda/yatim di sekitar.</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Pengelolaan Limbah</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>🧹 Bersihkan lokasi segera setelah selesai</li>
            <li>🕳️ Kubur limbah darah dan sisa yang tidak terpakai</li>
            <li>♻️ Kulit bisa dimanfaatkan atau disumbangkan</li>
            <li>💧 Siram area dengan air dan disinfektan</li>
            <li>🚮 Kumpulkan sampah plastik dan buang ke TPA</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </EducationPageLayout>
);

export default PascaPenyembelihan;
