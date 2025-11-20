'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Instagram } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Navbar variant="dark" />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Hablemos de <span className="font-accent italic text-bloom-pink font-normal">impacto</span>
              </h1>
              
              <p className="text-2xl text-white/90 mb-8 font-light leading-relaxed">
                Estamos listos para ayudarte a transformar tu empresa en una organización regenerativa.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-4xl font-bold mb-8 text-bloom-navy">
                  Información de <span className="font-accent italic text-bloom-navy font-normal">contacto</span>
                </h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4 p-6 bg-bloom-surface rounded-2xl border-l-4 border-bloom-navy">
                    <div className="w-12 h-12 rounded-xl bg-bloom-navy flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-bloom-navy mb-1">Email</h3>
                      <a href="mailto:hola@bloominnova.com" className="text-gray-700 hover:text-bloom-pink transition-colors">
                        hola@bloominnova.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-bloom-surface rounded-2xl border-l-4 border-bloom-navy">
                    <div className="w-12 h-12 rounded-xl bg-bloom-navy flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-bloom-navy mb-1">Teléfono</h3>
                      <a href="tel:+50712345678" className="text-gray-700 hover:text-bloom-pink transition-colors">
                        +507 1234-5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-bloom-surface rounded-2xl border-l-4 border-bloom-navy">
                    <div className="w-12 h-12 rounded-xl bg-bloom-navy flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-bloom-navy mb-1">Ubicación</h3>
                      <p className="text-gray-700">
                        Ciudad del Saber<br />
                        Panamá, Panamá
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-6 text-bloom-navy">
                    Síguenos
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-xl bg-bloom-navy flex items-center justify-center hover:bg-bloom-pink transition-all"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-xl bg-bloom-navy flex items-center justify-center hover:bg-bloom-pink transition-all"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-bloom-surface rounded-[2.5rem] p-10 shadow-lg border-2 border-bloom-navy">
                <h2 className="font-heading text-3xl font-bold mb-6 text-bloom-navy">
                  Envíanos un mensaje
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-bold text-2xl text-green-700 mb-2">¡Mensaje enviado!</h3>
                    <p className="text-green-600">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-bloom-navy mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-bloom-navy focus:outline-none"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-bloom-navy mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-bloom-navy focus:outline-none"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-bloom-navy mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-bloom-navy focus:outline-none"
                        placeholder="+507 1234-5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-bloom-navy mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-bloom-navy focus:outline-none"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-bold text-bloom-navy mb-2">
                        Estoy interesado en *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-bloom-navy focus:outline-none"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="xcelerate">Bloom Xcelerate</option>
                        <option value="metrics">Bloom Metrics</option>
                        <option value="corporates">Bloom for Corporates</option>
                        <option value="consultoria">Consultoría</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-bloom-navy mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-bloom-navy focus:outline-none resize-none"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-bloom-pink text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-bloom-navy transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Enviar mensaje <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              ¿Prefieres agendar una <span className="font-accent italic text-bloom-pink font-normal">llamada</span>?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Agenda una sesión de 30 minutos con nuestro equipo para conocer cómo podemos ayudarte.
            </p>
            <a
              href="https://calendly.com/bloominnova"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-bloom-pink text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-bloom-navy transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Agendar llamada
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
