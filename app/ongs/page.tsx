'use client';

import React, { useState } from 'react';
import { ArrowRight, Globe, CheckCircle2, DollarSign, Heart, Users, BarChart3, Shield, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OngsPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    organizacion: '',
    email: '',
    telefono: '',
    area: '',
    presupuesto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Teoría del Cambio',
      description: 'Estructura clara de cómo tu ONG genera transformación. Mapeo de beneficiarios, actividades, outputs y outcomes verificables.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Sistema de Medición',
      description: 'Indicadores alineados a ODS y estándares internacionales. Dashboard para reportar a donantes y aliados con evidencia técnica.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sostenibilidad Financiera',
      description: 'Diversificación de fuentes de ingreso, preparación para fondos institucionales y construcción de modelo sostenible.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Fortalecimiento Institucional',
      description: 'Gobernanza, transparencia y capacidades organizacionales que generan confianza con donantes y cooperantes.'
    }
  ];

  const funds = [
    {
      type: 'Fondos de Cooperación Internacional',
      description: 'Grants de agencias multilaterales y bilaterales para proyectos con impacto social o ambiental verificable.',
      amount: '$100K - $5M USD',
      requirements: ['Teoría del Cambio clara', 'Sistema de M&E robusto', 'Capacidad de ejecución comprobada'],
      examples: ['USAID', 'GIZ', 'AECID', 'JICA', 'Unión Europea']
    },
    {
      type: 'Fundaciones Privadas',
      description: 'Financiamiento de fundaciones corporativas y familiares que buscan impacto medible y transparencia.',
      amount: '$50K - $2M USD',
      requirements: ['Impacto demostrable', 'Reportes verificables', 'Alineación con prioridades del donante'],
      examples: ['Fundación Avina', 'Open Society', 'Ford Foundation']
    },
    {
      type: 'Fondos Temáticos Globales',
      description: 'Financiamiento especializado en áreas como clima, género, educación, salud o derechos humanos.',
      amount: '$200K - $10M USD',
      requirements: ['Expertise técnico', 'Evidencia de impacto', 'Alianzas estratégicas'],
      examples: ['Global Fund', 'Green Climate Fund', 'Fondo Malala']
    },
    {
      type: 'Contratos con Gobierno',
      description: 'Ejecución de programas públicos mediante licitaciones y convenios con entidades estatales.',
      amount: '$100K - $3M USD',
      requirements: ['Registro legal', 'Capacidad técnica', 'Experiencia comprobada'],
      examples: ['MIDES', 'Ministerios sectoriales', 'Gobiernos locales']
    },
    {
      type: 'Filantropía Corporativa',
      description: 'Alianzas con empresas que buscan generar impacto social como parte de su estrategia ESG.',
      amount: '$50K - $1M USD',
      requirements: ['Proyecto alineado a ESG corporativo', 'Métricas claras', 'Capacidad de reporte'],
      examples: ['Programas de RSE', 'Fundaciones corporativas']
    },
    {
      type: 'Crowdfunding y Donantes Individuales',
      description: 'Financiamiento colectivo mediante plataformas digitales y campañas de recaudación.',
      amount: '$10K - $500K USD',
      requirements: ['Narrativa de impacto clara', 'Transparencia', 'Comunicación efectiva'],
      examples: ['GlobalGiving', 'GoFundMe', 'Patreon']
    }
  ];

  const benefits = [
    'Evidencia verificable que genera confianza con donantes',
    'Acceso a fondos institucionales de cooperación internacional',
    'Sostenibilidad financiera mediante diversificación de ingresos',
    'Fortalecimiento de gobernanza y transparencia',
    'Alianzas estratégicas con gobierno y sector privado',
    'Escalamiento de impacto con métricas claras'
  ];

  const stats = [
    { number: '$2.5B', label: 'en fondos de cooperación disponibles en LATAM' },
    { number: '70%', label: 'de ONGs no miden impacto adecuadamente' },
    { number: '3x', label: 'más probabilidad de acceder a fondos con M&E' },
    { number: '85%', label: 'de donantes exigen reportes verificables' }
  ];

  return (
    <>
      <Navbar variant="dark" />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full mb-6 shadow-lg border border-white/20">
                  <Globe className="w-5 h-5 text-bloom-pink" />
                  <span className="text-white font-bold text-sm uppercase tracking-wide">Para ONGs</span>
                </div>
                
                <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                  Fortalece la <span className="font-accent italic text-bloom-pink font-normal">confianza</span>
                </h1>
                
                <p className="text-2xl text-white/90 mb-8 font-light leading-relaxed">
                  Sostenibilidad financiera mediante evidencias claras de impacto que atraen donantes y cooperantes.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#contacto" 
                    className="inline-flex items-center gap-2 bg-bloom-pink text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-bloom-navy transition-all shadow-xl"
                  >
                    Fortalecer mi ONG <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="/diagnostico" 
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/20"
                  >
                    Diagnóstico gratuito
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-bloom-pink/20 rounded-[3rem] rotate-3 blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop"
                  alt="ONGs"
                  className="relative rounded-[3rem] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-bloom-navy mb-3">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-32 bg-bloom-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                  El desafío de las <span className="font-accent italic text-bloom-blue font-normal">ONGs</span> hoy
                </h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Las organizaciones sociales enfrentan una realidad compleja:
                </p>
                <ul className="space-y-4">
                  {[
                    'Donantes exigen evidencia verificable de impacto',
                    'Fondos institucionales requieren sistemas de M&E robustos',
                    'Competencia creciente por recursos limitados',
                    'Necesidad de diversificar fuentes de financiamiento',
                    'Presión por transparencia y rendición de cuentas'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-bloom-blue mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-bloom-navy rounded-[3rem] p-10 md:p-12 text-white">
                <Heart className="w-12 h-12 text-bloom-pink mb-6" />
                <p className="text-2xl font-light leading-relaxed mb-6">
                  <span className="font-bold text-bloom-pink">El impacto real</span> no se mide por intenciones. Se demuestra con evidencia técnica que genera confianza.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Las ONGs que invierten en sistemas de medición profesionales acceden a 3x más fondos que aquellas que solo reportan narrativas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                Qué hacemos por <span className="font-accent italic text-bloom-purple font-normal">tu ONG</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Fortalecemos organizaciones sociales con metodología, evidencia y sostenibilidad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-bloom-surface rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-xl bg-bloom-blue flex items-center justify-center mb-6 text-white">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-bloom-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-bloom-blue/10 rounded-[3rem] -rotate-2"></div>
                <div className="relative bg-white rounded-[3rem] p-10 md:p-12 shadow-2xl">
                  <Shield className="w-12 h-12 text-bloom-blue mb-6" />
                  <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-6">
                    Transparencia que genera confianza
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Con Bloom, tu ONG tendrá:
                  </p>
                  <ul className="space-y-3">
                    {['Dashboard de impacto en tiempo real', 'Reportes automatizados para donantes', 'Certificaciones de impacto verificable', 'Gobernanza fortalecida'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-bloom-blue flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                  Por qué trabajar con <span className="font-accent italic text-bloom-blue font-normal">Bloom</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Entendemos los desafíos únicos de las organizaciones sociales. No somos consultores genéricos.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-bloom-blue flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Funds Section */}
        <section className="py-32 bg-bloom-navy text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Fondos a los que puedes <span className="font-accent italic text-bloom-pink font-normal">acceder</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
                Con sistemas de medición profesionales, tu ONG puede acceder a fondos institucionales de gran escala.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {funds.map((fund, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-heading text-xl font-bold flex-1 leading-tight">
                      {fund.type}
                    </h3>
                    <DollarSign className="w-6 h-6 text-bloom-pink flex-shrink-0" />
                  </div>
                  <p className="text-white/80 mb-4 leading-relaxed text-sm">
                    {fund.description}
                  </p>
                  <div className="text-2xl font-bold text-bloom-pink mb-4">
                    {fund.amount}
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-bold text-white/70 mb-2 uppercase tracking-wide">Requisitos:</p>
                    <ul className="space-y-1">
                      {fund.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/80 text-xs">
                          <CheckCircle2 className="w-3 h-3 text-bloom-pink flex-shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <p className="text-xs text-white/70 mb-1">Ejemplos:</p>
                    <p className="text-xs text-white/90">{fund.examples.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contacto" className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                Fortalece tu <span className="font-accent italic text-bloom-pink font-normal">ONG</span>
              </h2>
              <p className="text-xl text-gray-600">
                Conversemos sobre cómo podemos ayudarte a generar mayor impacto.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-bloom-surface rounded-[3rem] p-10 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-bloom-navy mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-bloom-navy mb-2">
                    Nombre de la organización *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organizacion}
                    onChange={(e) => setFormData({...formData, organizacion: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                    placeholder="Tu ONG"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-bloom-navy mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                    placeholder="tu@ong.org"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-bloom-navy mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                    placeholder="+507 0000-0000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-bloom-navy mb-2">
                    Área de trabajo *
                  </label>
                  <select
                    required
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                  >
                    <option value="">Selecciona un área</option>
                    <option value="educacion">Educación</option>
                    <option value="salud">Salud</option>
                    <option value="ambiente">Medio Ambiente</option>
                    <option value="derechos">Derechos Humanos</option>
                    <option value="desarrollo">Desarrollo Comunitario</option>
                    <option value="genero">Género e Inclusión</option>
                    <option value="infancia">Infancia y Juventud</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-bloom-navy mb-2">
                    Presupuesto anual *
                  </label>
                  <select
                    required
                    value={formData.presupuesto}
                    onChange={(e) => setFormData({...formData, presupuesto: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="0-100k">$0 - $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m+">$5M+</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-bloom-navy mb-2">
                  ¿Qué desafíos enfrenta tu organización?
                </label>
                <textarea
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tus necesidades..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-bloom-navy text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-bloom-purple transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Enviar solicitud <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
