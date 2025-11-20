'use client';

import React from 'react';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Twitter, Linkedin, Facebook, CheckCircle2, Lightbulb, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPostPage() {
  // En producción, esto vendría de una API o CMS basado en el slug
  const post = {
    title: 'El futuro de las empresas es regenerativo: por qué el impacto ya no es opcional',
    excerpt: 'Las empresas que integran impacto medible en su estrategia no solo acceden a capital. Están redefiniendo industrias completas.',
    category: 'Impacto',
    categoryColor: 'bloom-blue',
    author: 'Grecia Medina',
    authorRole: 'CEO, Bloom Innova',
    authorBio: 'Ingeniera Química con trayectoria en sostenibilidad. Impulsora de la Ley de Bolsas Plásticas en Panamá. Alumni Miller Center for Social Entrepreneurship.',
    date: '15 Nov 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&h=800&fit=crop'
  };

  const relatedPosts = [
    {
      title: 'Cómo medir impacto sin morir en el intento',
      category: 'Estrategia',
      categoryColor: 'bloom-purple',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      slug: 'medir-impacto-guia-practica'
    },
    {
      title: 'De la RSE tradicional a la estrategia regenerativa',
      category: 'Impacto',
      categoryColor: 'bloom-blue',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop',
      slug: 'rse-estrategia-regenerativa'
    },
    {
      title: '$500M en capital de impacto disponible',
      category: 'Capital',
      categoryColor: 'bloom-pink',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop',
      slug: 'capital-impacto-preparar-empresa'
    }
  ];

  const keyTakeaways = [
    'La economía regenerativa no es tendencia, es el nuevo estándar de negocios',
    'Empresas con impacto medible acceden a $500M+ en capital disponible',
    'El impacto integrado genera ventaja competitiva y atrae talento',
    'Metodologías como Teoría del Cambio transforman intenciones en resultados'
  ];

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <a 
              href="/blog"
              className="inline-flex items-center gap-2 text-bloom-navy hover:text-bloom-purple font-bold mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al blog
            </a>

            <div className={`inline-block px-4 py-2 bg-${post.categoryColor} text-white rounded-full font-bold text-sm mb-6`}>
              {post.category}
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-bloom-navy leading-tight">
              {post.title}
            </h1>

            <p className="text-2xl text-gray-600 mb-8 leading-relaxed font-light">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-bloom-navy flex items-center justify-center text-white font-bold text-xl">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-bloom-navy text-lg">{post.author}</p>
                  <p className="text-gray-600">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {post.readTime}
                </div>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">Compartir:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-bloom-surface hover:bg-bloom-navy hover:text-white transition-all flex items-center justify-center">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-bloom-surface hover:bg-bloom-navy hover:text-white transition-all flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-bloom-surface hover:bg-bloom-navy hover:text-white transition-all flex items-center justify-center">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-bloom-surface hover:bg-bloom-pink hover:text-white transition-all flex items-center justify-center">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Key Takeaways */}
            <div className="bg-bloom-surface rounded-[2.5rem] p-10 mb-16 border-l-4 border-bloom-pink">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-bloom-pink" />
                <h3 className="font-heading text-2xl font-bold text-bloom-navy">
                  Ideas clave
                </h3>
              </div>
              <ul className="space-y-4">
                {keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-bloom-pink flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700 leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading text-4xl font-bold text-bloom-navy mb-6 mt-12">
                La economía está cambiando. ¿Tu empresa también?
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Durante décadas, el modelo de negocio dominante fue simple: maximizar ganancias, externalizar costos ambientales y sociales, y tratar la responsabilidad social como un "extra" opcional. Ese modelo está muriendo.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                No porque sea moralmente incorrecto (que lo es), sino porque <strong className="text-bloom-navy">ya no es competitivo</strong>. Las empresas que siguen operando bajo ese paradigma están quedando fuera del continuo de capital, alianzas y talento.
              </p>

              <div className="bg-bloom-navy rounded-[2rem] p-10 my-12 text-white">
                <p className="text-2xl font-light leading-relaxed italic">
                  "Las empresas regenerativas no están reemplazando a las tradicionales por ser 'buenas'. Lo están haciendo porque son más rentables, resilientes y escalables."
                </p>
              </div>

              <h2 className="font-heading text-4xl font-bold text-bloom-navy mb-6 mt-12">
                ¿Qué significa ser regenerativo?
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Regenerativo no es solo "sostenible". Sostenible significa mantener el status quo sin empeorar las cosas. Regenerativo significa <strong className="text-bloom-purple">crear valor neto positivo</strong>: económico, social y ambiental.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-12">
                {[
                  { title: 'Sostenible', desc: 'No hacer más daño', color: 'gray' },
                  { title: 'Regenerativo', desc: 'Crear valor positivo', color: 'bloom-purple' },
                  { title: 'Transformador', desc: 'Redefinir industrias', color: 'bloom-pink' }
                ].map((item, i) => (
                  <div key={i} className={`bg-bloom-surface p-6 rounded-2xl border-2 ${i === 1 ? 'border-bloom-purple' : 'border-gray-200'}`}>
                    <h3 className={`font-heading text-xl font-bold mb-2 ${i === 1 ? 'text-bloom-purple' : 'text-gray-700'}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-heading text-4xl font-bold text-bloom-navy mb-6 mt-12">
                El impacto como ventaja competitiva
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Las empresas con impacto medible y verificable están accediendo a:
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Capital de impacto: $500M+ disponibles en LATAM',
                  'Talento de alto nivel que busca propósito',
                  'Clientes dispuestos a pagar más por marcas conscientes',
                  'Alianzas estratégicas con corporativos y gobierno',
                  'Reputación que abre mercados internacionales'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-bloom-blue flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-bloom-pink/10 border-l-4 border-bloom-pink rounded-r-2xl p-8 my-12">
                <p className="text-xl text-bloom-navy font-bold mb-4">
                  Dato clave:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El 100% de las empresas que completan el programa Bloom Xcelerate acceden a capital, fondos o alianzas estratégicas en los siguientes 12 meses.
                </p>
              </div>

              <h2 className="font-heading text-4xl font-bold text-bloom-navy mb-6 mt-12">
                Cómo empezar tu transformación regenerativa
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                La transición hacia un modelo regenerativo no es instantánea, pero tampoco es imposible. En Bloom, hemos desarrollado una metodología probada que transforma empresas en 6 fases:
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { num: '1', title: 'Claridad estratégica', desc: 'Define tu visión de impacto y modelo de negocio' },
                  { num: '2', title: 'Teoría del Cambio', desc: 'Mapea cómo generas transformación real' },
                  { num: '3', title: 'Marco Lógico', desc: 'Construye tu hoja de ruta con metas claras' },
                  { num: '4', title: 'Métricas verificables', desc: 'Implementa indicadores alineados a estándares globales' },
                  { num: '5', title: 'Preparación para capital', desc: 'Estructura tu pitch y entregables técnicos' },
                  { num: '6', title: 'Escalamiento', desc: 'Identifica rutas de expansión y alianzas' }
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-bloom-navy text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {phase.num}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-bloom-navy mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-gray-700">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-heading text-4xl font-bold text-bloom-navy mb-6 mt-12">
                El momento es ahora
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                La ventana de oportunidad para empresas regenerativas está abierta, pero no será para siempre. Los fondos de impacto están buscando empresas <em>ahora</em>. Los consumidores están cambiando sus preferencias <em>ahora</em>. Los gobiernos están creando incentivos <em>ahora</em>.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Las empresas que actúen en los próximos 2-3 años serán las que lideren sus industrias en la próxima década. Las que esperen, estarán jugando catch-up.
              </p>

              <div className="bg-bloom-navy rounded-[2rem] p-10 my-12 text-center">
                <p className="text-3xl text-white font-bold mb-6">
                  ¿Lista para ser regenerativa?
                </p>
                <a 
                  href="/diagnostico"
                  className="inline-flex items-center gap-2 bg-bloom-pink text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-bloom-navy transition-all shadow-xl"
                >
                  Iniciar diagnóstico gratuito
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-16 bg-bloom-surface">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-bloom-navy flex items-center justify-center text-white font-bold text-3xl flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-2">
                    {post.author}
                  </h3>
                  <p className="text-bloom-purple font-bold mb-4">{post.authorRole}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {post.authorBio}
                  </p>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-bloom-surface hover:bg-bloom-navy hover:text-white transition-all flex items-center justify-center">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-bloom-surface hover:bg-bloom-navy hover:text-white transition-all flex items-center justify-center">
                      <Twitter className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-4xl font-bold text-bloom-navy mb-12 text-center">
              Sigue leyendo
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related, index) => (
                <a
                  key={index}
                  href={`/blog/${related.slug}`}
                  className="group bg-bloom-surface rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={related.image} 
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 bg-${related.categoryColor} text-white rounded-full font-bold text-xs`}>
                      {related.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-bloom-navy group-hover:text-bloom-purple transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
