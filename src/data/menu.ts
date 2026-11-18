/**
 * MENÚ SEMANAL EDITABLE DE EJEMPLO
 * ---------------------------------------------------------------------------
 * Para editar las viandas:
 * 1. Cambiá `name`, `description`, `ingredients` o `category` ('proteina' | 'vegana').
 * 2. Reemplazá `image` por la ruta o URL de la nueva foto del plato.
 * 3. Podés agregar o quitar objetos del array según el menú de cada semana.
 *
 * Nota: Estos platos son ejemplos ilustrativos editables (sin precios ni
 * confirmación de disponibilidad inmediata hasta consultar por WhatsApp).
 */

export type ViandaCategory = 'proteina' | 'vegana';

export interface ViandaItem {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  category: ViandaCategory;
  image: string;
  imageAlt: string;
}

export const WEEKLY_MENU_ITEMS: ViandaItem[] = [
  {
    id: 'pollo-limon-andinas',
    name: 'Pollo al limón con papas andinas y chauchas',
    description:
      'Pechuga de pollo cocida lentamente con hierbas frescas y ralladura de limón, acompañada de papas andinas asadas y chauchas tiernas.',
    ingredients: ['Pollo de granja', 'Papas andinas', 'Chauchas verdes', 'Limón y romero'],
    category: 'proteina',
    image: '/src/assets/images/menu_pollo_andinas_1795018566168.jpg',
    imageAlt: 'Pollo al limón con hierbas, papas andinas asadas y chauchas en fuente cerámica',
  },
  {
    id: 'guiso-lentejas-calabaza',
    name: 'Guiso de lentejas, calabaza asada y arroz yamaní',
    description:
      'Plato reconfortante de cocción lenta con lentejas tiernas, cubos de calabaza dulce al horno, arroz yamaní integral y perejil fresco.',
    ingredients: ['Lentejas', 'Calabaza asada', 'Arroz yamaní', 'Zanahoria y apio'],
    category: 'vegana',
    image: '/src/assets/images/menu_lentejas_calabaza_1795018566246.jpg',
    imageAlt: 'Bowl de guiso casero de lentejas con cubos de calabaza asada y arroz yamaní',
  },
  {
    id: 'carne-braseada-batata',
    name: 'Carne braseada con puré de batata y brócoli',
    description:
      'Cortes tiernos de carne cocidos a fuego lento en su propio jugo de hierbas, sobre puré cremoso de batata dorada y brócoli tostado.',
    ingredients: ['Carne braseada', 'Batata', 'Brócoli', 'Tomillo y ajo'],
    category: 'proteina',
    image: '/src/assets/images/menu_carne_batata_1795018566960.jpg',
    imageAlt: 'Carne braseada con jugo de hierbas, puré suave de batata y brócoli asado',
  },
  {
    id: 'bowl-quinoa-garbanzos',
    name: 'Bowl de quinoa roja, garbanzos y vegetales de estación',
    description:
      'Base tibia de quinoa roja andina con garbanzos especiados, zanahorias asadas, zucchini a la plancha, espinaca fresca y aderezo de sésamo.',
    ingredients: ['Quinoa roja', 'Garbanzos', 'Zanahoria y zucchini', 'Espinaca fresca'],
    category: 'vegana',
    image: '/src/assets/images/menu_bowl_quinoa_1795018566906.jpg',
    imageAlt: 'Bowl vegano colorido con quinoa roja, garbanzos especiados, palta y vegetales',
  },
  {
    id: 'pastel-calabaza-carne',
    name: 'Pastel de calabaza y carne cortada a cuchillo',
    description:
      'Receta clásica casera con relleno sabroso de carne condimentada y verduras salteadas, cubierto con puré de calabaza gratinado.',
    ingredients: ['Carne cortada a cuchillo', 'Calabaza', 'Cebolla y morrón', 'Perejil fresco'],
    category: 'proteina',
    image: '/src/assets/images/menu_pastel_calabaza_1795018567527.jpg',
    imageAlt: 'Pastel casero de calabaza dorada relleno de carne en cazuela de barro',
  },
  {
    id: 'tarta-integral-espinaca',
    name: 'Tarta integral de espinaca, choclo y hongos',
    description:
      'Masa casera de harina integral con relleno abundante de espinaca salteada, granos dulces de choclo y hongos dorados, con ensalada verde.',
    ingredients: ['Harina integral', 'Espinaca', 'Choclo dulce', 'Hongos salteados'],
    category: 'vegana',
    image: '/src/assets/images/menu_tarta_espinaca_1795018568994.jpg',
    imageAlt: 'Porción de tarta integral de espinaca, choclo y hongos junto a hojas verdes',
  },
];
