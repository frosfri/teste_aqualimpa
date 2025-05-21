
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';

const Cadastro = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    nome: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erro de validação",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }
    
    // Simula uma requisição de cadastro
    toast({
      title: "Cadastro realizado!",
      description: "Em um ambiente real, você seria cadastrado no banco de dados.",
    });

    // Redirecionar para a página de login após cadastro
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  };

  return (
    <Layout>
      <div className="container py-8 flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <div className="flex justify-center mb-4">
                <img src="/lovable-uploads/94b2af01-4114-46cb-9a0c-5a355d73d5fa.png" alt="Logo" className="h-12 w-auto" />
              </div>
              <CardTitle className="text-2xl text-center">Criar Conta</CardTitle>
              <CardDescription className="text-center">
                Preencha os dados abaixo para criar sua conta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    name="nome"
                    placeholder="Seu nome completo"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Criar Conta
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <span className="text-sm text-muted-foreground">
                  Já possui uma conta?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Fazer login
                  </Link>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Cadastro;
