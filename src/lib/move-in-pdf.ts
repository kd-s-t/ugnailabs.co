import { readFile } from "fs/promises";
import path from "path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { format, parseISO, isValid } from "date-fns";
import {
  bookingChannelById,
  bookingChannelPdfFile,
  type BookingChannelId,
} from "@/lib/booking-channels";

export type MoveInPdfOccupant = {
  fullName?: string | null;
  age?: string | null;
  gender?: string | null;
};

export type MoveInPdfInput = {
  date: string;
  tenantName: string;
  bookingChannel: BookingChannelId;
  bookingId: string;
  contactNo?: string | null;
  nationality?: string | null;
  address?: string | null;
  officeContactNo?: string | null;
  moveIn: string;
  moveOut: string;
  occupants?: MoveInPdfOccupant[];
  emergencyName?: string | null;
  emergencyContactNo?: string | null;
  emergencyRelationship?: string | null;
  emergencyAddress?: string | null;
};

const TEMPLATE = path.join(process.cwd(), "assets", "move-in-form.pdf");
const CHANNEL_DIR = path.join(process.cwd(), "assets", "booking-channels");
const INK = rgb(0.08, 0.1, 0.14);

function clip(value: string, max: number) {
  const trimmed = value.trim().replace(/\s+/g, " ");
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, Math.max(0, max - 1)).trimEnd()}…`;
}

function splitAddress(address: string | null | undefined) {
  const text = (address || "").trim().replace(/\s+/g, " ");
  if (!text) return ["", ""];
  if (text.length <= 42) return [text, ""];
  const cut = text.lastIndexOf(" ", 42);
  const at = cut > 18 ? cut : 42;
  return [text.slice(0, at).trim(), text.slice(at).trim()];
}

function parseDate(value: string): Date {
  const d = parseISO(value.trim());
  if (!isValid(d)) {
    throw new Error(`Invalid date: ${value}`);
  }
  return d;
}

export async function buildMoveInFormPdf(input: MoveInPdfInput) {
  const bytes = await readFile(TEMPLATE);
  const doc = await PDFDocument.load(bytes);
  const page = doc.getPages()[0];
  if (!page) throw new Error("Move-in template has no pages.");
  const font = await doc.embedFont(StandardFonts.TimesRoman);
  const size = 11;

  const draw = (text: string, x: number, y: number, max = 48) => {
    const value = clip(text, max);
    if (!value) return;
    page.drawText(value, {
      x,
      y,
      size,
      font,
      color: INK,
    });
  };

  const formDate = parseDate(input.date);
  const moveIn = parseDate(input.moveIn);
  const moveOut = parseDate(input.moveOut);
  const [addr1, addr2] = splitAddress(input.address);
  const occupants = (input.occupants || []).slice(0, 4);
  const bookingId = input.bookingId.trim();
  const channel = bookingChannelById(input.bookingChannel);
  const channelPdf = bookingChannelPdfFile(input.bookingChannel);

  draw(format(formDate, "MMM d, yyyy"), 468, 618.5, 22);
  draw(input.tenantName, 132, 544.9, 28);

  const logoH = 14;
  let bookingTextX = 406;
  if (channel && channelPdf) {
    const logoBytes = await readFile(path.join(CHANNEL_DIR, channelPdf));
    const logo = await doc.embedPng(logoBytes);
    const scale = logoH / logo.height;
    const logoW = logo.width * scale;
    const logoX = 406;
    const logoY = 544.9 - 2;
    page.drawImage(logo, {
      x: logoX,
      y: logoY,
      width: logoW,
      height: logoH,
    });
    bookingTextX = logoX + logoW + 4;
  }
  draw(bookingId.slice(0, 18), bookingTextX, 544.9, 16);

  draw(input.contactNo || "", 132, 535.1, 28);
  draw(input.nationality || "", 132, 525.4, 28);
  draw(format(moveIn, "MMM d, yyyy"), 406, 525.4, 18);
  draw(addr1, 132, 515.8, 28);
  draw(format(moveOut, "MMM d, yyyy"), 406, 515.8, 18);
  draw(addr2, 132, 506.1, 28);
  draw(input.officeContactNo || "", 132, 496.4, 28);

  const occYs = [461.4, 451.6, 442.0, 432.3];
  occYs.forEach((y, i) => {
    const row = occupants[i];
    if (!row) return;
    draw(row.fullName || "", 152, y, 28);
    draw(row.age || "", 327, y, 8);
    draw(row.gender || "", 402, y, 14);
  });

  draw(input.emergencyName || "", 150, 388.5, 28);
  draw(input.emergencyContactNo || "", 380, 388.5, 24);
  draw(input.emergencyRelationship || "", 150, 375.6, 28);
  draw(input.emergencyAddress || "", 380, 375.6, 24);

  return Buffer.from(await doc.save());
}

export function moveInFilename(tenantName: string, moveIn: string) {
  const slug =
    tenantName
      .trim()
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 40) || "guest";
  let day = "date";
  try {
    day = format(parseDate(moveIn), "yyyy-MM-dd");
  } catch {
    /* keep fallback */
  }
  return `move-in-${slug}-${day}.pdf`;
}
