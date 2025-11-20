import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Programs = () => {
  return (
    <section id="programas" className="py-32 relative bg-bloom-surface">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl font-bold mb-6 text-bloom-navy">Nuestros Programas</h2>
          <p className="text-xl text-gray-600">Dos rutas. Un destino: <span className="font-accent italic text-bloom-blue text-2xl">Crecimiento con impacto</span>.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Xcelerate */}
          <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
             {/* Image Header */}
             <div className="h-48 overflow-hidden relative">
               <div className="absolute inset-0 bg-bloom-purple/60 mix-blend-multiply z-10"></div>
               <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Team working" />
               <div className="absolute bottom-6 left-8 z-20">
                 <span className="bg-white text-bloom-purple px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide mb-2 inline-block">Programa Intensivo</span>
                 <h3 className="font-heading text-3xl font-bold text-white">Bloom Xcelerate</h3>
               </div>
             </div>
             
             <div className="p-8 md:p-10">
               <p className="text-lg text-gray-600 mb-8 font-medium">Aceleración empresarial sostenible para MIPYMES que buscan estructura y capital.</p>
               
               <div className="space-y-4 mb-10">
                 {['Modelo de negocio de impacto', 'Teoría del cambio validada', 'Roadmap de capital', 'Pitch Deck Inversionista'].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-bloom-purple/10 flex items-center justify-center flex-shrink-0">
                       <CheckCircle2 className="w-4 h-4 text-bloom-purple" />
                     </div>
                     <span className="text-gray-600 text-sm">{item}</span>
                   </div>
                 ))}
               </div>

               <a href="/xcelerate" className="w-full py-4 rounded-xl border-2 border-bloom-purple text-bloom-purple font-bold hover:bg-bloom-purple hover:text-white transition-colors flex items-center justify-center gap-2">
                 Aplicar al Programa <ArrowRight className="w-4 h-4" />
               </a>
             </div>
          </div>

          {/* Metrics */}
          <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
             {/* Image Header */}
             <div className="h-48 overflow-hidden relative">
               <div className="absolute inset-0 bg-bloom-blue/60 mix-blend-multiply z-10"></div>
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Data analysis" />
               <div className="absolute bottom-6 left-8 z-20">
                 <span className="bg-white text-bloom-blue px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide mb-2 inline-block">Consultoría</span>
                 <h3 className="font-heading text-3xl font-bold text-white">Bloom Metrics</h3>
               </div>
             </div>
             
             <div className="p-8 md:p-10">
               <p className="text-lg text-gray-600 mb-8 font-medium">Estrategia ESG y medición de impacto para empresas que buscan evidencia verificable.</p>
               
               <div className="space-y-4 mb-10">
                 {['Diagnóstico ESG completo', 'Indicadores IRIS+/ODS', 'Dashboards interactivos', 'Reportes para Stakeholders'].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-bloom-blue/10 flex items-center justify-center flex-shrink-0">
                       <CheckCircle2 className="w-4 h-4 text-bloom-blue" />
                     </div>
                     <span className="text-gray-600 text-sm">{item}</span>
                   </div>
                 ))}
               </div>

               <a href="/metrics" className="w-full py-4 rounded-xl border-2 border-bloom-blue text-bloom-blue font-bold hover:bg-bloom-blue hover:text-white transition-colors flex items-center justify-center gap-2">
                 Solicitar Demo <ArrowRight className="w-4 h-4" />
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
