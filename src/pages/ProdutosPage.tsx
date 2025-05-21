
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';

const produtos = [
  {
    id: 'produto1',
    nome: 'Sistema de Gestão',
    descricao: 'Sistema completo de gerenciamento de clientes, cobrança e relacionamento.',
    caracteristicas: [
      'Cadastro completo de clientes',
      'Controle de pagamentos',
      'Dashboard administrativo',
      'Relatórios customizados',
    ],
    imagem: '/placeholder.svg'
  },
  {
    id: 'produto2',
    nome: 'Boleto Automático',
    descricao: 'Plataforma de débito automático para pagamentos recorrentes com integração bancária.',
    caracteristicas: [
      'Integração com bancos',
      'Sistema anti-fraude',
      'Notificações automáticas',
      'Painel de controle',
    ],
    imagem: '/placeholder.svg'
  },
  {
    id: 'produto3',
    nome: 'Relatórios Avançados',
    descricao: 'Solução completa para análise de dados e geração de relatórios gerenciais.',
    caracteristicas: [
      'Análise de performance',
      'Exportação em diversos formatos',
      'Visualização de gráficos',
      'Métricas personalizadas',
    ],
    imagem: '/placeholder.svg'
  },
  {
    id: 'produto4',
    nome: 'Aplicativo Mobile',
    descricao: 'Acompanhe seus serviços, pagamentos e receba notificações em tempo real.',
    caracteristicas: [
      'Disponível para iOS e Android',
      'Notificações em tempo real',
      'Acesso a faturas e pagamentos',
      'Dashboard personalizado',
    ],
    imagem: '/placeholder.svg'
  },
  {
    id: 'produto5',
    nome: 'API de Integração',
    descricao: 'Integre seus sistemas existentes com nossa plataforma através de APIs seguras.',
    caracteristicas: [
      'Documentação completa',
      'Suporte técnico especializado',
      'Autenticação OAuth 2.0',
      'Webhooks personalizáveis',
    ],
    imagem: '/placeholder.svg'
  },
];

const ProdutosPage = () => {
  const { toast } = useToast();
  
  const handleSolicitarDemonstracao = (produtoNome: string) => {
    toast({
      title: "Solicitação recebida!",
      description: `Em breve entraremos em contato sobre o produto: ${produtoNome}`,
    });
  };
  
  const handleSaibaMais = (produtoId: string) => {
    console.log(`Detalhes solicitados para: ${produtoId}`);
    // Implementação futura: redirecionar para página detalhada do produto
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Nossos Produtos</h1>

        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white mb-2">Soluções completas para sua empresa</h2>
            <p className="text-white mb-4">
              Conheça nossa linha de produtos desenvolvidos para otimizar seus processos financeiros e de cobrança.
            </p>
          </div>
        </div>

        <Tabs defaultValue="produto1" className="mb-12">
          <div className="flex justify-center mb-6 overflow-x-auto">
            <TabsList>
              {produtos.map(produto => (
                <TabsTrigger key={produto.id} value={produto.id}>
                  {produto.nome}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {produtos.map(produto => (
            <TabsContent key={produto.id} value={produto.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-muted rounded-lg flex items-center justify-center p-6">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="max-h-80 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">{produto.nome}</h2>
                  <p className="text-muted-foreground mb-6">{produto.descricao}</p>
                  
                  <h3 className="text-lg font-semibold mb-3">Principais características:</h3>
                  <ul className="space-y-2 mb-6">
                    {produto.caracteristicas.map((caracteristica, index) => (
                      <li key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <Button onClick={() => handleSolicitarDemonstracao(produto.nome)}>
                      Solicitar Demonstração
                    </Button>
                    <Button variant="outline" onClick={() => handleSaibaMais(produto.id)}>
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <Card key={produto.id} className="overflow-hidden">
              <div className="h-40 bg-blue-100 flex items-center justify-center">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="h-32 w-auto object-contain"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">{produto.nome}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {produto.descricao}
                </p>
                <Button variant="outline" className="w-full" onClick={() => handleSaibaMais(produto.id)}>
                  Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProdutosPage;
