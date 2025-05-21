
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="w-full bg-white shadow-sm py-4">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/94b2af01-4114-46cb-9a0c-5a355d73d5fa.png" alt="Logo" className="h-8 w-auto" />
          <span className="ml-2 text-xl font-semibold text-primary">Sistema CNS</span>
        </Link>

        <nav className="hidden md:flex space-x-4">
          <Link to="/produtos" className={`${location.pathname.includes('/produtos') ? 'text-primary font-semibold' : 'text-foreground'} hover:text-primary transition-colors`}>
            Nossos Produtos
          </Link>
          <Link to="/servicos" className={`${location.pathname.includes('/servicos') ? 'text-primary font-semibold' : 'text-foreground'} hover:text-primary transition-colors`}>
            Solicitar Serviço
          </Link>
          <Link to="/configuracoes" className={`${location.pathname.includes('/configuracoes') ? 'text-primary font-semibold' : 'text-foreground'} hover:text-primary transition-colors`}>
            Configurações
          </Link>
        </nav>

        {!location.pathname.includes('/login') && !location.pathname.includes('/cadastro') && (
          <div className="flex items-center space-x-2">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/cadastro">Criar Conta</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
