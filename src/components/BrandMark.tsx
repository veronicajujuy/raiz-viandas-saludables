interface BrandMarkProps {
  className?: string;
  inverted?: boolean;
}

export function BrandMark({ className = '', inverted = false }: BrandMarkProps) {
  const iconColor = inverted ? '#fefae0' : '#606c38';
  const accentColor = inverted ? '#fefae0' : '#bc6c25';
  const textColor = inverted ? 'text-[#fefae0]' : 'text-[#283618]';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M14 4C14 10.5 9.5 14 5.5 14.5C9.5 15.5 13 18.5 14 24"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 4C14 9.5 18 12.5 22.5 13C18.5 14.2 15.2 17.5 14 24"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="24.5" r="1.75" fill={accentColor} />
      </svg>
      <span
        className={`font-display text-xl font-bold tracking-tight leading-none ${textColor}`}
      >
        Raíz
      </span>
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
