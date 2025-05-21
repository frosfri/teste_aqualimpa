
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const produtos = [
  {
    id: 'produto1',
    nome: 'Produto 1',
    descricao: 'Sistema de gerenciamento de seguros com emissão automática de boletos e cobranças.',
    caracteristicas: [
      'Emissão automática de boletos',
      'Controle de pagamentos',
      'Dashboard administrativo',
      'Relatórios customizados',
    ],
    imagem: '/placeholder.svg'
  },
  {
    id: 'produto2',
    nome: 'Produto 2',
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
    nome: 'Produto 3',
    descricao: 'Solução completa para gestão de cobrança e relacionamento com o cliente.',
    caracteristicas: [
      'CRM integrado',
      'Histórico de atendimentos',
      'Automação de cobranças',
      'Análise de inadimplência',
    ],
    imagem: '/placeholder.svg'
  },
];

const ProdutosPage = () => {
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
          <div className="flex justify-center mb-6">
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
                    <Button>Solicitar Demonstração</Button>
                    <Button variant="outline">Saiba mais</Button>
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
                <Button variant="outline" className="w-full">Detalhes</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProdutosPage;
