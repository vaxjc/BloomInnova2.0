'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Target, TrendingUp, DollarSign, Leaf, Users, Building2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type QuestionOption = {
  value: string;
  label: string;
  icon?: React.ReactElement;
  desc?: string;
};

export default function DiagnosticoPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    industry: '',
    companySize: '',
    yearsOperation: '',
    currentChallenge: '',
    hasImpactMetrics: '',
    hasImpactStrategy: '',
    impactAreas: [] as string[],
    seeksFunding: '',
    fundingAmount: '',
    mainGoal: '',
    timeframe: '',
    currentRevenue: '',
    whatMakesUnique: '',
    interest: [] as string[]
  });

  const questions = [
    {
      id: 'name',
      question: '¡Hola! ¿Cómo te llamas?',
      type: 'text',
      placeholder: 'Tu nombre completo',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'email',
      question: `Perfecto, ${formData.name || ''}. ¿Cuál es tu email corporativo?`,
      type: 'email',
      placeholder: 'tu@empresa.com',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'company',
      question: '¿Cuál es el nombre de tu empresa?',
      type: 'text',
      placeholder: 'Nombre de tu empresa',
      icon: <Building2 className="w-8 h-8" />
    },
    {
      id: 'role',
      question: `¿Cuál es tu rol en ${formData.company || 'la empresa'}?`,
      type: 'select',
      options: [
        { value: 'founder', label: 'Fundador/a' },
        { value: 'ceo', label: 'CEO/Director General' },
        { value: 'manager', label: 'Gerente/Manager' },
        { value: 'sustainability', label: 'Responsable de Sostenibilidad' },
        { value: 'other', label: 'Otro' }
      ] as QuestionOption[],
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'industry',
      question: '¿En qué industria opera tu empresa?',
      type: 'radio',
      options: [
        { value: 'tech', label: 'Tecnología y Software' },
        { value: 'agriculture', label: 'Agricultura y Alimentos' },
        { value: 'energy', label: 'Energía y Renovables' },
        { value: 'health', label: 'Salud y Bienestar' },
        { value: 'education', label: 'Educación' },
        { value: 'manufacturing', label: 'Manufactura' },
        { value: 'services', label: 'Servicios Profesionales' },
        { value: 'retail', label: 'Retail y Comercio' },
        { value: 'other', label: 'Otra industria' }
      ] as QuestionOption[],
      icon: <Building2 className="w-8 h-8" />
    },
    {
      id: 'companySize',
      question: '¿Cuántas personas trabajan en tu empresa?',
      type: 'radio',
      options: [
        { value: '1-10', label: '1-10 empleados (Startup)' },
        { value: '11-50', label: '11-50 empleados (Pequeña)' },
        { value: '51-200', label: '51-200 empleados (Mediana)' },
        { value: '201-500', label: '201-500 empleados (Grande)' },
        { value: '500+', label: 'Más de 500 empleados (Corporativa)' }
      ] as QuestionOption[],
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'yearsOperation',
      question: '¿Cuántos años lleva operando tu empresa?',
      type: 'radio',
      options: [
        { value: 'less-1', label: 'Menos de 1 año' },
        { value: '1-3', label: '1-3 años' },
        { value: '3-5', label: '3-5 años' },
        { value: '5-10', label: '5-10 años' },
        { value: '10+', label: 'Más de 10 años' }
      ] as QuestionOption[],
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      id: 'currentRevenue',
      question: '¿Cuál es tu rango de ingresos anuales aproximado?',
      type: 'radio',
      options: [
        { value: 'pre-revenue', label: 'Pre-revenue (aún no generamos ingresos)' },
        { value: '0-100k', label: '$0 - $100K' },
        { value: '100k-500k', label: '$100K - $500K' },
        { value: '500k-1m', label: '$500K - $1M' },
        { value: '1m-5m', label: '$1M - $5M' },
        { value: '5m+', label: 'Más de $5M' }
      ] as QuestionOption[],
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      id: 'currentChallenge',
      question: '¿Cuál es tu mayor desafío actual?',
      subtitle: 'Sé específico, esto nos ayudará a personalizar tu reporte',
      type: 'textarea',
      placeholder: 'Ej: Necesitamos estructurar nuestra estrategia de impacto para atraer inversión...',
      icon: <Target className="w-8 h-8" />
    },
    {
      id: 'whatMakesUnique',
      question: '¿Qué hace única a tu empresa o solución?',
      subtitle: 'Cuéntanos tu diferenciador clave',
      type: 'textarea',
      placeholder: 'Ej: Somos la única empresa que combina tecnología blockchain con agricultura regenerativa...',
      icon: <Leaf className="w-8 h-8" />
    },
    {
      id: 'hasImpactMetrics',
      question: '¿Tu empresa actualmente mide su impacto social o ambiental?',
      type: 'radio',
      options: [
        { value: 'yes_advanced', label: 'Sí, tenemos métricas avanzadas' },
        { value: 'yes_basic', label: 'Sí, pero de forma básica' },
        { value: 'starting', label: 'Estamos comenzando' },
        { value: 'no', label: 'No, aún no medimos' }
      ] as QuestionOption[],
      icon: <Target className="w-8 h-8" />
    },
    {
      id: 'hasImpactStrategy',
      question: '¿Tienes una estrategia de impacto definida?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'Sí, está documentada y en ejecución' },
        { value: 'partial', label: 'Parcialmente, estamos trabajando en ello' },
        { value: 'no', label: 'No, necesitamos ayuda para crearla' }
      ] as QuestionOption[],
      icon: <Target className="w-8 h-8" />
    },
    {
      id: 'impactAreas',
      question: '¿En qué áreas genera impacto tu empresa?',
      subtitle: 'Selecciona todas las que apliquen',
      type: 'checkbox',
      options: [
        { value: 'environment', label: 'Medio Ambiente', desc: 'Reducción de huella, conservación' },
        { value: 'social', label: 'Impacto Social', desc: 'Empleo, educación, salud' },
        { value: 'economic', label: 'Desarrollo Económico', desc: 'Inclusión financiera, emprendimiento' },
        { value: 'governance', label: 'Gobernanza', desc: 'Transparencia, ética empresarial' },
        { value: 'innovation', label: 'Innovación', desc: 'Tecnología para el bien' },
        { value: 'circular', label: 'Economía Circular', desc: 'Reciclaje, reutilización' }
      ] as QuestionOption[],
      icon: <Leaf className="w-8 h-8" />
    },
    {
      id: 'seeksFunding',
      question: '¿Buscas acceder a capital o fondos?',
      type: 'radio',
      options: [
        { value: 'yes_now', label: 'Sí, activamente ahora' },
        { value: 'yes_future', label: 'Sí, en los próximos 6-12 meses' },
        { value: 'maybe', label: 'Tal vez, quiero explorar opciones' },
        { value: 'no', label: 'No por el momento' }
      ] as QuestionOption[],
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      id: 'fundingAmount',
      question: '¿Qué monto de capital estás buscando?',
      type: 'radio',
      options: [
        { value: '0-50k', label: '$0 - $50K (Capital semilla)' },
        { value: '50k-250k', label: '$50K - $250K (Pre-Serie A)' },
        { value: '250k-1m', label: '$250K - $1M (Serie A)' },
        { value: '1m-5m', label: '$1M - $5M (Serie B)' },
        { value: '5m+', label: 'Más de $5M (Serie C+)' },
        { value: 'not-sure', label: 'No estoy seguro aún' }
      ] as QuestionOption[],
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      id: 'mainGoal',
      question: '¿Cuál es tu objetivo principal?',
      type: 'radio',
      options: [
        { value: 'measure', label: 'Medir mi impacto de forma profesional', icon: <Target className="w-5 h-5" /> },
        { value: 'funding', label: 'Acceder a capital e inversión', icon: <DollarSign className="w-5 h-5" /> },
        { value: 'scale', label: 'Escalar mi empresa con impacto', icon: <TrendingUp className="w-5 h-5" /> },
        { value: 'strategy', label: 'Desarrollar una estrategia regenerativa', icon: <Leaf className="w-5 h-5" /> }
      ] as QuestionOption[],
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      id: 'timeframe',
      question: '¿En qué plazo quieres lograr resultados?',
      type: 'radio',
      options: [
        { value: '3months', label: '0-3 meses (urgente)' },
        { value: '6months', label: '3-6 meses' },
        { value: '12months', label: '6-12 meses' },
        { value: 'flexible', label: 'Más de 12 meses (flexible)' }
      ] as QuestionOption[],
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      id: 'interest',
      question: 'Por último, ¿qué soluciones de Bloom te interesan?',
      subtitle: 'Selecciona todas las que apliquen',
      type: 'checkbox',
      options: [
        { value: 'xcelerate', label: 'Bloom Xcelerate', desc: 'Programa de aceleración' },
        { value: 'metrics', label: 'Bloom Metrics', desc: 'Plataforma SaaS' },
        { value: 'corporates', label: 'Bloom for Corporates', desc: 'Consultoría' },
        { value: 'methodology', label: 'Metodología Blooming', desc: 'Implementación' }
      ],
      icon: <Leaf className="w-8 h-8" />
    }
  ];

  const currentQ = questions[currentQuestion];

  const handleAnswer = (value: string) => {
    const questionId = currentQ.id as keyof typeof formData;
    
    if (currentQ.type === 'checkbox') {
      if (questionId === 'impactAreas') {
        const currentAreas = formData.impactAreas;
        const newAreas = currentAreas.includes(value)
          ? currentAreas.filter(item => item !== value)
          : [...currentAreas, value];
        
        setFormData({
          ...formData,
          impactAreas: newAreas
        });
      } else if (questionId === 'interest') {
        const currentInterests = formData.interest;
        const newInterests = currentInterests.includes(value)
          ? currentInterests.filter(item => item !== value)
          : [...currentInterests, value];
        
        setFormData({
          ...formData,
          interest: newInterests
        });
      }
    } else {
      setFormData({
        ...formData,
        [questionId]: value
      });
      
      // Auto-advance for radio buttons
      if (currentQ.type === 'radio' || currentQ.type === 'select') {
        setTimeout(() => {
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
          }
        }, 300);
      }
    }
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleComplete = () => {
    if (formData.interest.length > 0) {
      setCompleted(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (currentQ.type === 'text' || currentQ.type === 'email')) {
      handleTextSubmit(e as any);
    }
  };

  const isCurrentQuestionValid = () => {
    const questionId = currentQ.id as keyof typeof formData;
    const value = formData[questionId];
    
    if (currentQ.type === 'checkbox') {
      if (questionId === 'impactAreas') {
        return formData.impactAreas.length > 0;
      }
      return formData.interest.length > 0;
    }
    return value !== '';
  };

  if (completed) {
    return (
      <>
        <Navbar variant="dark" />
        <main className="min-h-screen bg-bloom-navy flex items-center justify-center py-20 px-6">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="font-heading text-4xl font-bold text-bloom-navy mb-4">
                ¡Diagnóstico Completado!
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Gracias, {formData.name}. Nuestro equipo analizará tu información y te contactará pronto con recomendaciones personalizadas.
              </p>
              <div className="bg-bloom-surface rounded-2xl p-6 mb-8">
                <p className="text-sm text-gray-600 mb-4 font-bold">
                  Próximos pasos:
                </p>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-bloom-pink flex-shrink-0 mt-0.5" />
                    <span>Recibirás un email con tu reporte de diagnóstico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-bloom-pink flex-shrink-0 mt-0.5" />
                    <span>Un especialista te contactará en 48 horas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-bloom-pink flex-shrink-0 mt-0.5" />
                    <span>Agendaremos una sesión estratégica gratuita</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-bloom-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-bloom-pink transition-all"
                >
                  Volver al inicio
                </a>
                <a
                  href="/sobre-bloom"
                  className="inline-flex items-center justify-center gap-2 bg-bloom-surface text-bloom-navy px-8 py-3 rounded-xl font-bold hover:bg-bloom-pink hover:text-white transition-all"
                >
                  Conocer más sobre Bloom
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar variant="dark" />
      
      <main className="min-h-screen bg-bloom-navy flex items-center justify-center py-20 px-6">
        <div className="max-w-3xl w-full">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/60 text-sm font-medium">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-white/60 text-sm font-medium">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-bloom-pink transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="animate-fade-in">
            {/* Icon */}
            <div className="mb-8 text-bloom-pink">
              {currentQ.icon}
            </div>

            {/* Question */}
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {currentQ.question}
            </h2>

            {currentQ.subtitle && (
              <p className="text-xl text-white/70 mb-8">
                {currentQ.subtitle}
              </p>
            )}

            {/* Answer Input */}
            <div className="mt-12">
              {/* Text Input */}
              {(currentQ.type === 'text' || currentQ.type === 'email') && (
                <form onSubmit={handleTextSubmit}>
                  <input
                    type={currentQ.type}
                    value={formData[currentQ.id as keyof typeof formData] as string}
                    onChange={(e) => handleAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={currentQ.placeholder}
                    className="w-full px-6 py-5 text-2xl bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:border-bloom-pink focus:outline-none transition-all"
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={!isCurrentQuestionValid()}
                    className={`mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                      isCurrentQuestionValid()
                        ? 'bg-bloom-pink text-white hover:bg-white hover:text-bloom-navy'
                        : 'bg-white/10 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    Continuar <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}

              {/* Textarea */}
              {currentQ.type === 'textarea' && (
                <form onSubmit={handleTextSubmit}>
                  <textarea
                    value={formData[currentQ.id as keyof typeof formData] as string}
                    onChange={(e) => handleAnswer(e.target.value)}
                    placeholder={currentQ.placeholder}
                    rows={5}
                    className="w-full px-6 py-5 text-xl bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:border-bloom-pink focus:outline-none transition-all resize-none"
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={!isCurrentQuestionValid()}
                    className={`mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                      isCurrentQuestionValid()
                        ? 'bg-bloom-pink text-white hover:bg-white hover:text-bloom-navy'
                        : 'bg-white/10 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    Continuar <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}

              {/* Select Dropdown */}
              {currentQ.type === 'select' && (
                <div className="space-y-3">
                  {currentQ.options?.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left px-6 py-5 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-bloom-pink rounded-2xl text-white text-lg font-medium transition-all"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Radio Buttons */}
              {currentQ.type === 'radio' && (
                <div className="space-y-3">
                  {currentQ.options?.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full text-left px-6 py-5 border-2 rounded-2xl text-lg font-medium transition-all flex items-center gap-4 ${
                        formData[currentQ.id as keyof typeof formData] === option.value
                          ? 'bg-bloom-pink border-bloom-pink text-white'
                          : 'bg-white/10 border-white/20 hover:border-bloom-pink text-white hover:bg-white/20'
                      }`}
                    >
                      {option.icon && <div className="text-current">{option.icon}</div>}
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Checkboxes */}
              {currentQ.type === 'checkbox' && (
                <div className="space-y-3">
                  {currentQ.options?.map((option) => {
                    const isSelected = currentQ.id === 'impactAreas' 
                      ? formData.impactAreas.includes(option.value)
                      : formData.interest.includes(option.value);
                    
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full text-left px-6 py-5 border-2 rounded-2xl transition-all ${
                          isSelected
                            ? 'bg-bloom-pink border-bloom-pink text-white'
                            : 'bg-white/10 border-white/20 hover:border-bloom-pink text-white hover:bg-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                            isSelected
                              ? 'bg-white border-white'
                              : 'border-white/40'
                          }`}>
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-bloom-pink" />
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-lg">{option.label}</div>
                            {option.desc && <div className="text-sm opacity-70">{option.desc}</div>}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                  
                  {currentQ.id === 'interest' && formData.interest.length > 0 && (
                    <button
                      onClick={handleComplete}
                      className="w-full mt-6 inline-flex items-center justify-center gap-2 px-8 py-5 bg-bloom-pink text-white rounded-xl font-bold text-lg hover:bg-white hover:text-bloom-navy transition-all"
                    >
                      Completar Diagnóstico <CheckCircle2 className="w-5 h-5" />
                    </button>
                  )}
                  
                  {currentQ.id === 'impactAreas' && formData.impactAreas.length > 0 && (
                    <button
                      onClick={() => {
                        if (currentQuestion < questions.length - 1) {
                          setCurrentQuestion(currentQuestion + 1);
                        }
                      }}
                      className="w-full mt-6 inline-flex items-center justify-center gap-2 px-8 py-5 bg-bloom-pink text-white rounded-xl font-bold text-lg hover:bg-white hover:text-bloom-navy transition-all"
                    >
                      Continuar <ArrowRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Navigation hint */}
            <div className="mt-8 text-center">
              <p className="text-white/40 text-sm">
                Presiona <kbd className="px-2 py-1 bg-white/10 rounded">Enter ↵</kbd> para continuar
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
