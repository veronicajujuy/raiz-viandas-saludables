import { useState } from 'react';
import { Leaf, Utensils } from 'lucide-react';
import { WEEKLY_MENU_ITEMS, type ViandaCategory, type ViandaItem } from '../data/menu';
import { getWhatsAppUrl } from '../config/raiz';
import { WhatsAppIcon } from './BrandMark';
import { ImageWithFallback } from './ImageWithFallback';

type FilterValue = 'all' | ViandaCategory;

function ViandaCard({ item }: { item: ViandaItem }) {
  const isVegan = item.category === 'vegana';
  const whatsappUrl = getWhatsAppUrl(item.name);

  return (
    <article
      className={`group flex flex-col rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 ${
        isVegan
          ? 'bg-[#fffdf0] border border-[#606c38]/25'
          : 'bg-[#fffdf0] border border-[#bc6c25]/30'
      }`}
    >
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={item.image}
          alt={item.imageAlt}
          className="aspect-[4/3] w-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Clean unboxed differentiation between protein and vegan options */}
        <div
          className={`flex items-center gap-1.5 text-xs font-semibold tracking-wide mb-2 ${
            isVegan ? 'text-[#606c38]' : 'text-[#bc6c25]'
          }`}
        >
          {isVegan ? (
            <Leaf className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          ) : (
            <Utensils className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          )}
          <span>{isVegan ? 'Opción vegana' : 'Opción con proteína'}</span>
        </div>

        <h3 className="font-display text-xl font-semibold text-[#283618] leading-snug">
          {item.name}
        </h3>

        <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#283618]/80">
          {item.description}
        </p>

        <div className="mt-4 pt-4 border-t border-[#606c38]/12">
          <p className="text-xs font-medium text-[#606c38] mb-1">
            Ingredientes principales
          </p>
          <p className="text-sm text-[#283618]/85 leading-relaxed">
            {item.ingredients.map((ingredient, index) => (
              <span key={ingredient}>
                {ingredient}
                {index < item.ingredients.length - 1 && (
                  <span aria-hidden="true" className="mx-1.5 text-[#bc6c25]">
                    ·
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-auto pt-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-xl text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf0] ${
              isVegan
                ? 'bg-[#606c38] text-[#fefae0] hover:bg-[#4b552b] focus-visible:ring-[#bc6c25]'
                : 'bg-[#bc6c25] text-[#fefae0] hover:bg-[#9b561b] focus-visible:ring-[#606c38]'
            }`}
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Consultar disponibilidad</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function WeeklyMenu() {
  const [filter, setFilter] = useState<FilterValue>('all');

  const filteredItems =
    filter === 'all'
      ? WEEKLY_MENU_ITEMS
      : WEEKLY_MENU_ITEMS.filter((item) => item.category === filter);

  return (
    <section
      id="menu-semanal"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#606c38]/12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#bc6c25] mb-2">
              Menú semanal
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#283618] [text-wrap:balance]">
              Esta semana, ¿qué comemos?
            </h2>
            <p className="mt-3 text-base text-[#283618]/80 leading-relaxed">
              Te compartimos algunos ejemplos de nuestros platos de estación.
              Escribinos por WhatsApp para conocer las opciones disponibles esta
              semana.
            </p>
          </div>

          {/* Interactive category filter */}
          <div
            role="group"
            aria-label="Filtrar viandas por preferencia"
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#faf5d4] border border-[#606c38]/15 self-start md:self-auto"
          >
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-2 min-h-[40px] rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#606c38] ${
                filter === 'all'
                  ? 'bg-[#606c38] text-[#fefae0]'
                  : 'text-[#283618]/80 hover:text-[#283618]'
              }`}
            >
              Todas
            </button>
            <button
              type="button"
              onClick={() => setFilter('proteina')}
              className={`px-3.5 py-2 min-h-[40px] rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc6c25] ${
                filter === 'proteina'
                  ? 'bg-[#bc6c25] text-[#fefae0]'
                  : 'text-[#283618]/80 hover:text-[#bc6c25]'
              }`}
            >
              Con proteína
            </button>
            <button
              type="button"
              onClick={() => setFilter('vegana')}
              className={`px-3.5 py-2 min-h-[40px] rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#606c38] ${
                filter === 'vegana'
                  ? 'bg-[#606c38] text-[#fefae0]'
                  : 'text-[#283618]/80 hover:text-[#606c38]'
              }`}
            >
              Veganas
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <ViandaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
