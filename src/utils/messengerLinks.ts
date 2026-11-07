import { Language, Currency, Tour, DepartureDate } from '../types';
import { formatPrice } from '../data/translations';

export const OFFICIAL_CONTACTS = {
  phoneTZ: '+255 784 123 456',
  phoneRU: '+7 (495) 987-65-43',
  whatsappNumber: '255784123456', // Direct Tanzania / Arusha desk
  telegramUsername: 'tourweb_tanzania', // Telegram direct username/bot
};

export function getWhatsAppLink(message: string, customPhone?: string): string {
  const phone = customPhone || OFFICIAL_CONTACTS.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getTelegramLink(message: string, customUsername?: string): string {
  const username = customUsername || OFFICIAL_CONTACTS.telegramUsername;
  return `https://t.me/${username}?text=${encodeURIComponent(message)}`;
}

export function generateTourInquiryMessage({
  tour,
  selectedDate,
  currentLang,
  currentCurrency,
  travelersCount = 2,
  guestName,
}: {
  tour: Tour;
  selectedDate?: DepartureDate;
  currentLang: Language;
  currentCurrency: Currency;
  travelersCount?: number;
  guestName?: string;
}): string {
  const isRu = currentLang === 'ru';
  const isEs = currentLang === 'es';
  const isFr = currentLang === 'fr';
  const isDe = currentLang === 'de';

  const title = isRu ? tour.ruTitle : tour.title;
  const destination = isRu ? tour.ruDestination : tour.destination;
  const price = formatPrice((selectedDate?.priceUSD || tour.priceUSD) * travelersCount, currentCurrency);
  const dateStr = selectedDate ? selectedDate.date : `${tour.durationDays} Days (2026/2027 Season)`;

  if (isRu) {
    return `Jambo! Здравствуйте, TourWeb Танзания!
Меня интересует тур/сафари: "${title}" (${destination}).
• Длительность: ${tour.durationDays} дней / ${tour.durationNights} ночей
• Дата поездки: ${dateStr}
• Количество гостей: ${travelersCount}
• Расчетная стоимость: ${price}
${guestName ? `• Имя туриста: ${guestName}` : ''}
${tour.isRussianGuideAvailable ? '• Необходим русскоговорящий гид-водитель и консультация по перелетам.' : ''}
Пожалуйста, подтвердите наличие мест в лоджах и пришлите детальную программу. Спасибо!`;
  }

  if (isEs) {
    return `¡Jambo! Hola equipo de TourWeb Tanzania.
Me interesa el safari: "${title}" (${destination}).
• Duración: ${tour.durationDays} días / ${tour.durationNights} noches
• Fecha: ${dateStr}
• Viajeros: ${travelersCount}
• Precio estimado: ${price}
${guestName ? `• Nombre: ${guestName}` : ''}
Por favor, confirmen disponibilidad en lodges y detalles de reserva. ¡Asante sana!`;
  }

  if (isFr) {
    return `Jambo ! Bonjour l'équipe TourWeb Tanzanie.
Je souhaite obtenir des informations sur le safari : "${title}" (${destination}).
• Durée : ${tour.durationDays} jours / ${tour.durationNights} nuits
• Date : ${dateStr}
• Voyageurs : ${travelersCount}
• Estimation : ${price}
${guestName ? `• Nom : ${guestName}` : ''}
Merci de m'indiquer la disponibilité des lodges et de me transmettre le devis.`;
  }

  if (isDe) {
    return `Jambo! Hallo TourWeb Tansania Team.
Ich interessiere mich für die Safari/Tour: "${title}" (${destination}).
• Dauer: ${tour.durationDays} Tage
• Reisetermin: ${dateStr}
• Reisende: ${travelersCount}
• Geschätzter Preis: ${price}
${guestName ? `• Name: ${guestName}` : ''}
Bitte senden Sie mir die Lodge-Verfügbarkeiten und die Buchungsdetails zu. Vielen Dank!`;
  }

  // English default
  return `Jambo TourWeb Tanzania Team!
I am inquiring about booking the safari/trek: "${title}" (${destination}).
• Duration: ${tour.durationDays} Days / ${tour.durationNights} Nights
• Target Date: ${dateStr}
• Travelers: ${travelersCount}
• Estimated Total: ${price}
${guestName ? `• Guest Name: ${guestName}` : ''}
${tour.isRussianGuideAvailable ? '• Certified Russian/Multilingual guide requested.' : ''}
Please confirm lodge availability and send the official proposal. Asante sana!`;
}

export function generateProposalInquiryMessage({
  destination,
  region,
  durationDays,
  travelStyle,
  accommodationTier,
  travelersCount,
  totalPriceFormatted,
  currentLang,
  referenceCode,
}: {
  destination: string;
  region: string;
  durationDays: number;
  travelStyle: string;
  accommodationTier: string;
  travelersCount: number;
  totalPriceFormatted: string;
  currentLang: Language;
  referenceCode: string;
}): string {
  const isRu = currentLang === 'ru';
  const isEs = currentLang === 'es';
  const isFr = currentLang === 'fr';
  const isDe = currentLang === 'de';

  if (isRu) {
    return `Jambo! Я составил индивидуальную программу сафари в Конструкторе TourWeb:
• Номер заявки (Ref): ${referenceCode}
• Направление: ${destination} (${region})
• Длительность: ${durationDays} дней
• Стиль сафари: ${travelStyle}
• Уровень размещения: ${accommodationTier}
• Количество путешественников: ${travelersCount}
• Расчетная сумма: ${totalPriceFormatted}
Пожалуйста, подготовьте официальное коммерческое предложение с расписанием внутренних рейсов и бронированием лоджей.`;
  }

  if (isEs) {
    return `¡Jambo! He creado una propuesta personalizada en TourWeb Tanzania:
• Código de Referencia: ${referenceCode}
• Circuito: ${destination} (${region})
• Duración: ${durationDays} días
• Estilo: ${travelStyle}
• Nivel de Alojamiento: ${accommodationTier}
• Viajeros: ${travelersCount}
• Total Estimado: ${totalPriceFormatted}
Por favor, envíenme el itinerario detallado con confirmación de lodges.`;
  }

  if (isFr) {
    return `Jambo ! J'ai composé mon itinéraire sur mesure avec TourWeb Tanzanie :
• Réf. Devis : ${referenceCode}
• Destination : ${destination} (${region})
• Durée : ${durationDays} jours
• Style : ${travelStyle}
• Hébergement : ${accommodationTier}
• Voyageurs : ${travelersCount}
• Total estimé : ${totalPriceFormatted}
Merci de m'envoyer le devis finalisé avec les options de vol intérieur.`;
  }

  if (isDe) {
    return `Jambo! Ich habe ein maßgeschneidertes Tansania-Angebot erstellt:
• Referenznummer: ${referenceCode}
• Reiseziel: ${destination} (${region})
• Dauer: ${durationDays} Tage
• Reiseart: ${travelStyle}
• Unterkunft: ${accommodationTier}
• Reisende: ${travelersCount}
• Gesamtsumme: ${totalPriceFormatted}
Bitte senden Sie mir das verbindliche Angebot zu. Vielen Dank!`;
  }

  return `Jambo TourWeb Tanzania Team! I have generated a custom trip proposal on TourWeb:
• Proposal Reference: ${referenceCode}
• Destination / Circuit: ${destination} (${region})
• Duration: ${durationDays} Days
• Expedition Style: ${travelStyle}
• Accommodation Level: ${accommodationTier}
• Travelers: ${travelersCount}
• Estimated Total: ${totalPriceFormatted}
Please get in touch with the finalized day-by-day itinerary and lodge availability. Asante sana!`;
}
