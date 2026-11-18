import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandMark, WhatsAppIcon } from './BrandMark';
import { getWhatsAppUrl } from '../config/raiz';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Menú semanal', href: '#menu-semanal' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Contacto', href: '#contacto' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fefae0]/95 backdrop-blur-sm border-b border-[#606c38]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#inicio"
          aria-label="Raíz - Ir al inicio"
          className="whitespace-nowrap shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#606c38] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fefae0]"
        >
          <BrandMark />
        </a>

        {/* Zone 2: Desktop navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#283618]/85"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#bc6c25] hover:text-[#606c38] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#606c38] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Mobile menu toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[40px] rounded-xl bg-[#606c38] text-[#fefae0] text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 hover:bg-[#4b552b] active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc6c25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fefae0]"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#283618] hover:bg-[#606c38]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#606c38]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-t border-[#606c38]/15 bg-[#fefae0] px-4 py-4"
        >
          <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-3 min-h-[44px] flex items-center text-base font-medium text-[#283618] rounded-xl hover:bg-[#606c38]/10 hover:text-[#606c38] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
