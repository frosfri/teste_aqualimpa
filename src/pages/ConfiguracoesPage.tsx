
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";

const ConfiguracoesPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    nomeEmpresa: 'Minha Empresa',
    email: 'contato@minhaempresa.com',
    telefone: '(11) 1234-5678',
    endereco: 'Av. Principal, 1000, São Paulo - SP',
    notificacaoEmail: true,
    notificacaoSMS: false,
    notificacaoApp: true,
    temaPrincipal: 'claro',
    corPrimaria: '#00a8cc',
  });

  // Estado para o modo de aparência (claro/escuro)
  const [modoAparencia, setModoAparencia] = React.useState('claro');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Configurações salvas!",
      description: "Suas configurações foram atualizadas com sucesso.",
    });
  };

  // Função para alternar o modo de aparência
  const toggleModoAparencia = (modo: string) => {
    setModoAparencia(modo);
    setFormData(prev => ({ ...prev, temaPrincipal: modo }));
    
    toast({
      title: `Modo ${modo === 'claro' ? 'Claro' : 'Escuro'} ativado!`,
      description: `O tema foi alterado para o modo ${modo === 'claro' ? 'claro' : 'escuro'}.`,
    });
    
    // Aqui seria implementada a lógica para mudar o tema do aplicativo
    document.documentElement.setAttribute('data-theme', modo);
  };

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Configurações</h1>

        <Tabs defaultValue="perfil" className="space-y-6">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="perfil">Perfil</TabsTrigger>
              <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
              <TabsTrigger value="aparencia">Aparência</TabsTrigger>
              <TabsTrigger value="seguranca">Segurança</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="perfil">
            <Card>
              <CardHeader>
                <CardTitle>Perfil da Empresa</CardTitle>
                <CardDescription>
                  Gerencie as informações do perfil da sua empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nomeEmpresa">Nome da Empresa</Label>
                      <Input
                        id="nomeEmpresa"
                        name="nomeEmpresa"
                        value={formData.nomeEmpresa}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endereco">Endereço</Label>
                      <Input
                        id="endereco"
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit">Salvar Alterações</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notificacoes">
            <Card>
              <CardHeader>
                <CardTitle>Notificações</CardTitle>
                <CardDescription>
                  Configure como você deseja receber notificações do sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Notificações por Email</Label>
                      <p className="text-sm text-muted-foreground">
                        Receber alertas e notificações por email
                      </p>
                    </div>
                    <Switch
                      checked={formData.notificacaoEmail}
                      onCheckedChange={(checked) => handleSwitchChange('notificacaoEmail', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Notificações por SMS</Label>
                      <p className="text-sm text-muted-foreground">
                        Receber alertas e notificações por SMS
                      </p>
                    </div>
                    <Switch
                      checked={formData.notificacaoSMS}
                      onCheckedChange={(checked) => handleSwitchChange('notificacaoSMS', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Notificações no Aplicativo</Label>
                      <p className="text-sm text-muted-foreground">
                        Receber notificações dentro do sistema
                      </p>
                    </div>
                    <Switch
                      checked={formData.notificacaoApp}
                      onCheckedChange={(checked) => handleSwitchChange('notificacaoApp', checked)}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={() => {
                      toast({
                        title: "Notificações atualizadas!",
                        description: "Suas preferências de notificação foram salvas.",
                      });
                    }}>
                      Salvar Preferências
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="aparencia">
            <Card>
              <CardHeader>
                <CardTitle>Aparência</CardTitle>
                <CardDescription>
                  Personalize a aparência do sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label>Tema</Label>
                    <div className="flex gap-4">
                      <Button
                        variant={formData.temaPrincipal === 'claro' ? 'default' : 'outline'}
                        className="flex-1"
                        onClick={() => setFormData(prev => ({ ...prev, temaPrincipal: 'claro' }))}
                      >
                        Claro
                      </Button>
                      <Button
                        variant={formData.temaPrincipal === 'escuro' ? 'default' : 'outline'}
                        className="flex-1"
                        onClick={() => setFormData(prev => ({ ...prev, temaPrincipal: 'escuro' }))}
                      >
                        Escuro
                      </Button>
                      <Button
                        variant={formData.temaPrincipal === 'sistema' ? 'default' : 'outline'}
                        className="flex-1"
                        onClick={() => setFormData(prev => ({ ...prev, temaPrincipal: 'sistema' }))}
                      >
                        Sistema
                      </Button>
                    </div>
                  </div>
                  
                  {/* Novo seletor de modo de aparência com ícones */}
                  <div className="space-y-4">
                    <Label>Modo de Aparência</Label>
                    <div className="flex justify-center space-x-2">
                      <Toggle 
                        pressed={modoAparencia === 'claro'} 
                        onPressedChange={() => toggleModoAparencia('claro')}
                        aria-label="Modo Claro"
                        className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-800"
                      >
                        <Sun className="h-5 w-5 mr-1" /> Modo Claro
                      </Toggle>
                      <Toggle 
                        pressed={modoAparencia === 'escuro'} 
                        onPressedChange={() => toggleModoAparencia('escuro')}
                        aria-label="Modo Escuro"
                        className="data-[state=on]:bg-slate-800 data-[state=on]:text-white"
                      >
                        <Moon className="h-5 w-5 mr-1" /> Modo Escuro
                      </Toggle>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="corPrimaria">Cor Principal</Label>
                    <div className="flex gap-4 items-center">
                      <Input
                        id="corPrimaria"
                        name="corPrimaria"
                        type="color"
                        value={formData.corPrimaria}
                        onChange={handleInputChange}
                        className="w-24 h-10"
                      />
                      <span className="text-sm text-muted-foreground">{formData.corPrimaria}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={() => {
                      toast({
                        title: "Aparência atualizada!",
                        description: "As configurações de tema foram salvas.",
                      });
                    }}>
                      Salvar Aparência
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="seguranca">
            <Card>
              <CardHeader>
                <CardTitle>Segurança</CardTitle>
                <CardDescription>
                  Gerencie as configurações de segurança da sua conta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="senhaAtual">Senha Atual</Label>
                    <Input
                      id="senhaAtual"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="novaSenha">Nova Senha</Label>
                      <Input
                        id="novaSenha"
                        type="password"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmarSenha">Confirmar Nova Senha</Label>
                      <Input
                        id="confirmarSenha"
                        type="password"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <Switch id="autenticacao2Fatores" />
                    <Label htmlFor="autenticacao2Fatores">
                      Ativar autenticação de dois fatores
                    </Label>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" className="w-full md:w-auto">Cancelar</Button>
                    <Button className="w-full md:w-auto" onClick={() => {
                      toast({
                        title: "Senha atualizada",
                        description: "Sua senha foi alterada com sucesso.",
                      });
                    }}>
                      Atualizar Senha
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ConfiguracoesPage;
