import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DasarHukumQurban from "./pages/edukasi/DasarHukumQurban";
import PilihHewan from "./pages/edukasi/PilihHewan";
import HargaBudgeting from "./pages/edukasi/HargaBudgeting";
import PersiapanTeknis from "./pages/edukasi/PersiapanTeknis";
import TeknisPenyembelihan from "./pages/edukasi/TeknisPenyembelihan";
import PascaPenyembelihan from "./pages/edukasi/PascaPenyembelihan";
import KesejahteraanHewan from "./pages/edukasi/KesejahteraanHewan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/edukasi/dasar-hukum-qurban" element={<DasarHukumQurban />} />
          <Route path="/edukasi/pilih-hewan" element={<PilihHewan />} />
          <Route path="/edukasi/harga-budgeting" element={<HargaBudgeting />} />
          <Route path="/edukasi/persiapan-teknis" element={<PersiapanTeknis />} />
          <Route path="/edukasi/teknis-penyembelihan" element={<TeknisPenyembelihan />} />
          <Route path="/edukasi/pasca-penyembelihan" element={<PascaPenyembelihan />} />
          <Route path="/edukasi/kesejahteraan-hewan" element={<KesejahteraanHewan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
