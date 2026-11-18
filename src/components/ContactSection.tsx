import { getWhatsAppUrl } from '../config/raiz';
import { WhatsAppIcon } from './BrandMark';

export function ContactSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="contacto"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#606c38]/12"
    >
      <div className="max-w-5xl mx-auto rounded-3xl bg-[#606c38] text-[#fefae0] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight [text-wrap:balance]">
          ¿Querés organizar tu semana?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#fefae0]/90 max-w-xl mx-auto leading-relaxed">
          Escribinos y te contamos qué tenemos preparado
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[52px] rounded-xl bg-[#bc6c25] text-[#fefae0] text-base sm:text-lg font-medium whitespace-nowrap hover:bg-[#9b561b] active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fefae0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#606c38]"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
