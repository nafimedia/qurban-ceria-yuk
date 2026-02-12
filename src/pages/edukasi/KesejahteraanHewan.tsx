import { EducationPageLayout } from "@/components/EducationPageLayout";
import { HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KesejahteraanHewan = () => (
  <EducationPageLayout
    icon={<HeartHandshake className="w-7 h-7 text-white" />}
    title="Kesejahteraan Hewan"
    description="Prinsip berihsan dan perlakuan baik pada hewan."
    color="from-earth to-earth-light"
  >
    <div className="grid lg:grid-cols-2 gap-8">
      <Card variant="elevated">
        <CardHeader><CardTitle>Prinsip Berihsan</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>Rasulullah SAW bersabda: <em>"Sesungguhnya Allah mewajibkan ihsan (berbuat baik) atas segala sesuatu. Maka jika kalian menyembelih, berbuat ihsanlah dalam menyembelih."</em> (HR. Muslim)</p>
          <p>Ihsan dalam qurban berarti memperlakukan hewan dengan penuh kasih sayang dari awal pemeliharaan hingga penyembelihan.</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Handling Hewan</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>🤲 Pegang dengan lembut, tidak kasar atau menyeret</li>
            <li>🚶 Giring perlahan, jangan dipukul atau ditendang</li>
            <li>🏠 Sediakan tempat teduh dan nyaman selama menunggu</li>
            <li>💧 Beri makan dan minum secukupnya</li>
            <li>👁️ Jangan sembelih di hadapan hewan lain</li>
          </ul>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Mengurangi Stres Hewan</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>Hindari kebisingan berlebih di sekitar hewan. Jangan mengikat terlalu kencang atau dalam waktu lama.</p>
          <p>Biarkan hewan istirahat setelah perjalanan sebelum disembelih. Pisahkan dari hewan yang sudah disembelih.</p>
          <p>Gunakan pendekatan yang tenang dan sabar. Hewan yang stres menghasilkan kualitas daging yang lebih rendah.</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader><CardTitle>Do & Don'ts</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-primary mb-2">✅ Do</h4>
              <ul className="space-y-1">
                <li>• Tajamkan pisau sebelumnya</li>
                <li>• Beri minum sebelum disembelih</li>
                <li>• Tenangkan hewan</li>
                <li>• Potong dengan cepat</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-destructive mb-2">❌ Don't</h4>
              <ul className="space-y-1">
                <li>• Mengasah pisau di depan hewan</li>
                <li>• Menyiksa atau memukul</li>
                <li>• Menyeret dengan paksa</li>
                <li>• Menguliti saat masih hidup</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </EducationPageLayout>
);

export default KesejahteraanHewan;
