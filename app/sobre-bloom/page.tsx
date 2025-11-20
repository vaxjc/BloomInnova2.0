'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Target, TrendingUp, BarChart3, Users, Rocket, Globe, Award, Linkedin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SobreBloomPage() {
  const stats = [
    {
      number: '+$800K',
      description: 'USD movilizados en capital para empresas regenerativas'
    },
    {
      number: '+20',
      description: 'Empresas aceleradas con metodología Blooming'
    },
    {
      number: '7',
      description: 'Empresas ganadoras de fondos SENACYT, BCIE y otros'
    },
    {
      number: '100%',
      description: 'De empresas que culminan nuestro proceso acceden a capital, fondos o alianzas'
    }
  ];

  const problems = [
    {
      title: 'Las MiPyMEs no acceden a capital',
      description: 'No tienen claridad estratégica, impacto medible ni estructura técnica para demostrar su valor.',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'La RSE está desconectada del negocio',
      description: 'Se trata como gasto filantrópico en lugar de estrategia de crecimiento y reputación.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'El ESG es gestión de riesgos, no transformación',
      description: 'Se enfoca en cumplir, no en crear valor económico y social verificable.',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const programs = [
    {
      name: 'Bloom Xcelerate',
      description: 'Aceleración empresarial con enfoque regenerativo',
      features: ['Teoría del Cambio', 'Marco Lógico', 'Preparación para capital', 'Conexión con fondos'],
      link: '/xcelerate'
    },
    {
      name: 'Bloom Metrics',
      description: 'SaaS + servicio de medición de impacto',
      features: ['Dashboard profesional', 'Indicadores IRIS+', 'Reportes automatizados', 'Narrativa de impacto'],
      link: '/metrics'
    },
    {
      name: 'Bloom for Corporates',
      description: 'Integración de MiPyMEs y medición corporativa',
      features: ['Encadenamientos productivos', 'Medición ESG', 'Reportes corporativos', 'Alianzas estratégicas'],
      link: '#contacto'
    }
  ];

  const cases = [
    {
      company: 'Munily',
      amount: '$450K',
      result: 'Conectados en fondos de cooperación internacional',
      logo: '/logo-asociaciones/munily.png'
    },
    {
      company: 'Undercover Boots',
      amount: '$200K+',
      result: 'Expansión comercial con impacto climático',
      logo: '/logo-asociaciones/undercover.webp'
    },
    {
      company: 'Leafsync',
      amount: '$150K',
      result: 'Modelo escalable con métricas claras',
      logo: '/logo-asociaciones/leafsync.png'
    }
  ];

  const team = [
    {
      name: 'Grecia Medina',
      role: 'CEO',
      description: 'Ingeniera Química con trayectoria en sostenibilidad. Impulsora de la Ley de Bolsas Plásticas en Panamá. Alumni Miller Center for Social Entrepreneurship.',
      linkedin: '#'
    },
    {
      name: 'Iris Barrios',
      role: 'COO',
      description: 'Especialista en operaciones y gestión empresarial. Experta en escalamiento de empresas de impacto y desarrollo de procesos.',
      linkedin: '#'
    },
    {
      name: 'Juan Varela',
      role: 'CTO',
      description: 'Ingeniero de software con experiencia en desarrollo de plataformas SaaS y soluciones tecnológicas para medición de impacto.',
      linkedin: '#'
    }
  ];

  const consultants = [
    'Consultor Estratégico',
    'Asesor Financiero',
    'Experto en ESG',
    'Especialista en Innovación',
    'Asesor Legal',
    'Consultor de Impacto'
  ];

  const allies = [
    { name: 'Red de Impacto Latinoamérica', logo: '/logo-asociaciones/red-impacto.png' },
    { name: 'Ciudad del Saber', logo: '/logo-asociaciones/ciudad-del-saber.png' },
    { name: 'SENACYT', logo: '/logo-asociaciones/cropped-senacyt-logo-removebg-preview-1.png' },
    { name: 'Miller Center for Global Impact', logo: '/logo-asociaciones/miller.png' },
    { name: 'List', logo: null }
  ];

  const testimonials = [
    {
      quote: 'Bloom nos dio la claridad que necesitábamos para demostrar nuestro impacto y acceder a capital de cooperación internacional.',
      author: 'Fundador, Munily'
    },
    {
      quote: 'La metodología Blooming transformó nuestra forma de medir y comunicar impacto. Ahora tenemos métricas que hablan el lenguaje de los inversionistas.',
      author: 'CEO, Leafsync'
    },
    {
      quote: 'Trabajar con Bloom fue el salto que necesitábamos: pasamos de tener buenas intenciones a tener evidencia verificable de nuestro impacto climático.',
      author: 'Directora, Undercover Boots'
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
              <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Sobre <span className="font-accent italic text-bloom-pink font-normal">Bloom Innova</span>
              </h1>
              
              <p className="text-2xl text-white/90 mb-8 font-light leading-relaxed">
                Plataforma regenerativa que acelera MiPyMEs y organizaciones, midiendo su impacto y preparándolas para acceder a capital.
              </p>

              <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                Integramos estrategia, impacto y financiamiento en un modelo único basado en Teoría del Cambio, Marco Lógico, IRIS+, IMP e Innovación regenerativa.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section - Bloom en Números */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left side - Images placeholder */}
              <div className="hidden lg:flex flex-col gap-6">
                <div className="bg-bloom-surface rounded-[2.5rem] h-64 flex items-center justify-center border-2 border-dashed border-bloom-blue/30">
                  <div className="text-center">
                    <div className="text-5xl mb-3">📸</div>
                    <p className="text-gray-500 font-medium">Imagen 1</p>
                  </div>
                </div>
                <div className="bg-bloom-surface rounded-[2.5rem] h-48 flex items-center justify-center border-2 border-dashed border-bloom-blue/30">
                  <div className="text-center">
                    <div className="text-5xl mb-3">📸</div>
                    <p className="text-gray-500 font-medium">Imagen 2</p>
                  </div>
                </div>
              </div>

              {/* Right side - Stats */}
              <div>
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                  Bloom en <span className="font-accent italic text-bloom-purple font-normal">números</span>
                </h2>
                <p className="text-xl text-gray-600 mb-12 font-light">
                  Resultados que demuestran nuestra capacidad de transformar empresas y movilizar capital regenerativo.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-bloom-blue/10 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-bloom-blue/20"
                    >
                      <div className="font-heading text-4xl md:text-5xl font-bold text-bloom-navy mb-3">
                        {stat.number}
                      </div>
                      <p className="text-gray-700 font-medium text-sm leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-bloom-navy rounded-[3rem] p-12 md:p-16 text-center">
              <p className="text-3xl text-white font-bold mb-4">
                Diferenciador central:
              </p>
              <p className="text-2xl text-bloom-pink font-light">
                100% de las empresas que culminan nuestro proceso han accedido a capital, fondos o alianzas.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                El <span className="font-accent italic text-bloom-pink font-normal">problema</span> que resolvemos
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
                Bloom cierra tres brechas críticas en el ecosistema empresarial latinoamericano.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-bloom-pink/20 flex items-center justify-center mb-6 text-white">
                    {problem.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                Qué <span className="font-accent italic text-bloom-purple font-normal">hacemos</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Tres líneas de acción para transformar empresas y organizaciones.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="group relative bg-bloom-surface rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-bloom-navy"
                >
                  <div className="absolute -top-6 left-8 w-16 h-16 rounded-2xl bg-bloom-navy flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-all duration-300">
                    {index + 1}
                  </div>
                  
                  <div className="pt-8">
                    <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-4">
                      {program.name}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                      {program.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-bloom-navy flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={program.link}
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-bloom-pink text-white rounded-xl font-bold hover:bg-bloom-navy transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Conocer más <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Quiénes <span className="font-accent italic text-bloom-pink font-normal">somos</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
                Liderazgo con trayectoria comprobada en sostenibilidad, innovación y desarrollo empresarial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {team.map((member, index) => {
                const stockImages = [
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
                ];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-bloom-pink hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-full h-64 bg-bloom-surface flex items-center justify-center overflow-hidden">
                      <img 
                        src={stockImages[index]} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-2 text-center">
                        {member.name}
                      </h3>
                      <p className="text-bloom-navy font-bold mb-4 text-center">
                        {member.role}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        {member.description}
                      </p>
                      <a
                        href={member.linkedin}
                        className="flex items-center justify-center gap-2 w-full py-2 bg-bloom-navy text-white rounded-xl hover:bg-bloom-pink transition-all font-medium"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mb-12">
              <h3 className="font-heading text-3xl font-bold text-white mb-8">
                Consultores y Asesores Externos
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-12">
                Contamos con una red de expertos especializados en diferentes áreas clave para el desarrollo empresarial regenerativo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {consultants.map((consultant, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/20 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-white">{consultant}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                Casos de <span className="font-accent italic text-bloom-navy font-normal">éxito</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Empresas que han transformado su impacto en capital y crecimiento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((caseItem, index) => (
                <div
                  key={index}
                  className="relative bg-bloom-surface rounded-[2.5rem] p-10 shadow-xl border-2 border-bloom-navy hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-bloom-navy rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 mb-4 rounded-lg bg-white flex items-center justify-center">
                    <img 
                      src={caseItem.logo} 
                      alt={caseItem.company}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-3">
                    {caseItem.company}
                  </h3>
                  <div className="text-5xl font-bold text-bloom-navy mb-4">
                    {caseItem.amount}
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {caseItem.result}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block bg-bloom-navy rounded-2xl px-8 py-6 shadow-lg">
                <p className="text-2xl text-white font-light">
                  <span className="font-bold text-bloom-pink">Promedio de levantamiento:</span> $266K por empresa
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Allies Section */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Ecosistema y <span className="font-accent italic text-bloom-pink font-normal">alianzas</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
                Parte de una red continental de impacto y desarrollo empresarial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {allies.map((ally, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 flex flex-col items-center justify-center min-h-[200px]"
                >
                  <div className="w-24 h-24 mb-6 rounded-xl bg-white flex items-center justify-center">
                    {ally.logo ? (
                      <img 
                        src={ally.logo} 
                        alt={ally.name}
                        className="w-20 h-20 object-contain"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-white shadow-inner flex items-center justify-center">
                        <Globe className="w-8 h-8 text-bloom-blue/40" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-heading text-sm font-bold text-white text-center leading-tight">
                    {ally.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-bloom-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                Lo que dicen <span className="font-accent italic text-bloom-purple font-normal">nuestros Bloomers</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 relative"
                >
                  <div className="absolute -top-4 -left-4 text-6xl text-bloom-purple opacity-20">"</div>
                  <p className="text-gray-700 mb-6 leading-relaxed relative z-10 italic">
                    {testimonial.quote}
                  </p>
                  <p className="text-sm font-bold text-bloom-purple">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & CTA */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Nuestra <span className="font-accent italic text-bloom-pink font-normal">visión</span>
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed font-light">
              Una economía regenerativa latinoamericana donde el impacto es estrategia y las empresas transforman economías.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#contacto" 
                className="inline-flex items-center gap-2 bg-white text-bloom-navy px-10 py-4 rounded-full font-bold text-base hover:bg-bloom-surface hover:shadow-xl transition-all shadow-lg hover:scale-105 duration-300"
              >
                Agenda una llamada <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/xcelerate" 
                className="inline-flex items-center gap-2 bg-bloom-pink text-white px-10 py-4 rounded-full font-bold text-base hover:bg-white hover:text-bloom-navy transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                Conocer Bloom Xcelerate <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
