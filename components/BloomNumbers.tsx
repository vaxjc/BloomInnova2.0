import React from 'react';
import { BarChart3 } from 'lucide-react';

const BloomNumbers = () => {
  const stats = [
    {
      number: '+$800,000',
      description: 'USD movilizados en capital para empresas regenerativas',
      bgColor: 'bg-blue-50',
      textColor: 'text-bloom-navy'
    },
    {
      number: '+20',
      description: 'Empresas aceleradas con metodología Blooming',
      bgColor: 'bg-green-50',
      textColor: 'text-bloom-navy'
    },
    {
      number: '7',
      description: 'Empresas ganadoras de fondos SENACYT, BCIE y otros',
      bgColor: 'bg-purple-50',
      textColor: 'text-bloom-navy'
    },
    {
      number: '5+',
      description: 'Aliados estratégicos en el ecosistema de impacto',
      bgColor: 'bg-orange-50',
      textColor: 'text-bloom-navy'
    },
    {
      number: '100%',
      description: 'De empresas con Teoría del Cambio y Marco Lógico estructurados',
      bgColor: 'bg-pink-50',
      textColor: 'text-bloom-navy'
    },
    {
      number: 'Red LATAM',
      description: 'Miembros activos de la Red Latinoamericana de Impacto y Ciudad del Saber',
      bgColor: 'bg-yellow-50',
      textColor: 'text-bloom-navy'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-8 h-8 text-bloom-blue" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-bloom-navy">
              BLOOM EN NÚMEROS
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl font-light">
            Resultados que demuestran nuestra capacidad de transformar empresas y movilizar capital regenerativo.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100`}
            >
              <div className={`font-heading text-5xl md:text-6xl font-bold ${stat.textColor} mb-4`}>
                {stat.number}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            ¿Quieres ser parte de estas estadísticas?
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 bg-bloom-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-bloom-purple transition-all shadow-lg hover:shadow-xl"
          >
            Comienza tu transformación
          </a>
        </div>
      </div>
    </section>
  );
};

export default BloomNumbers;
