import { ImageWithFallback } from './ImageWithFallback';

export function AboutSection() {
  return (
    <section
      id="sobre-raiz"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#606c38]/12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden border border-[#606c38]/15">
            <ImageWithFallback
              src="/src/assets/images/about_ingredientes_jujuy_1795018568915.jpg"
              alt="Ingredientes frescos locales y de estación sobre mesada de madera: papas andinas, zapallos, hojas verdes y hierbas"
              className="aspect-[4/3] w-full"
            />
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
          <p className="text-xs sm:text-sm font-medium text-[#bc6c25] mb-2">
            Sobre Raíz
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#283618] [text-wrap:balance]">
            Comida rica, ingredientes de verdad
          </h2>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-[#283618]/85">
            <p>
              En Raíz cocinamos en San Salvador de Jujuy como se cocina en casa:
              con tiempo, ingredientes frescos de productores locales y sabores
              propios de cada estación.
            </p>
            <p>
              Preparamos viandas caseras pensadas para disfrutar todos los días,
              sin vueltas ni fórmulas rígidas. Cada semana armamos propuestas
              variadas con opciones con proteína y opciones 100% veganas para
              que elijas según tu forma de comer.
            </p>
          </div>

          <div className="mt-7 pt-6 border-t border-[#606c38]/15 w-full flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-[#606c38]">
            <span>Ingredientes locales</span>
            <span aria-hidden="true" className="text-[#bc6c25]">
              ·
            </span>
            <span>Cocina casera</span>
            <span aria-hidden="true" className="text-[#bc6c25]">
              ·
            </span>
            <span>Opciones con proteína y veganas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
