/**
 * CONFIGURACIÓN EDITABLE DE RAÍZ
 * ---------------------------------------------------------------------------
 * Modificá estos valores para actualizar el número de WhatsApp, el mensaje
 * precargado y los enlaces de contacto en todo el sitio de una sola vez.
 */

/**
 * Número de WhatsApp en formato internacional sin signos "+" ni espacios.
 * Ejemplo para Jujuy, Argentina: '5493884000000'
 */
export const WHATSAPP_NUMBER = '549XXXXXXXXXX';

/**
 * Mensaje precargado al abrir cualquier botón de WhatsApp.
 */
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola, quiero conocer el menú semanal de Raíz';

/**
 * Construye el enlace oficial de WhatsApp (https://wa.me/...).
 * Podés pasar un plato opcional si querés personalizar la consulta por tarjeta,
 * manteniendo siempre el mensaje base requerido.
 */
export function getWhatsAppUrl(dishName?: string): string {
  const text = dishName
    ? `${WHATSAPP_DEFAULT_MESSAGE} (${dishName})`
    : WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Datos editables de marca y redes (contenido de ejemplo editable).
 */
export const BRAND_CONFIG = {
  name: 'Raíz',
  tagline: 'La comida de todos los días, resuelta',
  location: 'San Salvador de Jujuy',
  instagramHandle: '@raiz.viandas.jujuy',
  instagramUrl: 'https://instagram.com/',
} as const;
