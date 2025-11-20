import React from 'react';

const ImpactAndResults = () => {
  const stats = [
    {
      number: '+$800,000',
      description: 'USD movilizados en capital para empresas regenerativas',
      bgColor: 'bg-blue-50'
    },
    {
      number: '+20',
      description: 'Empresas aceleradas con metodología Blooming',
      bgColor: 'bg-green-50'
    },
    {
      number: '7',
      description: 'Empresas ganadoras de fondos SENACYT, BCIE y otros',
      bgColor: 'bg-purple-50'
    },
    {
      number: '5+',
      description: 'Aliados estratégicos en el ecosistema de impacto',
      bgColor: 'bg-orange-50'
    },
    {
      number: '100%',
      description: 'De empresas con Teoría del Cambio y Marco Lógico estructurados',
      bgColor: 'bg-pink-50'
    },
    {
      number: 'Red LATAM',
      description: 'Miembros activos de la Red Latinoamericana de Impacto y Ciudad del Saber',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <section id="impacto" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-heading text-5xl font-bold mb-6 text-bloom-navy leading-tight">
              Resultados que <br/>hablan por <span className="font-accent italic text-bloom-blue font-normal">sí mismos</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 font-light">
              Cuando el impacto se mide con propósito, deja de ser gasto y se convierte en estrategia de expansión. Transformamos métricas blandas en KPIs financieros.
            </p>
            
            <div className="flex flex-wrap gap-3">
               {['Productividad', 'Eficiencia', 'Cultura', 'Innovación', 'Reputación', 'Fondos Verdes'].map((tag, i) => (
                 <span key={i} className="px-4 py-2 rounded-full bg-gray-100 text-bloom-navy text-sm font-medium border border-gray-200">
                   {tag}
                 </span>
               ))}
            </div>
          </div>

          {/* Bloom en Números - Grid de estadísticas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-bloom-blue/10 p-6 rounded-2xl border border-bloom-blue/20">
               <div className="text-4xl font-bold text-bloom-blue mb-1">+$800K</div>
               <div className="text-sm text-bloom-navy font-medium">USD movilizados en capital</div>
            </div>
            <div className="bg-bloom-purple/10 p-6 rounded-2xl border border-bloom-purple/20">
               <div className="text-4xl font-bold text-bloom-purple mb-1">+20</div>
               <div className="text-sm text-bloom-navy font-medium">Empresas aceleradas</div>
            </div>
            <div className="bg-bloom-pink/10 p-6 rounded-2xl border border-bloom-pink/20">
               <div className="text-4xl font-bold text-bloom-pink mb-1">7</div>
               <div className="text-sm text-bloom-navy font-medium">Fondos ganados</div>
            </div>
            <div className="bg-bloom-navy/10 p-6 rounded-2xl border border-bloom-navy/20">
               <div className="text-4xl font-bold text-bloom-navy mb-1">5+</div>
               <div className="text-sm text-bloom-navy font-medium">Aliados estratégicos</div>
            </div>
            <div className="bg-bloom-blue/10 p-6 rounded-2xl border border-bloom-blue/20">
               <div className="text-4xl font-bold text-bloom-blue mb-1">100%</div>
               <div className="text-sm text-bloom-navy font-medium">Con Teoría del Cambio</div>
            </div>
            <div className="bg-bloom-purple/10 p-6 rounded-2xl border border-bloom-purple/20">
               <div className="text-sm font-bold text-bloom-purple mb-1">Red LATAM</div>
               <div className="text-xs text-bloom-navy font-medium">Miembros activos</div>
            </div>
          </div>
        </div>

        {/* Case Study Big Card */}
        <div className="relative rounded-[3rem] overflow-hidden bg-bloom-navy text-white">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <div className="text-bloom-pink font-bold uppercase tracking-widest text-xs mb-6">Caso de Éxito</div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-8 leading-tight">
                "Bloom Innova estructuró nuestra estrategia y accedimos a <span className="text-bloom-blue">$500K</span> en inversión."
              </h3>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 border-2 border-bloom-blue rounded-full overflow-hidden p-1">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="CEO" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <div className="font-bold text-lg">María González</div>
                  <div className="text-sm text-gray-400">CEO, EcoTech Solutions</div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Success Story" />
              <div className="absolute inset-0 bg-bloom-navy/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAndResults;
