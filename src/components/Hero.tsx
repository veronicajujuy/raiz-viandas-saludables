import { ArrowDown } from 'lucide-react';
import { getWhatsAppUrl } from '../config/raiz';
import { WhatsAppIcon } from './BrandMark';
import { ImageWithFallback } from './ImageWithFallback';

export function Hero() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="inicio"
      className="pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Copy column */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <p className="text-xs sm:text-sm font-medium text-[#bc6c25] mb-3 tracking-wide">
            San Salvador de Jujuy · Cocina casera de estación
          </p>

          <h1 className="font-display text-[clamp(2.25rem,4.4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[#283618] [text-wrap:balance]">
            La comida de todos los días, resuelta
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#283618]/80 max-w-xl">
            Viandas caseras con ingredientes locales y de estación. Comé rico y
            organizá tu semana sin perder tiempo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <a
              href="#menu-semanal"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-[#606c38] text-[#fefae0] text-base font-medium whitespace-nowrap hover:bg-[#4b552b] active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc6c25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fefae0]"
            >
              <span>Conocé el menú</span>
              <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl border border-[#bc6c25] text-[#9b561b] text-base font-medium whitespace-nowrap hover:bg-[#bc6c25]/10 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#606c38] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fefae0]"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Hablá con nosotros</span>
            </a>
          </div>
        </div>

        {/* Visual focal column */}
        <div className="lg:col-span-6 w-full">
          <div className="relative rounded-2xl overflow-hidden border border-[#606c38]/15 shadow-[0_18px_40px_-20px_rgba(40,54,24,0.22)]">
            <ImageWithFallback
              src="/src/assets/images/hero_vianda_casera_1795018565197.jpg"
              alt="Vianda casera de Raíz con vegetales asados, papas andinas, pollo con hierbas, quinoa y hojas verdes"
              className="aspect-[4/3] w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
