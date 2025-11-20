import React from 'react';

const Manifesto = () => {
  return (
    <section id="manifiesto" className="py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
             <div className="absolute inset-0 bg-bloom-purple rounded-[3rem] rotate-3 opacity-10"></div>
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px]">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Team collaboration" 
                 className="w-full h-full object-cover"
               />
               {/* Text Overlay */}
               <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-bloom-navy/90 via-bloom-navy/50 to-transparent text-white">
                 <p className="font-accent italic text-2xl leading-relaxed">
                   "Creamos un ecosistema de empresas que, a través del Blooming, regeneran y evolucionan su entorno."
                 </p>
               </div>
             </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
             <h2 className="text-bloom-blue font-bold tracking-widest uppercase mb-4 text-xs">Manifiesto de Marca</h2>
             <h3 className="font-heading text-4xl md:text-6xl font-bold mb-8 leading-none text-bloom-navy">
               Lideramos la <br />
               <span className="font-accent italic font-normal text-bloom-purple">regeneración</span> del mundo.
             </h3>
             <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
               Acompañamos la expansión estratégica con un enfoque innovador. Alineamos crecimiento, impacto y regeneración para que las empresas no solo prosperen económicamente, sino que contribuyan activamente a la restauración de sus ecosistemas.
             </p>
             
             <div className="space-y-6">
                {[
                  { title: 'Crecimiento', desc: 'Expansión estratégica sostenible', color: 'bg-bloom-blue' },
                  { title: 'Impacto', desc: 'Transformación medible y verificable', color: 'bg-bloom-purple' },
                  { title: 'Regeneración', desc: 'Restauración de ecosistemas', color: 'bg-green-500' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group cursor-pointer">
                    <div className={`w-2 h-16 ${item.color} rounded-full transition-all group-hover:h-20`}></div>
                    <div>
                      <h4 className="font-heading text-2xl font-bold text-bloom-navy group-hover:text-bloom-purple transition-colors">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
