import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">ENG MEDICAL</span>
                <span className="text-green-300 text-xs">Soluções Hospitalares</span>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Soluções profissionais de manutenção hospitalar garantindo desempenho ideal e segurança para instalações médicas.
            </p>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Links Rápidos</span>
            <nav className="space-y-2">
              <Link to="/" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Início
              </Link>
              <Link to="/about" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Sobre Nós
              </Link>
              <Link to="/services" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Serviços
              </Link>
              <Link to="/contact" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Informações de Contato</span>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-green-300 mt-0.5 shrink-0" />
                <a href="mailto:engmedical@gmail.com" className="text-blue-100 hover:text-white transition-colors text-sm">
                  engmedical@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-green-300 mt-0.5 shrink-0" />
                <span className="text-blue-100 text-sm">Disponível 24/7</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-green-300 mt-0.5 shrink-0" />
                <span className="text-blue-100 text-sm">Atendimentos no Paraná e Santa Catarina.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} ENG MEDICAL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;