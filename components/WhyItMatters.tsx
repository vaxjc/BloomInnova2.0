import React from 'react';
import { Globe, Users, ArrowUpRight } from 'lucide-react';

const WhyItMatters = () => {
  return (
    <section className="py-32 bg-bloom-purple relative overflow-hidden text-white">
       {/* Decorative elements */}
       <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#4a1a50] to-transparent opacity-50"></div>
         <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
            alt="Global connection"
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
         />
       </div>
       
       <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="grid lg:grid-cols-12 gap-16">
           
           <div className="lg:col-span-5">
             <h2 className="font-heading text-5xl font-bold mb-6 leading-tight">
               El impacto es la nueva <br/>
               <span className="font-accent italic text-bloom-pink">ventaja competitiva</span>
             </h2>
             <p className="text-white/80 text-lg mb-10 font-light">
               Las empresas que integran sostenibilidad con rentabilidad no solo crecen más rápido, sino que lideran la transformación económica global.
             </p>
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
               <div className="flex items-start gap-4 mb-4">
                 <div className="p-3 bg-bloom-pink/20 rounded-full text-bloom-pink">
                    <Globe className="w-6 h-6" />
                 </div>
                 <div>
                   <div className="font-heading text-4xl font-bold text-white mb-1">$2.3T</div>
                   <div className="text-sm uppercase tracking-wider font-bold text-bloom-pink">Inversión ESG Global</div>
                 </div>
               </div>
               <p className="text-sm text-white/70">
                 Fondos de impacto e inversionistas buscan activamente empresas con métricas claras.
               </p>
             </div>
           </div>

           <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
             {/* Card 1 */}
             <div className="bg-white text-bloom-navy p-8 rounded-3xl transform hover:-translate-y-2 transition-transform duration-300">
               <div className="flex justify-between items-start mb-8">
                 <h4 className="text-xl font-bold">Atracción de <br/>Talento</h4>
                 <Users className="text-bloom-purple w-8 h-8" />
               </div>
               <div className="font-heading text-6xl font-bold text-bloom-purple mb-4">76%</div>
               <p className="text-gray-600 font-medium">De profesionales prefiere trabajar en empresas con propósito y impacto medible.</p>
             </div>

             {/* Card 2 */}
             <div className="bg-white/10 backdrop-blur-md border border-white/30 text-white p-8 rounded-3xl transform hover:-translate-y-2 transition-transform duration-300 mt-0 md:mt-12 shadow-xl">
               <div className="flex justify-between items-start mb-8">
                 <h4 className="text-xl font-bold text-white">Crecimiento <br/>Acelerado</h4>
                 <ArrowUpRight className="text-bloom-pink w-8 h-8" />
               </div>
               <div className="font-heading text-6xl font-bold text-bloom-pink mb-4">2.5x</div>
               <p className="text-white font-medium">Más rápido crecen las empresas con estrategia ESG comparado con sus pares.</p>
             </div>
           </div>

         </div>
       </div>
    </section>
  );
};

export default WhyItMatters;
