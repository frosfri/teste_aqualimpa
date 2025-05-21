
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Index from "./pages/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import ServicosPage from "./pages/ServicosPage";
import ProdutosPage from "./pages/ProdutosPage";
import ConfiguracoesPage from "./pages/ConfiguracoesPage";
import BoletoAutomaticoPage from "./pages/BoletoAutomaticoPage";
import PerfilPage from "./pages/PerfilPage";
import TermosPage from "./pages/TermosPage";
import PrivacidadePage from "./pages/PrivacidadePage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/configuracoes" element={<ConfiguracoesPage />} />
          <Route path="/boleto-automatico" element={<BoletoAutomaticoPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/termos" element={<TermosPage />} />
          <Route path="/privacidade" element={<PrivacidadePage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
