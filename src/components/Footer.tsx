
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner py-6 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aqua Limpa. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Serviço
            </Link>
            <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
