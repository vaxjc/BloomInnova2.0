'use client';

import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const ReadyToEvolve = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contacto" className="py-32 bg-bloom-navy relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            ¿Listo para <span className="font-accent italic text-bloom-pink font-normal">evolucionar?</span>
          </h2>
          <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
            Comienza tu transformación regenerativa hoy. Nuestro equipo está listo para acompañarte en cada paso.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-3xl font-bold text-white mb-6">
                Conectemos
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Cuéntanos sobre tu empresa y tus objetivos de impacto. Nos encantaría explorar cómo Bloom Innova puede ayudarte a escalar con propósito.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="w-12 h-12 rounded-full bg-bloom-blue/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <a href="mailto:contacto@bloominnova.com" className="text-white/70 hover:text-bloom-pink transition-colors">
                    contacto@bloominnova.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="w-12 h-12 rounded-full bg-bloom-purple/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Teléfono</h4>
                  <a href="tel:+50760000000" className="text-white/70 hover:text-bloom-pink transition-colors">
                    +507 6000 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="w-12 h-12 rounded-full bg-bloom-pink/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Ubicación</h4>
                  <p className="text-white/70">
                    Ciudad de Panamá, Panamá
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-white mb-4 font-semibold">Conoce más sobre nuestros servicios:</p>
              <div className="space-y-2">
                <a href="#programas" className="inline-flex items-center gap-2 text-bloom-pink font-bold hover:gap-3 transition-all">
                  Bloom Xcelerate <ArrowRight className="w-4 h-4" />
                </a>
                <br />
                <a href="#programas" className="inline-flex items-center gap-2 text-bloom-pink font-bold hover:gap-3 transition-all">
                  Bloom Metrics <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-white/80 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-bloom-navy mb-3">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-blue focus:outline-none bg-white transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-bloom-navy mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-blue focus:outline-none bg-white transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-bold text-bloom-navy mb-3">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-blue focus:outline-none bg-white transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-bloom-navy mb-3">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-bloom-blue focus:outline-none bg-white transition-colors resize-none"
                  placeholder="¿Cuál es tu objetivo de impacto? ¿Dónde necesitas apoyo?"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-bloom-navy text-white rounded-xl font-bold hover:bg-bloom-purple transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Iniciar Transformación <ArrowRight className="w-5 h-5" />
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center">
                Protegemos tu privacidad. Tus datos serán tratados de acuerdo a nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToEvolve;
