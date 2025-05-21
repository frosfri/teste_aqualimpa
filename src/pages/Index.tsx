
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import DashboardIcon from '@/components/DashboardIcon';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleLogin = () => {
    toast({
      title: "Seja bem-vindo!",
      description: "Use seus dados para acessar o sistema.",
    });
    navigate('/login');
  };
  
  const handleCriarConta = () => {
    navigate('/cadastro');
  };
  
  const handleConhecaProdutos = () => {
    navigate('/produtos');
    toast({
      title: "Catálogo de Produtos",
      description: "Conheça nossa linha completa de produtos.",
    });
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Aqua Limpa</h1>
        
        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-6 rounded-lg shadow-md mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-2xl font-bold text-white mb-2">Bem-vindo ao Aqua Limpa</h2>
              <p className="text-white mb-4">
                Gerencie seus serviços, configure pagamentos e muito mais em um único lugar.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-slate-100"
                onClick={handleConhecaProdutos}
              >
                Conheça Nossos Produtos
              </Button>
            </div>
            <div className="w-full md:w-1/3">
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-lg font-medium mb-2">Acesso Rápido</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Faça login para acessar todos os recursos
                    </p>
                    <Button 
                      onClick={handleLogin}
                      className="w-full mb-2"
                    >
                      Fazer Login
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleCriarConta}
                    >
                      Criar Conta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <DashboardIcon 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>} 
            title="Boleto Automático" 
            to="/boleto-automatico" 
          />
          <DashboardIcon 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>} 
            title="Perfil" 
            to="/perfil" 
          />
          <DashboardIcon 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>} 
            title="Serviços" 
            to="/servicos" 
          />
          <DashboardIcon 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>} 
            title="Configurações" 
            to="/configuracoes" 
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Nossos Produtos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-40 bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Sistema de Gestão</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Solução completa para gerenciamento de cobranças e relacionamento com o cliente.
                </p>
                <Button variant="outline" className="w-full" onClick={() => navigate('/produtos')}>Saiba mais</Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-40 bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Boleto Automático</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Emissão automática de boletos e gestão de pagamentos com integração bancária.
                </p>
                <Button variant="outline" className="w-full" onClick={() => navigate('/boleto-automatico')}>Saiba mais</Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-40 bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" y1="22" x2="4" y2="15"></line>
                </svg>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Relatórios Avançados</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Análise de dados e relatórios personalizados para tomada de decisões estratégicas.
                </p>
                <Button variant="outline" className="w-full" onClick={() => navigate('/produtos')}>Saiba mais</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
