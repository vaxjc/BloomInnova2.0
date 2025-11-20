'use client';

import React from 'react';
import { ArrowRight, Target, TrendingUp, Leaf, DollarSign, Globe, Lightbulb, BarChart3, CheckCircle2, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ImpactoPage() {
  const impactTypes = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Impacto Social',
      description: 'Transformación en comunidades, generación de empleo digno, inclusión y desarrollo de capacidades.',
      examples: ['Empleos creados', 'Personas capacitadas', 'Comunidades beneficiadas']
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Impacto Ambiental',
      description: 'Reducción de huella de carbono, conservación de recursos, economía circular y regeneración de ecosistemas.',
      examples: ['CO2 reducido', 'Recursos conservados', 'Ecosistemas restaurados']
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Impacto Económico',
      description: 'Crecimiento sostenible, generación de valor compartido, fortalecimiento de cadenas productivas.',
      examples: ['Ingresos generados', 'MiPyMEs fortalecidas', 'Mercados desarrollados']
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Acceso a Capital de Impacto',
      description: 'Fondos de inversión, bonos verdes, capital de cooperación internacional y financiamiento concesional buscan empresas con impacto medible y verificable.',
      stat: '+$500M USD',
      statLabel: 'disponibles en LATAM'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Ventaja Competitiva',
      description: 'Las empresas con impacto claro atraen mejores talentos, clientes conscientes y alianzas estratégicas que impulsan el crecimiento.',
      stat: '73%',
      statLabel: 'de consumidores prefieren marcas sostenibles'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Reputación y Credibilidad',
      description: 'Métricas verificables generan confianza con stakeholders, gobierno, medios y comunidad internacional.',
      stat: '100%',
      statLabel: 'de empresas Bloom acceden a alianzas'
    }
  ];

  const principles = [
    {
      title: 'Medible',
      description: 'Con indicadores claros alineados a estándares globales (IRIS+, IMP, ODS)',
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: 'Verificable',
      description: 'Con evidencia técnica que resiste auditorías y due diligence',
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      title: 'Estratégico',
      description: 'Integrado al modelo de negocio, no como filantropía separada',
      icon: <Target className="w-5 h-5" />
    },
    {
      title: 'Escalable',
      description: 'Diseñado para crecer con el negocio y multiplicar resultados',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const economyShift = [
    {
      old: 'Maximizar ganancias a corto plazo',
      new: 'Crear valor compartido sostenible',
      color: 'bloom-purple'
    },
    {
      old: 'Externalizar costos ambientales y sociales',
      new: 'Internalizar impacto en el modelo de negocio',
      color: 'bloom-blue'
    },
    {
      old: 'RSE como gasto filantrópico',
      new: 'Impacto como estrategia de crecimiento',
      color: 'bloom-pink'
    },
    {
      old: 'Reportes narrativos sin métricas',
      new: 'Evidencia verificable con estándares globales',
      color: 'bloom-navy'
    }
  ];

  return (
    <>
      <Navbar variant="dark" />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-6 py-3 bg-white/10 rounded-full mb-6 shadow-lg border border-white/20">
                <span className="text-bloom-pink font-bold text-sm uppercase tracking-wide">Impacto Regenerativo</span>
              </div>
              
              <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                El futuro es <span className="font-accent italic text-bloom-pink font-normal">impacto</span>
              </h1>
              
              <p className="text-2xl text-white/90 mb-8 font-light leading-relaxed">
                Las empresas que miden y demuestran su impacto acceden a capital, alianzas y crecimiento.
              </p>

              <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                La economía regenerativa no es el futuro lejano. Es la realidad de las empresas que ya están transformando mercados.
              </p>

              <a 
                href="/diagnostico" 
                className="inline-flex items-center gap-2 bg-bloom-pink text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-bloom-navy transition-all shadow-2xl hover:scale-105 duration-300"
              >
                Medir mi impacto <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Types of Impact */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                Tipos de <span className="font-accent italic text-bloom-purple font-normal">impacto</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                El impacto regenerativo integra tres dimensiones que se miden, verifican y escalan.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {impactTypes.map((type, index) => (
                <div
                  key={index}
                  className="group relative bg-bloom-surface rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-xl bg-bloom-navy flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-all">
                    {type.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-bloom-navy mb-3">Ejemplos de métricas:</p>
                    {type.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-bloom-purple flex-shrink-0" />
                        <span className="text-sm text-gray-600">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-bloom-navy rounded-[3rem] p-12 md:p-16 text-center">
              <Sparkles className="w-12 h-12 text-bloom-pink mx-auto mb-6" />
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                <span className="font-bold text-bloom-pink">El impacto real</span> no es lo que dices que haces. Es lo que puedes <span className="font-bold">medir, verificar y demostrar</span> con evidencia técnica.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Por qué el impacto <span className="font-accent italic text-bloom-pink font-normal">abre puertas</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
                Las empresas con impacto medible acceden a oportunidades que otras no pueden alcanzar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-bloom-pink/20 flex items-center justify-center mb-6 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="pt-6 border-t border-white/20">
                    <div className="text-4xl font-bold text-bloom-pink mb-2">
                      {benefit.stat}
                    </div>
                    <p className="text-white/70 text-sm">
                      {benefit.statLabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                  Impacto que <span className="font-accent italic text-bloom-purple font-normal">cuenta</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  No todo lo que se llama "impacto" abre puertas. Para acceder a capital, alianzas y crecimiento, tu impacto debe ser:
                </p>

                <div className="space-y-6">
                  {principles.map((principle, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-6 bg-bloom-surface rounded-2xl hover:shadow-lg transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-bloom-purple/20 flex items-center justify-center text-bloom-purple flex-shrink-0">
                        {principle.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-bloom-navy mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-bloom-purple/10 rounded-[3rem] rotate-3"></div>
                <div className="relative bg-bloom-navy rounded-[3rem] p-10 md:p-12 text-white">
                  <Lightbulb className="w-12 h-12 text-bloom-pink mb-6" />
                  <h3 className="font-heading text-2xl font-bold mb-6">
                    La diferencia Bloom
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Transformamos tu impacto en evidencia técnica que habla el lenguaje de fondos, inversionistas y aliados estratégicos.
                  </p>
                  <ul className="space-y-3">
                    {['Teoría del Cambio', 'Marco Lógico', 'Indicadores IRIS+', 'Dashboard profesional', 'Narrativa de impacto'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-bloom-pink flex-shrink-0" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Economy Shift Section */}
        <section className="py-32 bg-bloom-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                El cambio de <span className="font-accent italic text-bloom-blue font-normal">paradigma</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                La economía regenerativa está redefiniendo cómo las empresas crean valor y hacen negocios.
              </p>
            </div>

            <div className="space-y-8 mb-16">
              {economyShift.map((shift, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-[2.5rem] p-8 md:p-10 shadow-lg"
                >
                  <div className="relative">
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-gray-300 rounded-full"></div>
                    <p className="text-gray-500 text-sm font-bold mb-2 uppercase tracking-wide">Modelo tradicional</p>
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                      {shift.old}
                    </p>
                  </div>
                  <div className="relative">
                    <div className={`absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-${shift.color} rounded-full`}></div>
                    <p className={`text-${shift.color} text-sm font-bold mb-2 uppercase tracking-wide`}>Economía regenerativa</p>
                    <p className="text-xl text-bloom-navy font-bold leading-relaxed">
                      {shift.new}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-bloom-navy rounded-[3rem] p-12 md:p-16 text-center">
              <p className="text-3xl text-white font-light leading-relaxed mb-6">
                Las empresas que <span className="font-bold text-bloom-pink">integran impacto en su estrategia</span> no solo sobreviven.
              </p>
              <p className="text-4xl text-bloom-pink font-bold">
                Lideran el futuro.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainable Business Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-bloom-blue/5 rounded-[3rem] -rotate-2"></div>
                <div className="relative bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
                  <Globe className="w-12 h-12 text-bloom-blue mb-6" />
                  <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-4">
                    Negocios Sostenibles
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Un negocio sostenible no solo reduce daño. Genera valor económico, social y ambiental de forma integrada.
                  </p>
                  <div className="space-y-3">
                    {['Rentabilidad + impacto positivo', 'Modelo escalable y replicable', 'Resiliencia ante crisis', 'Atracción de talento y capital'].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-bloom-blue flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                  Crear negocios <span className="font-accent italic text-bloom-blue font-normal">sostenibles</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  La sostenibilidad no es un "extra". Es la base de los negocios que están transformando industrias y accediendo a capital de impacto.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  En Bloom, ayudamos a empresas a construir modelos de negocio donde el impacto no es un costo, sino un motor de crecimiento, diferenciación y acceso a oportunidades.
                </p>
                <a 
                  href="/xcelerate" 
                  className="inline-flex items-center gap-2 bg-bloom-blue text-white px-8 py-4 rounded-full font-bold hover:bg-bloom-navy transition-all shadow-xl"
                >
                  Conocer Bloom Xcelerate <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              ¿Listo para medir tu <span className="font-accent italic text-bloom-pink font-normal">impacto</span>?
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Transforma tu impacto en evidencia verificable que abre puertas a capital, alianzas y crecimiento.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/diagnostico" 
                className="inline-flex items-center gap-2 bg-white text-bloom-navy px-12 py-6 rounded-full font-bold text-lg hover:bg-bloom-pink hover:text-white transition-all shadow-2xl hover:scale-105 duration-300"
              >
                Iniciar Diagnóstico <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/sobre-bloom" 
                className="inline-flex items-center gap-2 bg-white/10 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Conocer más sobre Bloom
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
