'use client';

import React, { useState } from 'react';
import { ArrowRight, Zap, CheckCircle2, DollarSign, TrendingUp, Rocket, Target, Lightbulb, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MipymesPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    sector: '',
    facturacion: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Claridad Estratégica',
      description: 'Diagnóstico completo de tu modelo de negocio, visión de impacto y desafío central. Construimos tu narrativa estratégica.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Teoría del Cambio',
      description: 'Mapeamos cómo tu negocio genera transformación real. Identificamos beneficiarios, vías de impacto y resultados esperados.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Marco Lógico y Métricas',
      description: 'Construimos tu hoja de ruta con indicadores IRIS+ y ODS. Dashboard profesional para demostrar resultados.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Preparación para Capital',
      description: 'Pitch deck, entregables técnicos y conexión directa con fondos de impacto, cooperación internacional y capital semilla.'
    }
  ];

  const funds = [
    {
      type: 'Capital Semilla de Impacto',
      description: 'Inversión inicial para MiPyMEs con modelo de negocio regenerativo y potencial de escalamiento.',
      amount: '$50K - $500K USD',
      requirements: ['Modelo de negocio validado', 'Teoría del Cambio clara', 'Equipo comprometido'],
      examples: ['Pomona Impact', 'ANDE', 'Village Capital']
    },
    {
      type: 'Fondos de Cooperación Internacional',
      description: 'Grants y financiamiento concesional para proyectos con alto impacto social o ambiental.',
      amount: '$100K - $1M USD',
      requirements: ['Proyecto con impacto medible', 'Marco Lógico estructurado', 'Capacidad de ejecución'],
      examples: ['SENACYT', 'BID Lab', 'USAID', 'GIZ']
    },
    {
      type: 'Programas de Aceleración',
      description: 'Financiamiento + mentoría para empresas en etapa de crecimiento con impacto verificable.',
      amount: '$25K - $250K USD',
      requirements: ['Tracción comercial', 'Impacto demostrable', 'Escalabilidad clara'],
      examples: ['Endeavor', 'Seedstars', 'Mass Challenge']
    },
    {
      type: 'Fondos Gubernamentales',
      description: 'Apoyo estatal para MiPyMEs que generan empleo, innovación y desarrollo local.',
      amount: '$50K - $300K USD',
      requirements: ['Registro legal', 'Plan de negocio', 'Impacto local medible'],
      examples: ['AMPYME', 'INADEH', 'Fondos sectoriales']
    },
    {
      type: 'Encadenamientos Corporativos',
      description: 'Integración en cadenas de valor de empresas grandes que buscan proveedores sostenibles.',
      amount: '$100K - $2M USD',
      requirements: ['Capacidad productiva', 'Certificaciones', 'Métricas de impacto'],
      examples: ['Programas corporativos', 'Bloom for Corporates']
    },
    {
      type: 'Inversión de Ángeles de Impacto',
      description: 'Capital privado de inversionistas que buscan retorno financiero + impacto social/ambiental.',
      amount: '$25K - $200K USD',
      requirements: ['Pitch deck profesional', 'Modelo escalable', 'Evidencia de impacto'],
      examples: ['Redes de ángeles', 'Family offices', 'HNWIs']
    }
  ];

  const benefits = [
    'Acceso a $500M+ en fondos de impacto disponibles en LATAM',
    'Integración en cadenas de valor de empresas corporativas',
    'Ventaja competitiva con métricas verificables',
    'Conexión directa con inversionistas y fondos',
    'Fortalecimiento de capacidades y gobernanza',
    'Escalamiento con propósito y sostenibilidad financiera'
  ];

  const stats = [
    { number: '100%', label: 'de Bloomers acceden a capital o alianzas' },
    { number: '$266K', label: 'promedio levantado por empresa' },
    { number: '+20', label: 'MiPyMEs aceleradas con éxito' },
    { number: '6 meses', label: 'para estar lista para fondos' }
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
                  <Zap className="w-5 h-5 text-bloom-pink" />
                  <span className="text-white font-bold text-sm uppercase tracking-wide">Para MIPYMEs</span>
                </div>
                
                <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                  Prepárate para <span className="font-accent italic text-bloom-pink font-normal">crecer</span>
                </h1>
                
                <p className="text-2xl text-white/90 mb-8 font-light leading-relaxed">
                  Accede a fondos, intégrate en cadenas de valor sostenibles y escala tu negocio con impacto medible.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#contacto" 
                    className="inline-flex items-center gap-2 bg-bloom-pink text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-bloom-navy transition-all shadow-xl"
                  >
                    Aplicar a Bloom Xcelerate <ArrowRight className="w-5 h-5" />
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
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
                  alt="MIPYMEs"
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

        {/* Services Section */}
        <section className="py-32 bg-bloom-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                Qué hacemos por <span className="font-accent italic text-bloom-purple font-normal">tu MiPyME</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Transformamos tu empresa con metodología probada en 6 fases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-xl bg-bloom-purple flex items-center justify-center mb-6 text-white">
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

            <div className="bg-bloom-navy rounded-[3rem] p-12 md:p-16 text-center">
              <Award className="w-12 h-12 text-bloom-pink mx-auto mb-6" />
              <p className="text-3xl text-white font-light leading-relaxed mb-6">
                <span className="font-bold text-bloom-pink">Bloom Xcelerate</span> es el programa de aceleración diseñado específicamente para MiPyMEs regenerativas.
              </p>
              <a 
                href="/xcelerate"
                className="inline-flex items-center gap-2 bg-bloom-pink text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-bloom-navy transition-all shadow-xl"
              >
                Conocer el programa <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-bloom-purple/10 rounded-[3rem] -rotate-2"></div>
                <div className="relative bg-bloom-navy rounded-[3rem] p-10 md:p-12 text-white">
                  <Rocket className="w-12 h-12 text-bloom-pink mb-6" />
                  <h3 className="font-heading text-2xl font-bold mb-6">
                    Casos de éxito
                  </h3>
                  <div className="space-y-6">
                    {[
                      { company: 'Munily', result: '$450K en fondos de cooperación' },
                      { company: 'Leafsync', result: 'Modelo escalable + alianzas' },
                      { company: 'Undercover Boots', result: '$200K+ expansión comercial' }
                    ].map((item, i) => (
                      <div key={i} className="border-l-4 border-bloom-pink pl-4">
                        <p className="font-bold text-lg">{item.company}</p>
                        <p className="text-white/80">{item.result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                  Por qué trabajar con <span className="font-accent italic text-bloom-pink font-normal">Bloom</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  No somos una aceleradora tradicional. Somos especialistas en transformar MiPyMEs en empresas listas para capital de impacto.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-bloom-purple flex-shrink-0 mt-1" />
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
                Con Bloom, tu MiPyME estará preparada para acceder a múltiples fuentes de financiamiento.
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
                Aplica a <span className="font-accent italic text-bloom-pink font-normal">Bloom Xcelerate</span>
              </h2>
              <p className="text-xl text-gray-600">
                Completa el formulario y nos pondremos en contacto contigo.
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
                    Nombre de la empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                    placeholder="Tu MiPyME"
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
                    placeholder="tu@email.com"
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
                    Sector *
                  </label>
                  <select
                    required
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                  >
                    <option value="">Selecciona un sector</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="agroalimentario">Agroalimentario</option>
                    <option value="manufactura">Manufactura</option>
                    <option value="servicios">Servicios</option>
                    <option value="educacion">Educación</option>
                    <option value="salud">Salud</option>
                    <option value="energia">Energía</option>
                    <option value="turismo">Turismo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-bloom-navy mb-2">
                    Facturación anual *
                  </label>
                  <select
                    required
                    value={formData.facturacion}
                    onChange={(e) => setFormData({...formData, facturacion: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="0-50k">$0 - $50K</option>
                    <option value="50k-200k">$50K - $200K</option>
                    <option value="200k-500k">$200K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m+">$1M+</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-bloom-navy mb-2">
                  ¿Por qué quieres unirte a Bloom Xcelerate?
                </label>
                <textarea
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tu empresa y objetivos..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-bloom-navy text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-bloom-purple transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Enviar aplicación <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
