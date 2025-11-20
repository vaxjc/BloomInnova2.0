'use client';

import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-32 bg-bloom-surface relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass-card bg-white p-2 rounded-[3rem] shadow-2xl">
          <div className="bg-bloom-navy rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-bloom-purple rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-bloom-blue rounded-full blur-3xl"></div>
             </div>

             <div className="relative z-10">
               <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-white">
                 ¿Listo para <span className="font-accent italic text-bloom-pink">evolucionar?</span>
               </h2>
               <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
                 Agenda tu diagnóstico gratuito. Te ayudamos a transformar tu impacto en crecimiento medible en menos de 24 horas.
               </p>
               
               <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
                 <input 
                   type="email" 
                   placeholder="Tu correo corporativo" 
                   className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 backdrop-blur-md transition-all"
                 />
                 <button className="w-full md:w-auto px-8 py-4 rounded-full bg-white text-bloom-navy font-bold hover:bg-bloom-pink hover:text-white transition-colors shadow-lg">
                   Iniciar Ahora
                 </button>
               </div>
               
               <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/60 text-sm">
                 <div className="flex flex-col items-center">
                   <Mail className="mb-2 w-5 h-5" />
                   <span>contacto@bloominnova.com</span>
                 </div>
                 <div className="flex flex-col items-center">
                   <MapPin className="mb-2 w-5 h-5" />
                   <span>Ciudad de Panamá, Global</span>
                 </div>
                 <div className="flex flex-col items-center">
                   <div className="w-2 h-2 bg-green-400 rounded-full mb-3 animate-pulse"></div>
                   <span>Aceptando nuevos proyectos</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
