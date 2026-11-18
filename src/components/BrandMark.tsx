interface BrandMarkProps {
  className?: string;
  size?: 'sm' | 'lg';
}

export function BrandMark({ className = '', size = 'sm' }: BrandMarkProps) {
  const heightClass = size === 'lg' ? 'h-20 sm:h-24' : 'h-13 sm:h-14';

  return (
    <span className={`inline-flex items-center whitespace-nowrap shrink-0 ${className}`}>
      <img
        src="/assets/aistudio/ChatGPT_Image_8_oct_2026__02_31_06_p.m._a0c38029.png"
        alt="Raíz — Viandas caseras"
        referrerPolicy="no-referrer"
        className={`${heightClass} w-auto object-contain mix-blend-multiply select-none`}
      />
    </span>
  );
}

export function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
