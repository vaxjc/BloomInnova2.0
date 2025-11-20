'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, BarChart3, TrendingUp, Target, Zap, Shield, Globe, LineChart, PieChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MetricsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    employees: '',
    currentTracking: '',
    goals: ''
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
    console.log('Demo request submitted:', formData);
    alert('¡Gracias! Te contactaremos pronto para agendar tu demo.');
    setFormData({
      name: '',
      email: '',
      company: '',
      industry: '',
      employees: '',
      currentTracking: '',
      goals: ''
    });
  };

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Dashboard Profesional',
      description: 'Visualiza tu impacto en tiempo real con dashboards interactivos y personalizables'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Métricas ESG/ODS/IRIS+',
      description: 'Implementa estándares internacionales de medición de impacto automáticamente'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Reportes Automatizados',
      description: 'Genera reportes profesionales para inversionistas y stakeholders en minutos'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Integración Fácil',
      description: 'Conecta tus datos existentes y comienza a medir impacto inmediatamente'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Datos Seguros',
      description: 'Tus datos están protegidos con encriptación de nivel empresarial'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Acceso Global',
      description: 'Accede a tus métricas desde cualquier lugar, en cualquier dispositivo'
    }
  ];

  const metrics = [
    {
      category: 'Ambiental',
      icon: <Globe className="w-5 h-5" />,
      items: ['Huella de carbono', 'Consumo energético', 'Gestión de residuos', 'Uso de agua']
    },
    {
      category: 'Social',
      icon: <Target className="w-5 h-5" />,
      items: ['Diversidad e inclusión', 'Bienestar laboral', 'Impacto comunitario', 'Derechos humanos']
    },
    {
      category: 'Gobernanza',
      icon: <Shield className="w-5 h-5" />,
      items: ['Transparencia', 'Ética empresarial', 'Cumplimiento', 'Gestión de riesgos']
    },
    {
      category: 'ODS',
      icon: <TrendingUp className="w-5 h-5" />,
      items: ['Alineación con ODS', 'Indicadores específicos', 'Progreso medible', 'Reportes ONU']
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$1,200',
      period: '/año',
      description: 'Perfecto para empresas que comienzan a medir impacto',
      features: [
        'Dashboard básico',
        'Hasta 10 métricas',
        '1 usuario',
        'Reportes mensuales',
        'Soporte por email',
        'Facturación anual'
      ],
      cta: 'Comenzar',
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,600',
      period: '/año',
      description: 'Para empresas que necesitan medición avanzada',
      features: [
        'Dashboard avanzado',
        'Métricas ilimitadas',
        'Hasta 5 usuarios',
        'Reportes personalizados',
        'Soporte prioritario',
        'Integraciones API',
        'Análisis predictivo',
        'Facturación anual'
      ],
      cta: 'Solicitar Demo',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '/año',
      description: 'Solución personalizada para grandes organizaciones',
      features: [
        'Todo en Professional',
        'Usuarios ilimitados',
        'Consultoría dedicada',
        'Onboarding personalizado',
        'SLA garantizado',
        'White label',
        'Soporte 24/7',
        'Facturación anual'
      ],
      cta: 'Contactar',
      popular: false
    }
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
                <div className="inline-block px-6 py-3 bg-white/10 rounded-full mb-6 border border-white/20">
                  <span className="text-bloom-pink font-bold text-sm uppercase tracking-wide">SaaS de Métricas</span>
                </div>
                
                <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                  Bloom <span className="font-accent italic text-bloom-pink font-normal">Metrics</span>
                </h1>
                
                <p className="text-2xl text-white/90 mb-8 font-light leading-relaxed">
                  La plataforma SaaS que transforma tu impacto en datos profesionales que <span className="font-bold text-bloom-pink">atraen inversión</span>.
                </p>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-bloom-pink flex-shrink-0" />
                    <span className="text-white/80 text-lg">Implementa métricas ESG/ODS/IRIS+ en minutos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-bloom-pink flex-shrink-0" />
                    <span className="text-white/80 text-lg">Dashboards profesionales listos para inversionistas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-bloom-pink flex-shrink-0" />
                    <span className="text-white/80 text-lg">Reportes automatizados que ahorran 20+ horas/mes</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#demo" 
                    className="inline-flex items-center gap-2 bg-bloom-pink text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-bloom-navy transition-all shadow-2xl hover:scale-105 duration-300"
                  >
                    Solicitar Demo <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#planes" 
                    className="inline-flex items-center gap-2 bg-white text-bloom-navy px-10 py-5 rounded-full font-bold text-lg hover:bg-bloom-surface transition-all shadow-xl"
                  >
                    Ver Planes
                  </a>
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="relative">
                <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl border-2 border-bloom-pink">
                  <div className="space-y-6">
                    {/* Mock Dashboard Header */}
                    <div className="flex items-center justify-between pb-6 border-b-2 border-gray-200">
                      <h3 className="font-heading text-2xl font-bold text-bloom-navy">Dashboard de Impacto</h3>
                      <div className="flex gap-3">
                        <div className="w-4 h-4 rounded-full bg-bloom-pink shadow-lg"></div>
                        <div className="w-4 h-4 rounded-full bg-bloom-purple shadow-lg"></div>
                        <div className="w-4 h-4 rounded-full bg-bloom-blue shadow-lg"></div>
                      </div>
                    </div>
                    
                    {/* Mock Metrics - 3 columns */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gradient-to-br from-green-100/40 to-green-50/20 p-4 rounded-xl border border-green-200/50 shadow-sm">
                        <LineChart className="w-6 h-6 text-green-600 mb-2" />
                        <div className="text-2xl font-bold text-bloom-navy mb-0.5">+45%</div>
                        <div className="text-xs font-medium text-gray-700">Reducción CO2</div>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-100/40 to-emerald-50/20 p-4 rounded-xl border border-emerald-200/50 shadow-sm">
                        <PieChart className="w-6 h-6 text-emerald-600 mb-2" />
                        <div className="text-2xl font-bold text-bloom-navy mb-0.5">12/17</div>
                        <div className="text-xs font-medium text-gray-700">ODS Activos</div>
                      </div>
                      <div className="bg-gradient-to-br from-teal-100/40 to-teal-50/20 p-4 rounded-xl border border-teal-200/50 shadow-sm">
                        <Target className="w-6 h-6 text-teal-600 mb-2" />
                        <div className="text-2xl font-bold text-bloom-navy mb-0.5">250+</div>
                        <div className="text-xs font-medium text-gray-700">Beneficiarios</div>
                      </div>
                    </div>

                    {/* Mock Chart */}
                    <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-end justify-between gap-1.5 h-24">
                        {[40, 65, 45, 80, 60, 90].map((height, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t shadow-sm" style={{ height: `${height}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                Funcionalidades <span className="font-accent italic text-bloom-navy font-normal">poderosas</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Todo lo que necesitas para medir, analizar y comunicar tu impacto de forma profesional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-bloom-surface rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-bloom-navy"
                >
                  <div className="absolute -top-6 left-8 w-14 h-14 rounded-2xl bg-bloom-navy flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="pt-6">
                    <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Categories */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Métricas que <span className="font-accent italic text-bloom-pink font-normal">importan</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
                Mide lo que realmente genera valor para tu empresa y tus stakeholders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-bloom-pink"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-bloom-pink/10 flex items-center justify-center text-bloom-pink">
                      {metric.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-bloom-navy">
                      {metric.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {metric.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-bloom-pink flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="planes" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-bloom-navy leading-tight">
                Planes que se adaptan a <span className="font-accent italic text-bloom-navy font-normal">tu empresa</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Elige el plan perfecto para comenzar a medir tu impacto hoy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-[2.5rem] p-10 transition-all duration-500 ${
                    plan.popular
                      ? 'bg-bloom-navy text-white shadow-2xl scale-105 border-4 border-bloom-pink'
                      : 'bg-white shadow-xl hover:shadow-2xl border-2 border-bloom-navy'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-bloom-pink text-white px-6 py-2 rounded-full text-sm font-bold">
                        Más Popular
                      </div>
                    </div>
                  )}
                  
                  <h3 className={`font-heading text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-bloom-navy'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-8">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-bloom-navy'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-bloom-pink' : 'text-bloom-blue'}`} />
                        <span className={plan.popular ? 'text-white/90' : 'text-gray-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#demo"
                    className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${
                      plan.popular
                        ? 'bg-white text-bloom-navy hover:bg-bloom-pink hover:text-white'
                        : 'bg-bloom-navy text-white hover:bg-bloom-blue'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Form */}
        <section id="demo" className="py-32 bg-bloom-navy">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-5xl font-bold mb-6 text-white">
                Solicita tu <span className="font-accent italic text-bloom-pink font-normal">demo gratuita</span>
              </h2>
              <p className="text-xl text-white/80">
                Descubre cómo Bloom Metrics puede transformar la forma en que mides tu impacto.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-blue focus:outline-none"
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
                      className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-blue focus:outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-blue focus:outline-none"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
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
                      className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-blue focus:outline-none"
                      placeholder="Ej: Tecnología, Agricultura"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="employees" className="block text-sm font-bold text-bloom-navy mb-3">
                    Número de empleados *
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-blue focus:outline-none"
                  >
                    <option value="">Selecciona...</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">Más de 500</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="currentTracking" className="block text-sm font-bold text-bloom-navy mb-3">
                    ¿Actualmente mides tu impacto? *
                  </label>
                  <select
                    id="currentTracking"
                    name="currentTracking"
                    value={formData.currentTracking}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-blue focus:outline-none"
                  >
                    <option value="">Selecciona...</option>
                    <option value="no">No, queremos comenzar</option>
                    <option value="manual">Sí, manualmente</option>
                    <option value="basic">Sí, con herramientas básicas</option>
                    <option value="advanced">Sí, con software especializado</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-bold text-bloom-navy mb-3">
                    ¿Qué esperas lograr con Bloom Metrics? *
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-blue focus:outline-none resize-none"
                    placeholder="Cuéntanos tus objetivos..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-bloom-navy text-white rounded-xl font-bold text-lg hover:bg-bloom-blue transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Solicitar Demo Gratuita <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas que Bloom Innova se ponga en contacto contigo para agendar tu demo.
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
