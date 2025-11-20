'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Leaf, DollarSign, Globe, Calendar, Clock, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = [
    { name: 'Todos', icon: <Sparkles className="w-4 h-4" />, color: 'bloom-navy' },
    { name: 'Impacto', icon: <Globe className="w-4 h-4" />, color: 'bloom-blue' },
    { name: 'Estrategia', icon: <TrendingUp className="w-4 h-4" />, color: 'bloom-purple' },
    { name: 'Capital', icon: <DollarSign className="w-4 h-4" />, color: 'bloom-pink' },
    { name: 'Sostenibilidad', icon: <Leaf className="w-4 h-4" />, color: 'bloom-green' }
  ];

  const featuredPost = {
    id: 1,
    title: 'El futuro de las empresas es regenerativo: por qué el impacto ya no es opcional',
    excerpt: 'Las empresas que integran impacto medible en su estrategia no solo acceden a capital. Están redefiniendo industrias completas.',
    category: 'Impacto',
    categoryColor: 'bloom-blue',
    author: 'Grecia Medina',
    authorRole: 'CEO, Bloom Innova',
    date: '15 Nov 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=600&fit=crop',
    slug: 'futuro-empresas-regenerativo'
  };

  const posts = [
    {
      id: 2,
      title: 'Cómo medir impacto sin morir en el intento: guía práctica para MiPyMEs',
      excerpt: 'La medición de impacto no tiene que ser compleja. Te mostramos cómo empezar con indicadores claros y verificables.',
      category: 'Estrategia',
      categoryColor: 'bloom-purple',
      author: 'Iris Barrios',
      date: '10 Nov 2024',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      slug: 'medir-impacto-guia-practica'
    },
    {
      id: 3,
      title: 'De la RSE tradicional a la estrategia regenerativa: el salto que tu empresa necesita',
      excerpt: 'La RSE como la conocemos está obsoleta. Descubre cómo transformar filantropía en estrategia de crecimiento.',
      category: 'Impacto',
      categoryColor: 'bloom-blue',
      author: 'Grecia Medina',
      date: '5 Nov 2024',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop',
      slug: 'rse-estrategia-regenerativa'
    },
    {
      id: 4,
      title: '$500M en capital de impacto disponible: cómo preparar tu empresa para acceder',
      excerpt: 'Fondos de impacto, bonos verdes y capital concesional están buscando empresas. ¿Estás lista?',
      category: 'Capital',
      categoryColor: 'bloom-pink',
      author: 'Juan Varela',
      date: '1 Nov 2024',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop',
      slug: 'capital-impacto-preparar-empresa'
    },
    {
      id: 5,
      title: 'Teoría del Cambio: el mapa que conecta tu negocio con impacto real',
      excerpt: 'No es magia. Es metodología. Aprende cómo la Teoría del Cambio transforma intenciones en resultados medibles.',
      category: 'Estrategia',
      categoryColor: 'bloom-purple',
      author: 'Iris Barrios',
      date: '28 Oct 2024',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      slug: 'teoria-cambio-impacto-real'
    },
    {
      id: 6,
      title: 'Economía circular vs economía regenerativa: ¿cuál es la diferencia?',
      excerpt: 'Ambas buscan sostenibilidad, pero solo una crea valor exponencial. Descubre por qué regenerativo es el siguiente nivel.',
      category: 'Sostenibilidad',
      categoryColor: 'bloom-green',
      author: 'Grecia Medina',
      date: '22 Oct 2024',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop',
      slug: 'economia-circular-regenerativa'
    }
  ];

  const filteredPosts = selectedCategory === 'Todos' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Navbar variant="dark" />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-bloom-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-block px-6 py-3 bg-white/10 rounded-full mb-6 shadow-lg border border-white/20">
                <span className="text-bloom-pink font-bold text-sm uppercase tracking-wide">Bloom Insights</span>
              </div>
              
              <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Ideas que <span className="font-accent italic text-bloom-pink font-normal">transforman</span>
              </h1>
              
              <p className="text-2xl text-white/90 font-light leading-relaxed">
                Estrategia, impacto y capital para empresas que están construyendo el futuro.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                    selectedCategory === cat.name
                      ? `bg-${cat.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {cat.icon}
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-bloom-pink" />
                <h2 className="font-heading text-3xl font-bold text-bloom-navy">Destacado</h2>
              </div>
            </div>

            <a 
              href={`/blog/${featuredPost.slug}`}
              className="group grid lg:grid-cols-2 gap-8 bg-bloom-surface rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-bloom-navy"
            >
              <div className="relative h-[400px] lg:h-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute top-6 left-6 px-4 py-2 bg-${featuredPost.categoryColor} text-white rounded-full font-bold text-sm shadow-lg`}>
                  {featuredPost.category}
                </div>
              </div>

              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-bloom-navy mb-6 leading-tight group-hover:text-bloom-purple transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-bloom-navy flex items-center justify-center text-white font-bold">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-bloom-navy">{featuredPost.author}</p>
                    <p className="text-sm text-gray-600">{featuredPost.authorRole}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-20 bg-bloom-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 bg-${post.categoryColor} text-white rounded-full font-bold text-xs shadow-lg`}>
                      {post.category}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-bold text-bloom-navy mb-4 leading-tight group-hover:text-bloom-purple transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div className="w-10 h-10 rounded-full bg-bloom-navy flex items-center justify-center text-white font-bold text-sm">
                        {post.author.charAt(0)}
                      </div>
                      <p className="font-bold text-bloom-navy text-sm">{post.author}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-32 bg-bloom-navy">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Sparkles className="w-12 h-12 text-bloom-pink mx-auto mb-6" />
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              No te pierdas ningún <span className="font-accent italic text-bloom-pink font-normal">insight</span>
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Recibe estrategias, casos de éxito y tendencias de impacto directo en tu inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 rounded-full text-bloom-navy font-medium focus:outline-none focus:ring-4 focus:ring-bloom-pink/50"
              />
              <button className="px-8 py-4 bg-bloom-pink text-white rounded-full font-bold hover:bg-white hover:text-bloom-navy transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                Suscribirme <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
