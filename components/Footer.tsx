import React from 'react';
import { Mail, MapPin, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const navigation = {
    servicios: [
      { name: 'Bloom Xcelerate', href: '#programas' },
      { name: 'Bloom Metrics', href: '#programas' },
      { name: 'Consultoría ESG', href: '#programas' },
      { name: 'Diagnóstico Gratuito', href: '#contacto' },
    ],
    empresa: [
      { name: 'Manifiesto', href: '#manifiesto' },
      { name: 'Impacto', href: '#impacto' },
      { name: 'Casos de Éxito', href: '#impacto' },
      { name: 'Aliados', href: '#contacto' },
    ],
    recursos: [
      { name: 'Blog', href: '#' },
      { name: 'BloomLetter', href: '#contacto' },
      { name: 'Metodología', href: '#manifiesto' },
      { name: 'FAQs', href: '#contacto' },
    ],
  };

  return (
    <footer className="bg-bloom-navy text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bloom-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-bloom-blue/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/logobloom-white.svg" 
                alt="Bloom Innova" 
                className="h-14 w-auto"
              />
            </div>
            
            <p className="text-white/80 mb-8 leading-relaxed max-w-sm">
              Transformamos empresas en agentes de cambio regenerativo con impacto medible y capital consciente.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-bloom-pink" />
                <a href="mailto:contacto@bloominnova.com" className="hover:text-white transition-colors">
                  contacto@bloominnova.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-bloom-pink" />
                <span>Ciudad de Panamá, Panamá</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-bloom-blue flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-bloom-pink flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              {navigation.servicios.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-bloom-blue opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              {navigation.empresa.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-bloom-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Recursos</h3>
            <ul className="space-y-3">
              {navigation.recursos.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-bloom-pink opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                📬 Suscríbete al BloomLetter
              </h3>
              <p className="text-white/70">
                Insights sobre impacto regenerativo, métricas y capital consciente.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 backdrop-blur-md transition-all"
              />
              <button className="px-6 py-3 bg-white text-bloom-navy rounded-full font-bold hover:bg-bloom-pink hover:text-white transition-colors whitespace-nowrap flex items-center justify-center gap-2">
                Suscribirse <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © 2025 Bloom Innova. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
