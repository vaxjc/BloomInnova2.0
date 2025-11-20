'use client';

import React, { useState } from 'react';
import { ArrowRight, Building2, CheckCircle2, DollarSign, TrendingUp, BarChart3, Award, Globe, Target, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EmpresasPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    industria: '',
    empleados: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Medición de Impacto ESG',
      description: 'Dashboard profesional con indicadores alineados a estándares globales (GRI, SASB, TCFD) para reportes corporativos verificables.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Estrategia de Sostenibilidad',
      description: 'Integración de impacto en el core business, no como filantropía separada. Teoría del Cambio y Marco Lógico adaptados a corporativos.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Encadenamientos Productivos',
      description: 'Integración de MiPyMEs sostenibles en tu cadena de valor con medición de impacto en toda la cadena.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certificaciones y Reportes',
      description: 'Preparación para certificaciones B Corp, ISO 26000, y reportes de sostenibilidad que generan confianza con stakeholders.'
    }
  ];

  const funds = [
    {
      type: 'Bonos Verdes y Sostenibles',
      description: 'Financiamiento para proyectos con impacto ambiental o social medible.',
      amount: '$50M - $500M USD',
      requirements: ['Proyecto con impacto verificable', 'Métricas ESG claras', 'Reporte de impacto anual'],
      examples: ['BID Invest', 'IFC', 'CAF']
    },
    {
      type: 'Fondos de Inversión ESG',
      description: 'Capital para empresas con estrategias ESG integradas y métricas verificables.',
      amount: '$10M - $100M USD',
      requirements: ['Estrategia ESG documentada', 'Dashboard de métricas', 'Due diligence de impacto'],
      examples: ['Ameris Capital', 'IGNIA', 'Elevar Equity']
    },
    {
      type: 'Líneas de Crédito Verde',
      description: 'Financiamiento preferencial para empresas con certificaciones ambientales.',
      amount: '$5M - $50M USD',
      requirements: ['Certificación ambiental', 'Plan de sostenibilidad', 'Auditoría de impacto'],
      examples: ['Bancos comerciales', 'IFC', 'BCIE']
    },
    {
      type: 'Fondos Corporativos de Impacto',
      description: 'Alianzas estratégicas con corporativos que buscan integrar MiPyMEs sostenibles.',
      amount: '$1M - $20M USD',
      requirements: ['Modelo de negocio escalable', 'Impacto medible', 'Capacidad de integración'],
      examples: ['Programas corporativos', 'Fondos de innovación', 'Aceleradoras corporativas']
    }
  ];

  const benefits = [
    'Reputación corporativa fortalecida con evidencia verificable',
    'Acceso a capital verde y fondos ESG con tasas preferenciales',
    'Atracción y retención de talento comprometido con propósito',
    'Ventaja competitiva en licitaciones y contratos gubernamentales',
    'Reducción de riesgos regulatorios y operacionales',
    'Apertura de nuevos mercados y segmentos conscientes'
  ];

  const stats = [
    { number: '85%', label: 'de inversionistas consideran ESG en decisiones' },
    { number: '$35T', label: 'en activos bajo gestión con criterios ESG' },
    { number: '73%', label: 'de consumidores prefieren marcas sostenibles' },
    { number: '2x', label: 'más probabilidad de atraer talento top' }
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
                  <Building2 className="w-5 h-5 text-bloom-pink" />
                  <span className="text-white font-bold text-sm uppercase tracking-wide">Para Empresas</span>
                </div>
                
                <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                  Profesionaliza tu <span className="font-accent italic text-bloom-pink font-normal">sostenibilidad</span>
                </h1>
                
                <p className="text-2xl text-white/90 mb-8 font-light leading-relaxed">
                  Transforma tu estrategia ESG en ventaja competitiva con métricas verificables que atraen capital e inversionistas.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#contacto" 
                    className="inline-flex items-center gap-2 bg-bloom-pink text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-bloom-navy transition-all shadow-xl"
                  >
                    Agendar consultoría <ArrowRight className="w-5 h-5" />
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
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                  alt="Empresas"
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
                Qué hacemos por <span className="font-accent italic text-bloom-purple font-normal">tu empresa</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Soluciones integrales para empresas que quieren liderar con impacto medible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-xl bg-bloom-navy flex items-center justify-center mb-6 text-white">
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
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                  Por qué invertir en <span className="font-accent italic text-bloom-blue font-normal">sostenibilidad</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  La sostenibilidad profesionalizada no es un costo. Es una inversión estratégica que genera retornos medibles.
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

              <div className="relative">
                <div className="absolute inset-0 bg-bloom-blue/10 rounded-[3rem] -rotate-2"></div>
                <div className="relative bg-bloom-navy rounded-[3rem] p-10 md:p-12 text-white">
                  <Globe className="w-12 h-12 text-bloom-pink mb-6" />
                  <h3 className="font-heading text-2xl font-bold mb-6">
                    Casos de éxito corporativos
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Empresas que han transformado su estrategia ESG con Bloom han logrado:
                  </p>
                  <ul className="space-y-3">
                    {['Reducción de 40% en costos operacionales', 'Acceso a $50M+ en bonos verdes', 'Incremento de 25% en retención de talento', 'Apertura de 3 nuevos mercados internacionales'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-bloom-pink"></div>
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                Con estrategia ESG profesionalizada y métricas verificables, tu empresa puede acceder a capital preferencial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {funds.map((fund, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-heading text-2xl font-bold flex-1">
                      {fund.type}
                    </h3>
                    <DollarSign className="w-8 h-8 text-bloom-pink flex-shrink-0" />
                  </div>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {fund.description}
                  </p>
                  <div className="text-3xl font-bold text-bloom-pink mb-6">
                    {fund.amount}
                  </div>
                  <div className="mb-6">
                    <p className="text-sm font-bold text-white/70 mb-3 uppercase tracking-wide">Requisitos:</p>
                    <ul className="space-y-2">
                      {fund.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-bloom-pink flex-shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-white/70 mb-2">Ejemplos:</p>
                    <p className="text-sm text-white/90">{fund.examples.join(', ')}</p>
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
                Agenda tu <span className="font-accent italic text-bloom-pink font-normal">consultoría</span>
              </h2>
              <p className="text-xl text-gray-600">
                Conversemos sobre cómo profesionalizar la sostenibilidad de tu empresa.
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
                    Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-bloom-navy mb-2">
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                    placeholder="tu@empresa.com"
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
                    Industria *
                  </label>
                  <select
                    required
                    value={formData.industria}
                    onChange={(e) => setFormData({...formData, industria: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                  >
                    <option value="">Selecciona una industria</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="manufactura">Manufactura</option>
                    <option value="servicios">Servicios</option>
                    <option value="retail">Retail</option>
                    <option value="alimentos">Alimentos y Bebidas</option>
                    <option value="construccion">Construcción</option>
                    <option value="energia">Energía</option>
                    <option value="financiero">Financiero</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-bloom-navy mb-2">
                    Número de empleados *
                  </label>
                  <select
                    required
                    value={formData.empleados}
                    onChange={(e) => setFormData({...formData, empleados: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="50-200">50-200</option>
                    <option value="200-500">200-500</option>
                    <option value="500-1000">500-1,000</option>
                    <option value="1000+">1,000+</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-bloom-navy mb-2">
                  ¿Qué te gustaría lograr?
                </label>
                <textarea
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-bloom-purple focus:outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tus objetivos de sostenibilidad..."
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
