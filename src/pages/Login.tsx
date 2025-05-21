
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simula uma requisição de login
    toast({
      title: "Login simulado",
      description: "Em um ambiente real, esse login seria validado com o banco de dados.",
    });

    // Redirecionar para a página inicial após login
    setTimeout(() => {
      window.location.href = '/';
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
              <CardTitle className="text-2xl text-center">Acesso ao Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <Link 
                      to="/recuperar-senha"
                      className="text-sm text-primary hover:underline"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
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
                <Button type="submit" className="w-full">
                  Entrar
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <span className="text-sm text-muted-foreground">
                  Não tem uma conta?{" "}
                  <Link to="/cadastro" className="text-primary hover:underline">
                    Criar conta
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

export default Login;
