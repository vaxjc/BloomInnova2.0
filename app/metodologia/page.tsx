'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Target, TrendingUp, BarChart3, DollarSign, Rocket, Lightbulb, Globe, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MetodologiaPage() {
  const challenges = [
    {
      stat: '90%',
      description: 'de las MiPyMEs no accede a financiamiento formal por falta de claridad estratégica e indicadores',
      source: 'BID, CEPAL'
    },
    {
      stat: '70-80%',
      description: 'de proyectos de RSE no miden resultados ni generan evidencia verificable',
      source: 'CEPAL, PNUD, OCDE'
    },
    {
      stat: 'US$ 500M',
      description: 'en capital de impacto disponible, pero pocas empresas tienen los entregables técnicos necesarios',
      source: 'GIIN, CAF, BID Lab'
    },
    {
      stat: '60%',
      description: 'de reportes ESG se enfocan en cumplir, no en transformar',
      source: 'OCDE'
    }
  ];

  const methodology = [
    {
      number: '1',
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Claridad',
      description: 'Diagnóstico estratégico, visión de impacto, desafío central y análisis de modelo.',
      result: 'Una empresa que sabe quién es, qué resuelve y hacia dónde va.'
    },
    {
      number: '2',
      icon: <Globe className="w-6 h-6" />,
      title: 'Impacto',
      description: 'Diseñamos la Teoría del Cambio, identificamos beneficiarios, vías de impacto y resultados esperados.',
      result: 'Estructura conceptual sólida para demostrar transformación.'
    },
    {
      number: '3',
      icon: <Target className="w-6 h-6" />,
      title: 'Estrategia',
      description: 'Construimos el Marco Lógico, la hoja de ruta y la narrativa estratégica del negocio.',
      result: 'Metas claras, indicadores y actividades alineadas al crecimiento.'
    },
    {
      number: '4',
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Métricas',
      description: 'Definimos indicadores alineados a estándares globales (IRIS+, IMP, SDGs) y montamos tu dashboard profesional.',
      result: 'Evidencia verificable para aliados, fondos y reportes.'
    },
    {
      number: '5',
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Preparación para Capital',
      description: 'Estructuramos el pitch, los entregables técnicos y la propuesta para fondos e inversión de impacto.',
      result: 'Una empresa lista para entrar al continuo de capital.'
    },
    {
      number: '6',
      icon: <Rocket className="w-6 h-6" />,
      title: 'Escalamiento Regenerativo',
      description: 'Identificamos oportunidades, alianzas, rutas de expansión y mecanismos para escalar impacto + negocio.',
      result: 'Crecimiento con propósito, reputación y expansión territorial.'
    }
  ];

  const comparison = [
    {
      aspect: 'Enfoque',
      traditional: 'Donaciones, campañas, cumplimiento',
      blooming: 'Impacto medible integrado al negocio'
    },
    {
      aspect: 'Métricas',
      traditional: 'Reportes narrativos sin indicadores',
      blooming: 'Dashboard con IRIS+, ESG, ODS'
    },
    {
      aspect: 'Estrategia',
      traditional: 'Separada del core business',
      blooming: 'Parte del modelo de crecimiento'
    },
    {
      aspect: 'Capital',
      traditional: 'No accede a fondos de impacto',
      blooming: 'Lista para bonos verdes, fondos ESG, alianzas'
    },
    {
      aspect: 'Escalamiento',
      traditional: 'Limitado a presupuesto de RSE',
      blooming: 'Integrado en expansión y reputación'
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
                <span className="text-bloom-pink font-bold text-sm uppercase tracking-wide">Nuestra Metodología</span>
              </div>
              
              <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Metodología <span className="font-accent italic text-bloom-pink font-normal">Blooming</span>
              </h1>
              
              <p className="text-2xl text-white/90 mb-8 font-light leading-relaxed">
                El proceso que conecta <span className="font-bold text-bloom-pink">impacto, estrategia y capital</span>.
              </p>

              <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                Partimos de la realidad. Construimos impacto que se ve, se mide y se siente.
              </p>

              <a 
                href="/diagnostico" 
                className="inline-flex items-center gap-2 bg-bloom-pink text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-bloom-navy transition-all shadow-2xl hover:scale-105 duration-300"
              >
                Iniciar Diagnóstico <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                El <span className="font-accent italic text-bloom-purple font-normal">desafío</span> actual
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl font-light leading-relaxed">
                Las empresas quieren crecer, pero la mayoría no está preparada para demostrar impacto ni acceder a financiamiento. En Latinoamérica, existen brechas importantes:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-bloom-purple/5 rounded-full blur-2xl group-hover:bg-bloom-purple/10 transition-all"></div>
                  <div className="font-heading text-5xl font-bold text-bloom-purple mb-4">
                    {challenge.stat}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {challenge.description}
                  </p>
                  <p className="text-sm text-gray-500 font-semibold">
                    Fuente: {challenge.source}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-bloom-navy rounded-[3rem] p-12 md:p-16 text-center">
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-6">
                <span className="font-bold">El resultado:</span> Las empresas con impacto claro, medible y estratégico acceden a capital, alianzas y crecimiento. Las que no, quedan fuera del continuo de oportunidades.
              </p>
              <p className="text-xl text-bloom-pink font-bold">
                Bloom cierra esta brecha con metodología, claridad y evidencia técnica.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-32 bg-bloom-navy relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Las 6 fases de <span className="font-accent italic text-bloom-pink font-normal">Blooming</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
                Nuestro enfoque se basa en un principio: <span className="font-bold text-bloom-pink">el impacto es horizontal y atraviesa toda la estrategia</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {methodology.map((phase, index) => (
                <div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:bg-white/20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-bloom-pink flex items-center justify-center text-white font-bold text-xl">
                      {phase.number}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                      {phase.icon}
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-bloom-pink font-bold mb-2">Resultado:</p>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {phase.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Horizontal de Impacto */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                  El Horizontal de <span className="font-accent italic text-bloom-purple font-normal">Impacto</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A diferencia de los modelos tradicionales, nuestra metodología no trata el impacto como un "módulo" o un "proyecto".
                </p>
                <p className="text-xl text-gray-700 font-bold mb-8">
                  Es transversal, técnico y estratégico.
                </p>
                <ul className="space-y-4 mb-10">
                  {['la estrategia', 'el modelo de negocio', 'las métricas', 'la preparación para capital', 'las alianzas', 'el escalamiento'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-bloom-purple flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-bloom-purple/10 border-l-4 border-bloom-purple p-6 rounded-r-2xl">
                  <p className="text-xl text-bloom-navy font-bold">
                    Por eso Bloom convierte impacto en crecimiento, reputación y capital. No en filantropía.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-bloom-purple/10 rounded-[3rem] rotate-3"></div>
                <div className="relative bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-100">
                  <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-6">
                    Atraviesa todo tu negocio
                  </h3>
                  <div className="space-y-4">
                    {['Estrategia', 'Modelo de negocio', 'Métricas', 'Capital', 'Alianzas', 'Escalamiento'].map((area, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-bloom-surface rounded-xl">
                        <div className="w-8 h-8 rounded-lg bg-bloom-purple/20 flex items-center justify-center">
                          <span className="text-bloom-purple font-bold text-sm">{i + 1}</span>
                        </div>
                        <span className="font-semibold text-bloom-navy">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-32 bg-bloom-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                RSE Tradicional vs <span className="font-accent italic text-bloom-purple font-normal">Blooming</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Blooming es el puente entre RSE tradicional y estrategia regenerativa con métricas verificables.
              </p>
            </div>

            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-bloom-navy text-white">
                      <th className="px-8 py-6 text-left font-heading text-xl">Componente</th>
                      <th className="px-8 py-6 text-left font-heading text-xl">RSE Tradicional</th>
                      <th className="px-8 py-6 text-left font-heading text-xl bg-bloom-purple">Con Blooming</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-bloom-surface' : 'bg-white'}>
                        <td className="px-8 py-6 font-bold text-bloom-navy">{row.aspect}</td>
                        <td className="px-8 py-6 text-gray-600">{row.traditional}</td>
                        <td className="px-8 py-6 text-bloom-navy font-semibold bg-bloom-purple/5">{row.blooming}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 mb-8">
                Por eso <span className="font-bold text-bloom-purple">Bloom Metrics</span> existe: para llevar esta metodología a empresas corporativas que necesitan claridad técnica en su impacto.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/xcelerate" 
                  className="inline-flex items-center gap-2 bg-bloom-purple text-white px-8 py-4 rounded-full font-bold hover:bg-bloom-navy transition-all shadow-xl"
                >
                  Conocer Bloom Xcelerate <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="/metrics" 
                  className="inline-flex items-center gap-2 bg-bloom-blue text-white px-8 py-4 rounded-full font-bold hover:bg-bloom-navy transition-all shadow-xl"
                >
                  Conocer Bloom Metrics <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              ¿Listo para aplicar <span className="font-accent italic text-bloom-pink font-normal">Blooming</span>?
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Transforma tu empresa con nuestra metodología probada de impacto regenerativo.
            </p>
            <a 
              href="/diagnostico" 
              className="inline-flex items-center gap-2 bg-white text-bloom-navy px-12 py-6 rounded-full font-bold text-lg hover:bg-bloom-pink hover:text-white transition-all shadow-2xl hover:scale-105 duration-300"
            >
              Iniciar Diagnóstico <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
