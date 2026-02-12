import { EducationPageLayout } from "@/components/EducationPageLayout";
import { ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PersiapanTeknis = () => (
  <EducationPageLayout
    icon={<ClipboardCheck className="w-7 h-7 text-white" />}
    title="Persiapan Teknis"
    description="Checklist lengkap dari H-30 sampai Hari H."
    color="from-sage-dark to-sage"
  >
    <div className="space-y-8">
      <Card variant="elevated">
        <CardHeader><CardTitle>Timeline Persiapan</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-6 text-muted-foreground">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground">H-30: Perencanaan</h4>
              <ul className="mt-2 space-y-1"><li>• Bentuk panitia & bagi tugas</li><li>• Survey hewan & tentukan budget</li><li>• Siapkan lokasi penyembelihan</li></ul>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h4 className="font-semibold text-foreground">H-14: Persiapan</h4>
              <ul className="mt-2 space-y-1"><li>• Bayar/DP hewan qurban</li><li>• Siapkan peralatan penyembelihan</li><li>• Koordinasi dengan jagal berpengalaman</li></ul>
            </div>
            <div className="border-l-4 border-earth pl-4">
              <h4 className="font-semibold text-foreground">H-3: Final Check</h4>
              <ul className="mt-2 space-y-1"><li>• Periksa kondisi hewan terakhir kali</li><li>• Siapkan kandang sementara</li><li>• Briefing tim pelaksana</li></ul>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground">Hari H: Pelaksanaan</h4>
              <ul className="mt-2 space-y-1"><li>• Pastikan hewan tenang sebelum disembelih</li><li>• Laksanakan sesuai prosedur syar'i</li><li>• Distribusi daging sesuai rencana</li></ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card variant="elevated">
          <CardHeader><CardTitle>Persiapan Panitia</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>Minimal terdiri dari: koordinator, tim penyembelihan, tim pengulitan & pemotongan, tim pengemasan, dan tim distribusi.</p>
            <p>Pastikan ada jagal berpengalaman yang memahami tata cara syar'i.</p>
          </CardContent>
        </Card>
        <Card variant="elevated">
          <CardHeader><CardTitle>Kandang Sementara</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>Siapkan area teduh dengan pagar yang kokoh. Sediakan air minum dan pakan cukup.</p>
            <p>Jaga kebersihan kandang dan hindari kebisingan berlebih agar hewan tidak stres.</p>
          </CardContent>
        </Card>
        <Card variant="elevated">
          <CardHeader><CardTitle>Manajemen Logistik</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>Siapkan: pisau tajam, tali, alas plastik, plastik kemasan, timbangan, ember, air bersih.</p>
            <p>Koordinasi pengangkutan hewan dan distribusi daging agar berjalan efisien.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </EducationPageLayout>
);

export default PersiapanTeknis;
