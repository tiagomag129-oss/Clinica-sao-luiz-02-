import React from 'react';
import { PricingCard } from '@/components/PricingCard';
import { buildWhatsAppUrl } from '../data/clinicData';

const CARE_PLANS = [
  {
    title: 'Check-up Filhote',
    badge: 'Início Seguro',
    description: 'Para cães e gatos nos primeiros meses de vida.',
    price: 'Sob consulta',
    period: '/ protocolo inicial',
    features: [
      'Consulta clínica completa de boas-vindas',
      'Calendário vacinal importado personalizado',
      'Vermifugação e orientações nutricionais',
    ],
    upcomingFeature: 'Carteirinha digital (em breve)',
    ctaLabel: 'Consultar no WhatsApp',
    ctaHref: buildWhatsAppUrl('Olá! Gostaria de saber os valores e detalhes do Check-up Filhote na Clínica São Luiz.'),
    highlighted: false,
  },
  {
    title: 'Preventivo Anual',
    badge: 'Popular',
    description: 'O cuidado contínuo que mantém seu pet protegido o ano todo.',
    price: 'Sob consulta',
    period: '/ cães e gatos',
    features: [
      'Check-up clínico geral e ausculta cardiopulmonar',
      'Reforços vacinais anuais com cadeia fria monitorada',
      'Controle antiparasitário e orientação dermatológica',
    ],
    upcomingFeature: 'Lembrete automático de vacinas (em breve)',
    ctaLabel: 'Agendar pacote no WhatsApp',
    ctaHref: buildWhatsAppUrl('Olá! Tenho interesse no plano Preventivo Anual para meu pet na Clínica São Luiz.'),
    highlighted: true,
  },
  {
    title: 'Cuidado Sênior',
    badge: '7+ Anos',
    description: 'Acompanhamento dedicado para pets maduros e idosos.',
    price: 'Sob consulta',
    period: '/ avaliação geriátrica',
    features: [
      'Avaliação cardiológica e metabólica preventiva',
      'Orientação odontológica e articular individualizada',
      'Acesso direto à farmácia veterinária no local',
    ],
    upcomingFeature: 'Telemonitoramento pós-consulta (em breve)',
    ctaLabel: 'Falar com a equipe',
    ctaHref: buildWhatsAppUrl('Olá! Gostaria de agendar uma avaliação do Cuidado Sênior para meu pet idoso.'),
    highlighted: false,
  },
];

export const PlansSection: React.FC = () => {
  return (
    <section id="planos" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Programas de Prevenção</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083344] tracking-tight leading-tight mb-4">
            Planos e pacotes preventivos sob medida para seu companheiro.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Estruturamos protocolos completos de acompanhamento para cada fase da vida, com transparência e orientação direta da nossa equipe médica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch justify-items-center">
          {CARE_PLANS.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              badge={plan.badge}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              upcomingFeature={plan.upcomingFeature}
              ctaLabel={plan.ctaLabel}
              ctaHref={plan.ctaHref}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
