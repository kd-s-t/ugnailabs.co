export const BOOKING_CHANNELS = [
  {
    id: "airbnb",
    label: "Airbnb",
    /** Icon-only for the form dropdown. */
    iconFile: "airbnb-belo.png",
    /** Shown on the generated PDF. */
    pdfFile: "airbnb-belo.png",
  },
  {
    id: "booking-com",
    label: "Booking.com",
    iconFile: "booking-com.png",
    pdfFile: "booking-com.png",
  },
  {
    id: "trip-com",
    label: "Trip.com",
    iconFile: "trip-mark.png",
    pdfFile: "trip-mark.png",
  },
  {
    id: "agoda",
    label: "Agoda",
    iconFile: "agoda-dots.png",
    pdfFile: "agoda-dots.png",
  },
  {
    id: "yumis",
    label: "Yumi's Intimate Abode",
    iconFile: "yumis-icon.png",
    pdfFile: "yumis-icon.png",
  },
] as const;

export type BookingChannelId = (typeof BOOKING_CHANNELS)[number]["id"];

export function isBookingChannelId(value: string): value is BookingChannelId {
  return BOOKING_CHANNELS.some((c) => c.id === value);
}

export function bookingChannelById(id: string) {
  return BOOKING_CHANNELS.find((c) => c.id === id) ?? null;
}

/** Cache-bust so browsers do not keep old wordmark PNGs. */
const ICON_VERSION = "3";

export function bookingChannelPublicPath(id: BookingChannelId) {
  const channel = bookingChannelById(id);
  if (!channel) return null;
  return `/tools/booking-channels/${channel.iconFile}?v=${ICON_VERSION}`;
}

export function bookingChannelPdfFile(id: BookingChannelId) {
  const channel = bookingChannelById(id);
  if (!channel) return null;
  return channel.pdfFile;
}
