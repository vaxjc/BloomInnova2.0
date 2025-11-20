import React from 'react';
import { Sparkles } from 'lucide-react';

const CompanyStories = () => {
  const stories = [
    {
      logo: '/logo-asociaciones/munily.png',
      company: 'Munily',
      highlight: '+USD $120K conectados',
      description: 'Transformación completa del modelo de negocio y claridad total en su propuesta de impacto medible.',
      quote: '"Bloom nos ayudó a estructurar nuestra visión y conectarnos con capital que realmente entiende nuestro impacto."'
    },
    {
      logo: '/logo-asociaciones/leafsync.png',
      company: 'Leafsync',
      highlight: 'Modelo escalable + métricas claras',
      description: 'Narrativa de impacto fortalecida con teoría del cambio y dashboard profesional que abrió puertas a nuevos aliados.',
      quote: '"Con Bloom logramos demostrar nuestro impacto climático con evidencia técnica."'
    },
    {
      logo: '/logo-asociaciones/undercover.webp',
      company: 'Undercover Boots',
      highlight: 'Impacto climático + expansión comercial',
      description: 'Estrategia regenerativa integrada que conectó sostenibilidad con crecimiento de mercado.',
      quote: '"Bloom convirtió nuestro propósito en una ventaja competitiva real."'
    }
  ];

  const testimonials = [
    {
      text: '"Bloom nos dio la claridad que necesitábamos para demostrar nuestro impacto y acceder a capital de cooperación internacional."',
      author: 'Fundador, Munily'
    },
    {
      text: '"La metodología Blooming transformó nuestra forma de medir y comunicar impacto. Ahora tenemos métricas que hablan el lenguaje de los inversionistas."',
      author: 'CEO, Leafsync'
    },
    {
      text: '"Trabajar con Bloom fue el salto que necesitábamos: pasamos de tener buenas intenciones a tener evidencia verificable de nuestro impacto climático."',
      author: 'Directora, Undercover Boots'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <h2 className="font-heading text-5xl font-bold mb-6 text-bloom-navy leading-tight">
            <Sparkles className="w-10 h-10 text-bloom-purple inline-block mr-3" />
            Historias de empresas que ya están <span className="font-accent italic text-bloom-purple font-normal">Blooming</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Casos reales de transformación regenerativa con impacto medible.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-8 md:p-10">
                <div className="w-16 h-16 mb-6 rounded-lg bg-bloom-surface flex items-center justify-center">
                  <img 
                    src={story.logo} 
                    alt={story.company}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="font-heading text-3xl font-bold text-bloom-navy mb-3">
                  {story.company}
                </h3>
                <p className="text-bloom-blue font-bold mb-6 text-lg">{story.highlight}</p>
                <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                  {story.description}
                </p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-700 italic leading-relaxed font-accent text-lg">
                    {story.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ver más casos */}
        <div className="text-center mb-32">
          <a 
            href="#contacto" 
            className="text-bloom-navy hover:text-bloom-purple font-semibold transition-colors text-lg"
          >
            Ver más casos →
          </a>
        </div>

        {/* Testimonials Section */}
        <div className="relative rounded-[3rem] overflow-hidden bg-bloom-navy text-white p-12 md:p-16">
          <h3 className="font-heading text-4xl font-bold mb-12 leading-tight">
            💬 Lo que dicen quienes ya trabajan con Bloom
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="absolute -top-4 -left-4 text-6xl text-bloom-pink opacity-30">"</div>
                <p className="text-white/90 mb-6 leading-relaxed relative z-10">
                  {testimonial.text}
                </p>
                <p className="text-sm font-bold text-bloom-pink">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStories;
