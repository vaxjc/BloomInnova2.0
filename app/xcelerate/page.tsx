'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Calendar, Users, Target, Rocket, TrendingUp, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function XceleratePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    teamSize: '',
    revenue: '',
    challenge: '',
    goals: '',
    timeline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    // Handle form submission
    alert('¡Gracias por tu aplicación! Nos pondremos en contacto pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      teamSize: '',
      revenue: '',
      challenge: '',
      goals: '',
      timeline: ''
    });
  };

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Modelo de Negocio de Impacto',
      description: 'Estructura clara que integra sostenibilidad y rentabilidad'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Teoría del Cambio Validada',
      description: 'Marco lógico que demuestra tu impacto real y medible'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Roadmap de Capital',
      description: 'Estrategia clara para acceder a inversión y fondos'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Pitch Deck Inversionista',
      description: 'Presentación profesional que atrae capital consciente'
    }
  ];

  const results = [
    {
      stat: '+USD $800K',
      description: 'movilizados en fondos no reembolsables hacia empresas panameñas'
    },
    {
      stat: '99%',
      description: 'de las empresas en LATAM son MiPyMEs, generan +60% del empleo pero reciben <12% del crédito'
    },
    {
      stat: '<2%',
      description: 'del capital de impacto global llega a MiPyMEs latinoamericanas'
    }
  ];

  const hubs = [
    {
      number: '1',
      title: 'Center & Impact Foundations',
      subtitle: 'Propósito, diagnóstico y teoría del cambio',
      results: ['Claridad estratégica', 'Línea base financiera', 'Indicadores de impacto']
    },
    {
      number: '2',
      title: 'Strategy & Financial Viability',
      subtitle: 'Modelo de negocio y sostenibilidad',
      results: ['Proyecciones financieras', 'Plan de crecimiento', 'Estrategia de inversión']
    },
    {
      number: '3',
      title: 'Organizational Structure & Growth',
      subtitle: 'Cultura, liderazgo e innovación',
      results: ['Estructura interna fortalecida', 'KPIs', 'Plan de alianzas estratégicas']
    },
    {
      number: '4',
      title: 'Fundraising & Global Positioning',
      subtitle: 'Estrategia de capital y posicionamiento',
      results: ['Pitch técnico', 'Carpeta de inversión', 'Conexión con fuentes de capital']
    }
  ];

  const capabilities = [
    'Diagnosticar su punto de partida en materia de finanzas e impacto',
    'Formular un modelo de negocio regenerativo que combine rentabilidad con valor social o ambiental',
    'Aplicar herramientas de I+D+i para innovar en procesos, productos o alianzas',
    'Medir su impacto con estándares reconocidos (IRIS+, ODS, metas país)',
    'Elaborar proyecciones financieras y estrategias de escalamiento',
    'Presentar una narrativa técnica de inversión respaldada por datos verificables',
    'Fortalecer liderazgo, cultura y gobernanza'
  ];

  return (
    <>
      <Navbar variant="dark" />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-6 py-3 bg-white/10 rounded-full mb-6 border border-white/20">
                <span className="text-bloom-pink font-bold text-sm uppercase tracking-wide">Programa Intensivo</span>
              </div>
              
              <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Bloom <span className="font-accent italic text-bloom-pink font-normal">Xcelerate</span>
              </h1>
              
              <p className="text-2xl text-white/90 mb-8 font-light leading-relaxed">
                Aceleradora con horizontal de impacto
              </p>
              
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Estructuramos estrategia, medimos impacto y fortalecemos crecimiento empresarial.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-3 glass-panel bg-white/80 backdrop-blur-md px-6 py-4 rounded-full shadow-lg border border-white/40">
                  <Calendar className="w-6 h-6 text-bloom-purple" />
                  <span className="font-bold text-bloom-navy">12 semanas</span>
                </div>
                <div className="flex items-center gap-3 glass-panel bg-white/80 backdrop-blur-md px-6 py-4 rounded-full shadow-lg border border-white/40">
                  <Users className="w-6 h-6 text-bloom-blue" />
                  <span className="font-bold text-bloom-navy">Cohorte limitada</span>
                </div>
                <div className="flex items-center gap-3 glass-panel bg-white/80 backdrop-blur-md px-6 py-4 rounded-full shadow-lg border border-white/40">
                  <Rocket className="w-6 h-6 text-bloom-pink" />
                  <span className="font-bold text-bloom-navy">100% práctico</span>
                </div>
              </div>

              <a 
                href="#aplicar" 
                className="inline-flex items-center gap-2 bg-bloom-navy text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-bloom-purple transition-all shadow-2xl hover:shadow-bloom-purple/50 hover:scale-105 duration-300"
              >
                Aplicar al Programa <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                Lo que <span className="font-accent italic text-bloom-navy font-normal">lograrás</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Al finalizar Bloom Xcelerate, tu empresa estará lista para atraer inversión y escalar con impacto.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-bloom-surface rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-bloom-navy hover:border-bloom-navy/80"
                >
                  <div className="absolute -top-6 left-8 w-16 h-16 rounded-2xl bg-bloom-navy flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="pt-8">
                    <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-3 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Resultados <span className="font-accent italic text-bloom-pink font-normal">alcanzados</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
                En menos de un año, Bloom Xcelerate ha movilizado más de USD 800,000 en fondos no reembolsables hacia empresas panameñas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[2.5rem] p-10 shadow-lg border-2 border-bloom-pink"
                >
                  <div className="font-heading text-5xl font-bold text-bloom-navy mb-4">
                    {result.stat}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HUBs Structure */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Estructura en 4 <span className="font-accent italic text-bloom-pink font-normal">HUBs</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
                El programa integra estrategia, finanzas, innovación e impacto en cuatro fases transformadoras.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {hubs.map((hub, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-bloom-pink"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-bloom-pink flex items-center justify-center text-white font-bold text-2xl">
                      {hub.number}
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-bloom-navy leading-tight">
                        HUB {hub.number}
                      </h3>
                    </div>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-bloom-navy mb-3">
                    {hub.title}
                  </h4>
                  <p className="text-gray-600 mb-6 italic">
                    {hub.subtitle}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-bloom-navy mb-3">Resultados:</p>
                    <ul className="space-y-2">
                      {hub.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-bloom-pink flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                  Capacidades que <span className="font-accent italic text-bloom-navy font-normal">desarrollarás</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  El programa no ofrece consultoría puntual: desarrolla capacidades empresariales duraderas.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Cada organización participante adquiere herramientas que le permiten:
                </p>
              </div>
              <div>
                <ul className="space-y-4">
                  {capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 bg-bloom-surface rounded-xl border-l-4 border-bloom-navy">
                      <CheckCircle2 className="w-6 h-6 text-bloom-navy flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="aplicar" className="py-32 bg-bloom-navy">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-5xl font-bold mb-6 text-white">
                Aplica a <span className="font-accent italic text-bloom-pink font-normal">Bloom Xcelerate</span>
              </h2>
              <p className="text-xl text-white/80">
                Completa el formulario y nuestro equipo evaluará tu aplicación en 48 horas.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-bloom-navy mb-3">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-purple focus:outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-bloom-navy mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-purple focus:outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-bloom-navy mb-3">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-purple focus:outline-none"
                      placeholder="+507 0000 0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-bloom-navy mb-3">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-purple focus:outline-none"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                {/* Industry & Team Size */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-bold text-bloom-navy mb-3">
                      Industria *
                    </label>
                    <input
                      type="text"
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-purple focus:outline-none"
                      placeholder="Ej: Tecnología, Agricultura, etc."
                    />
                  </div>
                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-bold text-bloom-navy mb-3">
                      Tamaño del equipo *
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-purple focus:outline-none"
                    >
                      <option value="">Selecciona...</option>
                      <option value="1-5">1-5 personas</option>
                      <option value="6-10">6-10 personas</option>
                      <option value="11-25">11-25 personas</option>
                      <option value="26-50">26-50 personas</option>
                      <option value="50+">Más de 50</option>
                    </select>
                  </div>
                </div>

                {/* Revenue */}
                <div>
                  <label htmlFor="revenue" className="block text-sm font-bold text-bloom-navy mb-3">
                    Ingresos anuales aproximados *
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-purple focus:outline-none"
                  >
                    <option value="">Selecciona...</option>
                    <option value="0-50k">$0 - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m+">Más de $1M</option>
                  </select>
                </div>

                {/* Challenge */}
                <div>
                  <label htmlFor="challenge" className="block text-sm font-bold text-bloom-navy mb-3">
                    Principal desafío actual *
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-purple focus:outline-none resize-none"
                    placeholder="¿Cuál es el mayor reto que enfrenta tu empresa?"
                  />
                </div>

                {/* Goals */}
                <div>
                  <label htmlFor="goals" className="block text-sm font-bold text-bloom-navy mb-3">
                    Objetivos con Bloom Xcelerate *
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-purple focus:outline-none resize-none"
                    placeholder="¿Qué esperas lograr con este programa?"
                  />
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-bold text-bloom-navy mb-3">
                    ¿Cuándo te gustaría comenzar? *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-purple focus:outline-none"
                  >
                    <option value="">Selecciona...</option>
                    <option value="inmediato">Inmediatamente</option>
                    <option value="1-mes">En 1 mes</option>
                    <option value="2-3-meses">En 2-3 meses</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-5 bg-bloom-navy text-white rounded-xl font-bold text-lg hover:bg-bloom-purple transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Enviar Aplicación <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas que Bloom Innova se ponga en contacto contigo para evaluar tu aplicación.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
