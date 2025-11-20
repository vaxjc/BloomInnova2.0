import React from 'react';
import { Building2, Zap, Globe } from 'lucide-react';

const AudienceSection = () => {
    return (
      <section className="py-32 bg-bloom-navy text-white relative overflow-hidden">
        {/* Soft Background Gradient */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bloom-blue/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="font-heading text-5xl font-bold mb-4">A quién servimos</h2>
                    <p className="text-bloom-gray text-lg max-w-md">Soluciones adaptadas a cada etapa de madurez.</p>
                </div>
                <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white hover:text-bloom-navy transition-all text-sm font-bold">
                    Ver todos los sectores
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { 
                        title: "Empresas", 
                        icon: <Building2 className="w-8 h-8"/>,
                        text: "Profesionaliza tu sostenibilidad. Demuestra resultados con métricas que atraen inversionistas.",
                        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                        href: "/empresas"
                    },
                    { 
                        title: "MIPYMES", 
                        icon: <Zap className="w-8 h-8"/>,
                        text: "Prepárate para crecer. Accede a fondos e intégrate en cadenas de valor sostenibles.",
                        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                        href: "/mipymes"
                    },
                    { 
                        title: "ONGs", 
                        icon: <Globe className="w-8 h-8"/>,
                        text: "Fortalece la confianza. Sostenibilidad financiera mediante evidencias claras de impacto.",
                        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                        href: "/ongs"
                    }
                ].map((item, i) => (
                    <a key={i} href={item.href} className="group relative overflow-hidden rounded-3xl h-[400px] cursor-pointer block">
                        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bloom-navy/60 to-bloom-navy"></div>
                        
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-bloom-pink group-hover:bg-bloom-pink group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="font-heading text-3xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                {item.text}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </section>
    );
};

export default AudienceSection;
