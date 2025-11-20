import React from 'react';
import { Globe, Rocket, BarChart3, MessageCircle, ArrowRight } from 'lucide-react';

const NetworkAndCTA = () => {
  return (
    <section className="py-32 bg-bloom-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Network Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
              Parte de una red continental de <span className="font-accent italic text-bloom-blue font-normal">impacto</span>
            </h2>
            
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Trabajamos con redes y organizaciones que impulsan el impacto regenerativo y fortalecen ecosistemas latinoamericanos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {[
              { name: 'Red de Impacto Latinoamérica', logo: '/logo-asociaciones/red-impacto.png' },
              { name: 'Ciudad del Saber', logo: '/logo-asociaciones/ciudad-del-saber.png' },
              { name: 'SENACYT', logo: '/logo-asociaciones/cropped-senacyt-logo-removebg-preview-1.png' },
              { name: 'Miller Center for Global Impact', logo: '/logo-asociaciones/miller.png' },
              { name: 'List', logo: null }
            ].map((partner, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-bloom-blue/30 flex flex-col items-center justify-center min-h-[200px]"
              >
                {/* Logo */}
                <div className="w-24 h-24 mb-6 rounded-xl bg-white flex items-center justify-center group-hover:shadow-md transition-all">
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-20 h-20 object-contain"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-white shadow-inner flex items-center justify-center">
                      <Globe className="w-8 h-8 text-bloom-blue/40" />
                    </div>
                  )}
                </div>
                <h3 className="font-heading text-base font-bold text-bloom-navy text-center leading-tight">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-bloom-blue/5 rounded-[3rem] rotate-2"></div>
              <div className="relative bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
                <Globe className="w-12 h-12 text-bloom-blue mb-6" />
                <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-4">
                  Ecosistema de Impacto
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Formamos parte de una red continental que conecta empresas, fondos, academia y gobierno para construir una economía regenerativa en América Latina.
                </p>
              </div>
            </div>

            <div className="bg-bloom-navy rounded-[3rem] p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-bloom-blue/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-bloom-purple/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-bloom-pink/20 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-bloom-pink" />
                </div>
                <p className="text-2xl text-white font-light leading-relaxed mb-6 font-accent italic">
                  "Juntos construimos la infraestructura para una economía regenerativa en América Latina."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-bloom-pink rounded-full"></div>
                  <p className="text-bloom-pink font-bold">
                    Bloom Innova
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NetworkAndCTA;
