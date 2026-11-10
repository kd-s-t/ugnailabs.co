import {
  isBookingChannelId,
  type BookingChannelId,
} from "@/lib/booking-channels";
import {
  buildMoveInFormPdf,
  moveInFilename,
  type MoveInPdfInput,
  type MoveInPdfOccupant,
} from "@/lib/move-in-pdf";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parseOccupants(raw: unknown): MoveInPdfOccupant[] {
  if (!Array.isArray(raw)) return [];
  const rows: MoveInPdfOccupant[] = [];
  for (const row of raw) {
    if (!row || typeof row !== "object") continue;
    const r = row as Record<string, unknown>;
    const fullName = asString(r.fullName);
    const age = asString(r.age);
    const gender = asString(r.gender);
    if (!fullName && !age && !gender) continue;
    rows.push({ fullName, age, gender });
    if (rows.length >= 4) break;
  }
  return rows;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const channelRaw = asString(data.bookingChannel);
  if (!isBookingChannelId(channelRaw)) {
    return Response.json(
      { error: "Booking channel is required." },
      { status: 400 },
    );
  }
  const bookingChannel: BookingChannelId = channelRaw;
  const bookingId = asString(data.bookingId);
  if (!bookingId) {
    return Response.json(
      { error: "Booking number is required." },
      { status: 400 },
    );
  }

  const input: MoveInPdfInput = {
    date: asString(data.date),
    tenantName: asString(data.tenantName),
    bookingChannel,
    bookingId,
    contactNo: asString(data.contactNo) || null,
    nationality: asString(data.nationality) || null,
    address: asString(data.address) || null,
    officeContactNo: asString(data.officeContactNo) || null,
    moveIn: asString(data.moveIn),
    moveOut: asString(data.moveOut),
    occupants: parseOccupants(data.occupants),
    emergencyName: asString(data.emergencyName) || null,
    emergencyContactNo: asString(data.emergencyContactNo) || null,
    emergencyRelationship: asString(data.emergencyRelationship) || null,
    emergencyAddress: asString(data.emergencyAddress) || null,
  };

  if (!input.tenantName) {
    return Response.json({ error: "Tenant name is required." }, { status: 400 });
  }
  if (!input.date || !input.moveIn || !input.moveOut) {
    return Response.json(
      { error: "Date, move-in, and move-out are required." },
      { status: 400 },
    );
  }

  try {
    const pdf = await buildMoveInFormPdf(input);
    const filename = moveInFilename(input.tenantName, input.moveIn);
    return new Response(new Uint8Array(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Could not generate PDF.";
    return Response.json({ error: message }, { status: 500 });
  }
}
