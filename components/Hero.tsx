import React from 'react';
import { ArrowRight, BarChart3, Leaf, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-bloom-surface">
      {/* Abstract Blobs */}
      <div className="bloom-blob bg-bloom-pink/40 w-[700px] h-[700px] -top-40 -left-20"></div>
      <div className="bloom-blob bg-bloom-blue/20 w-[600px] h-[600px] bottom-0 right-0 delay-700"></div>
      <div className="bloom-blob bg-bloom-purple/20 w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 delay-500"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-bloom-purple animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-bloom-navy">Transformación Corporativa</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] mb-8 tracking-tight text-bloom-navy">
              Impacto que <br/>
              genera <span className="font-accent italic font-normal text-bloom-purple">crecimiento</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bloom-blue to-bloom-purple">sostenible.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed font-light">
              Aceleración empresarial y medición ESG. Preparamos tu empresa para atraer capital y liderar la <span className="font-semibold text-bloom-navy">nueva economía</span> en 90 días.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="/diagnostico" className="group w-full sm:w-auto bg-bloom-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-bloom-purple transition-all flex items-center justify-center gap-2 shadow-xl shadow-bloom-navy/20">
                Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#manifiesto" className="group w-full sm:w-auto bg-white/50 backdrop-blur-sm text-bloom-navy border border-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white transition-all flex items-center justify-center gap-2 shadow-md">
                <span className="w-8 h-8 rounded-full bg-bloom-blue/10 flex items-center justify-center group-hover:bg-bloom-blue group-hover:text-white transition-colors">
                   <Play className="w-3 h-3 fill-current" />
                </span>
                Ver Cómo Funciona
              </a>
            </div>
          </div>

          {/* Right Visuals - Floating Glass Composition */}
          <div className="lg:col-span-5 relative hidden lg:block h-[600px]">
            {/* Main Image */}
            <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
               <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Corporate Meeting" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-bloom-navy/60 to-transparent"></div>
            </div>

            {/* Floating Stats Card 1 */}
            <div className="absolute top-10 -left-12 glass-panel p-6 rounded-2xl">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-10 h-10 rounded-full bg-bloom-blue/10 flex items-center justify-center text-bloom-blue">
                   <BarChart3 className="w-5 h-5" />
                 </div>
                 <div>
                   <div className="text-xs text-gray-500 font-bold uppercase">Levantamiento</div>
                   <div className="text-bloom-navy font-heading font-bold text-xl">$2M+</div>
                 </div>
               </div>
            </div>

            {/* Floating Stats Card 2 */}
            <div className="absolute bottom-20 -right-6 glass-panel p-6 rounded-2xl">
               <div className="flex items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                   <Leaf className="w-6 h-6" />
                 </div>
                 <div>
                   <div className="text-bloom-navy font-heading font-bold text-2xl">95%</div>
                   <div className="text-xs text-gray-500 font-bold uppercase">Tasa de Éxito</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
