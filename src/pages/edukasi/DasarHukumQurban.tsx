import { EducationPageLayout } from "@/components/EducationPageLayout";
import { Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DasarHukumQurban = () => (
  <EducationPageLayout
    icon={<Scale className="w-7 h-7 text-white" />}
    title="Dasar Hukum Qurban"
    description="Pengertian, hukum, waktu pelaksanaan, syarat hewan, dan FAQ untuk pemula."
    color="from-primary to-forest-light"
  >
    <div className="grid lg:grid-cols-2 gap-8">
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Pengertian & Tujuan Qurban</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>Qurban (udhiyah) adalah menyembelih hewan ternak pada hari raya Idul Adha dan hari-hari Tasyrik sebagai bentuk ibadah mendekatkan diri kepada Allah SWT.</p>
          <p>Tujuan utama ibadah qurban adalah menumbuhkan ketakwaan, kepedulian sosial, dan meneladani ketaatan Nabi Ibrahim AS.</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Hukum & Waktu Pelaksanaan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>Hukum qurban menurut mayoritas ulama adalah <strong>sunnah muakkadah</strong> (sangat dianjurkan) bagi yang mampu. Menurut Imam Abu Hanifah, hukumnya wajib bagi yang mampu.</p>
          <p>Waktu pelaksanaan dimulai setelah shalat Idul Adha (10 Dzulhijjah) hingga terbenam matahari pada 13 Dzulhijjah (hari Tasyrik terakhir).</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Syarat Hewan Qurban</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Hewan ternak: unta, sapi/kerbau, kambing/domba</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Cukup umur: unta 5 tahun, sapi 2 tahun, kambing 1 tahun, domba 6 bulan</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Sehat, tidak cacat, tidak kurus, tidak pincang berat</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Tidak buta, tidak patah tanduk sampai pangkal, tidak putus telinganya</li>
          </ul>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Patungan Qurban</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>Sapi atau kerbau boleh untuk 7 orang, sedangkan kambing dan domba hanya untuk 1 orang/keluarga.</p>
          <p>Pastikan setiap peserta patungan berniat qurban dan sepakat dengan pembagian biaya sejak awal.</p>
        </CardContent>
      </Card>
    </div>

    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Pertanyaan Umum</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="1">
          <AccordionTrigger>Apakah anak kecil wajib berqurban?</AccordionTrigger>
          <AccordionContent>Anak kecil tidak wajib berqurban. Qurban dianjurkan bagi Muslim yang sudah baligh, berakal, dan mampu secara finansial.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>Bolehkah qurban untuk orang yang sudah meninggal?</AccordionTrigger>
          <AccordionContent>Mayoritas ulama membolehkan qurban atas nama orang yang sudah meninggal, terutama jika ia berwasiat atau diniatkan pahala untuknya.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>Apa beda qurban dan aqiqah?</AccordionTrigger>
          <AccordionContent>Qurban dilakukan pada Idul Adha sebagai ibadah tahunan, sedangkan aqiqah dilakukan untuk menyambut kelahiran anak. Keduanya melibatkan penyembelihan hewan tetapi dengan niat dan waktu yang berbeda.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>

    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Sumber & Literatur</h2>
      <Card variant="elevated">
        <CardContent className="pt-6">
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">1.</span>
              <span><strong>Al-Qur'an Surat Al-Hajj (22): 34–37</strong> — Ayat tentang perintah berkurban dan ketakwaan sebagai tujuan utama ibadah qurban.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">2.</span>
              <span><strong>Al-Qur'an Surat Al-Kautsar (108): 1–3</strong> — Perintah shalat dan menyembelih (nahr) sebagai bentuk syukur kepada Allah SWT.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">3.</span>
              <span><strong>Hadits Riwayat Muslim (No. 1963)</strong> — Dari Jabir bin Abdillah tentang tata cara qurban Rasulullah ﷺ pada hari Idul Adha.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">4.</span>
              <span><strong>Fiqh Sunnah — Sayyid Sabiq</strong> — Bab tentang hukum, syarat, dan ketentuan hewan qurban secara komprehensif.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">5.</span>
              <span><strong>Al-Fiqh Al-Islami wa Adillatuhu — Wahbah Az-Zuhaili</strong> — Pembahasan lengkap tentang khilafiyah hukum qurban menurut empat madzhab.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">6.</span>
              <span><strong>Fatwa MUI No. 12 Tahun 2009</strong> — Tentang standar penyembelihan halal dan ketentuan hewan qurban di Indonesia.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </EducationPageLayout>
);

export default DasarHukumQurban;
