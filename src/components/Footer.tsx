import { Instagram, MapPin } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/raiz';
import { BrandMark, WhatsAppIcon } from './BrandMark';

export function Footer() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="border-t border-[#606c38]/15 bg-[#faf5d4]/50 py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <a href="#inicio" className="self-start">
              <BrandMark size="lg" />
            </a>
            <p className="inline-flex items-center gap-1.5 text-sm text-[#283618]/75">
              <MapPin className="w-4 h-4 text-[#bc6c25] shrink-0" aria-hidden="true" />
              <span>{BRAND_CONFIG.location}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-[#283618]">
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 hover:text-[#bc6c25] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#606c38] rounded-md"
            >
              <Instagram className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Instagram ({BRAND_CONFIG.instagramHandle})</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 hover:text-[#606c38] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#606c38] rounded-md"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-[#606c38]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-[#283618]/75">
          <p className="font-medium text-[#283618]">
            {BRAND_CONFIG.name} | {BRAND_CONFIG.tagline}
          </p>
          <p className="text-xs text-[#283618]/65">
            {BRAND_CONFIG.location}, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
