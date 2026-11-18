import { CalendarCheck, MessageCircle, UtensilsCrossed } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Elegís tus viandas',
    description:
      'Revisás las propuestas de la semana según tus gustos, alternando entre opciones con proteína y opciones veganas.',
    icon: UtensilsCrossed,
  },
  {
    number: '02',
    title: 'Nos escribís por WhatsApp',
    description:
      'Nos consultás qué platos tenemos preparados esta semana y nos contás cuántas viandas querés encargar.',
    icon: MessageCircle,
  },
  {
    number: '03',
    title: 'Coordinás tu pedido y organizás tus comidas para la semana',
    description:
      'Acordamos el día de entrega o retiro en San Salvador de Jujuy y dejás resueltas tus comidas caseras sin cocinar de más.',
    icon: CalendarCheck,
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#faf5d4]/70 border-t border-[#606c38]/12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-medium text-[#bc6c25] mb-2">
            Cómo funciona
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#283618] [text-wrap:balance]">
            Tres pasos simples para resolver tu semana
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col p-6 sm:p-7 rounded-2xl bg-[#fffdf0] border border-[#606c38]/15"
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-display text-sm font-bold tabular-nums text-[#bc6c25]">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#606c38]/10 text-[#606c38] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-[#283618] leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#283618]/80">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
