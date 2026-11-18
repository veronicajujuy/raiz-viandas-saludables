import { getWhatsAppUrl } from '../config/raiz';
import { WhatsAppIcon } from './BrandMark';

export function FloatingWhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar el menú semanal de Raíz por WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2.5 h-11 sm:h-12 px-4 sm:px-5 rounded-full bg-[#606c38] text-[#fefae0] border border-[#fefae0]/25 shadow-[0_12px_28px_-8px_rgba(40,54,24,0.45)] hover:bg-[#4b552b] active:scale-[0.97] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc6c25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fefae0]"
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" />
      <span className="text-sm font-medium whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
