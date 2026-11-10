"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Download, Loader2, Plus, Trash2 } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BOOKING_CHANNELS,
  bookingChannelById,
  bookingChannelPublicPath,
  type BookingChannelId,
} from "@/lib/booking-channels";

function ChannelIcon({
  src,
  className = "size-5",
}: {
  src: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className={`object-contain ${className}`} />
  );
}

type Occupant = { fullName: string; age: string; gender: string };

type FormState = {
  date: string;
  tenantName: string;
  bookingChannel: BookingChannelId;
  bookingId: string;
  contactNo: string;
  nationality: string;
  address: string;
  officeContactNo: string;
  moveIn: string;
  moveOut: string;
  occupants: Occupant[];
  emergencyName: string;
  emergencyContactNo: string;
  emergencyRelationship: string;
  emergencyAddress: string;
};

function todayIso() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function emptyOccupant(): Occupant {
  return { fullName: "", age: "", gender: "" };
}

const initialForm = (): FormState => ({
  date: "",
  tenantName: "",
  bookingChannel: "airbnb",
  bookingId: "",
  contactNo: "",
  nationality: "",
  address: "",
  officeContactNo: "",
  moveIn: "",
  moveOut: "",
  occupants: [],
  emergencyName: "",
  emergencyContactNo: "",
  emergencyRelationship: "",
  emergencyAddress: "",
});

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-brand-ink">{label}</Label>
      {children}
    </div>
  );
}

export function MoveInFormTool() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [channelMenuOpen, setChannelMenuOpen] = useState(false);
  const channelMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setForm((prev) => (prev.date ? prev : { ...prev, date: todayIso() }));
  }, []);

  useEffect(() => {
    if (!channelMenuOpen) return;
    function onPointerDown(event: PointerEvent) {
      const root = channelMenuRef.current;
      if (!root) return;
      if (event.target instanceof Node && !root.contains(event.target)) {
        setChannelMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [channelMenuOpen]);

  const selectedChannel = bookingChannelById(form.bookingChannel);
  const selectedChannelSrc = bookingChannelPublicPath(form.bookingChannel);

  const canDownload = useMemo(() => {
    return Boolean(
      form.tenantName.trim() &&
        form.date &&
        form.bookingChannel &&
        form.bookingId.trim() &&
        form.moveIn &&
        form.moveOut,
    );
  }, [form]);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function updateOccupant(index: number, key: keyof Occupant, value: string) {
    setForm((prev) => ({
      ...prev,
      occupants: prev.occupants.map((row, i) =>
        i === index ? { ...row, [key]: value } : row,
      ),
    }));
  }

  async function downloadPdf() {
    setError(null);
    if (!canDownload) {
      setError("Fill the required guest and stay fields first.");
      return;
    }
    if (form.moveOut < form.moveIn) {
      setError("Move-out date must be on or after move-in.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/tools/move-in-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error || `Could not generate PDF (${res.status}).`);
      }
      const blob = await res.blob();
      const disposition = res.headers.get("Content-Disposition") || "";
      const match = /filename="([^"]+)"/.exec(disposition);
      const filename = match?.[1] || "move-in-form.pdf";
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Download failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="relative min-h-full bg-background">
      <div className="site-grain" aria-hidden />
      <header className="border-b border-border/70 bg-[rgba(238,243,246,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-5 sm:h-16 sm:px-8">
          <Link href="/" className="transition hover:opacity-80">
            <Logo className="gap-2" markClassName="size-7 sm:size-8" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/tools"
              className="text-sm text-muted-foreground transition hover:text-brand-ink"
            >
              Tools
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground transition hover:text-brand-ink"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-medium tracking-[0.3em] text-brand-blue uppercase">
          Yumi&apos;s Intimate Abode
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-brand-ink">
          Move-in form
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Fill guest details for unit 2309, then download the 38 Park Avenue
          move-in PDF.
        </p>

        <div className="mt-8 space-y-8">
            <section className="space-y-4 rounded-xl border border-border bg-white/80 p-4 sm:p-5">
              <h2 className="font-[family-name:var(--font-display)] text-base font-semibold text-brand-ink">
                Stay
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Form date *">
                  <Input
                    type="date"
                    value={form.date}
                    onChange={(e) => setField("date", e.target.value)}
                  />
                </Field>
                <Field label="Booking # *">
                  <div className="flex min-w-0 items-stretch rounded-lg border border-input bg-transparent focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
                    <div ref={channelMenuRef} className="relative shrink-0">
                      <button
                        type="button"
                        aria-label={
                          selectedChannel
                            ? `Booking channel: ${selectedChannel.label}`
                            : "Booking channel"
                        }
                        aria-expanded={channelMenuOpen}
                        aria-haspopup="listbox"
                        className="flex h-full items-center rounded-l-lg border-r border-input bg-secondary/60 px-2.5 py-1.5"
                        onClick={() => setChannelMenuOpen((open) => !open)}
                      >
                        {selectedChannelSrc ? (
                          <ChannelIcon src={selectedChannelSrc} />
                        ) : null}
                      </button>
                      {channelMenuOpen ? (
                        <ul
                          role="listbox"
                          aria-label="Booking channel"
                          className="absolute top-[calc(100%+4px)] left-0 z-50 min-w-[14rem] rounded-lg border border-border bg-white py-1 shadow-lg"
                        >
                          {BOOKING_CHANNELS.map((channel) => {
                            const src = bookingChannelPublicPath(channel.id);
                            const selected = form.bookingChannel === channel.id;
                            return (
                              <li
                                key={channel.id}
                                role="option"
                                aria-selected={selected}
                              >
                                <button
                                  type="button"
                                  className={
                                    selected
                                      ? "flex w-full items-center gap-2.5 bg-accent px-3 py-2 text-left text-sm font-medium text-brand-ink"
                                      : "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm font-medium text-brand-ink hover:bg-muted"
                                  }
                                  onClick={() => {
                                    setField("bookingChannel", channel.id);
                                    setChannelMenuOpen(false);
                                  }}
                                >
                                  {src ? <ChannelIcon src={src} /> : null}
                                  <span>{channel.label}</span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </div>
                    <Input
                      value={form.bookingId}
                      onChange={(e) => setField("bookingId", e.target.value)}
                      placeholder="Booking number"
                      required
                      className="rounded-none rounded-r-lg border-0 focus-visible:ring-0"
                    />
                  </div>
                </Field>
                <Field label="Move-in *">
                  <Input
                    type="date"
                    value={form.moveIn}
                    onChange={(e) => setField("moveIn", e.target.value)}
                  />
                </Field>
                <Field label="Move-out *">
                  <Input
                    type="date"
                    value={form.moveOut}
                    onChange={(e) => setField("moveOut", e.target.value)}
                  />
                </Field>
              </div>
            </section>

            <section className="space-y-4 rounded-xl border border-border bg-white/80 p-4 sm:p-5">
              <h2 className="font-[family-name:var(--font-display)] text-base font-semibold text-brand-ink">
                Tenant
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Tenant name *">
                  <Input
                    value={form.tenantName}
                    onChange={(e) => setField("tenantName", e.target.value)}
                  />
                </Field>
                <Field label="Contact no.">
                  <Input
                    value={form.contactNo}
                    onChange={(e) => setField("contactNo", e.target.value)}
                  />
                </Field>
                <Field label="Nationality">
                  <Input
                    value={form.nationality}
                    onChange={(e) => setField("nationality", e.target.value)}
                  />
                </Field>
                <Field label="Office contact no.">
                  <Input
                    value={form.officeContactNo}
                    onChange={(e) =>
                      setField("officeContactNo", e.target.value)
                    }
                  />
                </Field>
              </div>
              <Field label="Address">
                <Textarea
                  value={form.address}
                  onChange={(e) => setField("address", e.target.value)}
                  rows={2}
                />
              </Field>
            </section>

            <section className="space-y-4 rounded-xl border border-border bg-white/80 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-[family-name:var(--font-display)] text-base font-semibold text-brand-ink">
                  Other occupants
                </h2>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-md"
                  disabled={form.occupants.length >= 4}
                  onClick={() =>
                    setField("occupants", [
                      ...form.occupants,
                      emptyOccupant(),
                    ])
                  }
                >
                  <Plus data-icon="inline-start" className="size-3.5" />
                  Add
                </Button>
              </div>
              {form.occupants.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Optional. Add only if someone else is staying too.
                </p>
              ) : null}
              {form.occupants.map((row, index) => (
                <div
                  key={index}
                  className="grid gap-3 rounded-lg border border-border/70 p-3 sm:grid-cols-[1fr_5rem_7rem_auto]"
                >
                  <Input
                    placeholder="Full name"
                    value={row.fullName}
                    onChange={(e) =>
                      updateOccupant(index, "fullName", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Age"
                    value={row.age}
                    onChange={(e) =>
                      updateOccupant(index, "age", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Gender"
                    value={row.gender}
                    onChange={(e) =>
                      updateOccupant(index, "gender", e.target.value)
                    }
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="justify-self-end"
                    onClick={() =>
                      setField(
                        "occupants",
                        form.occupants.filter((_, i) => i !== index),
                      )
                    }
                  >
                    <Trash2 className="size-3.5" />
                  </Button>
                </div>
              ))}
            </section>

            <section className="space-y-4 rounded-xl border border-border bg-white/80 p-4 sm:p-5">
              <h2 className="font-[family-name:var(--font-display)] text-base font-semibold text-brand-ink">
                Emergency contact
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name">
                  <Input
                    value={form.emergencyName}
                    onChange={(e) => setField("emergencyName", e.target.value)}
                  />
                </Field>
                <Field label="Contact no.">
                  <Input
                    value={form.emergencyContactNo}
                    onChange={(e) =>
                      setField("emergencyContactNo", e.target.value)
                    }
                  />
                </Field>
                <Field label="Relationship">
                  <Input
                    value={form.emergencyRelationship}
                    onChange={(e) =>
                      setField("emergencyRelationship", e.target.value)
                    }
                  />
                </Field>
                <Field label="Home address">
                  <Input
                    value={form.emergencyAddress}
                    onChange={(e) =>
                      setField("emergencyAddress", e.target.value)
                    }
                  />
                </Field>
              </div>
            </section>

            {error ? (
              <p
                role="alert"
                className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              >
                {error}
              </p>
            ) : null}

            <Button
              type="button"
              size="lg"
              className="rounded-md"
              disabled={busy || !canDownload}
              onClick={downloadPdf}
            >
              {busy ? (
                <>
                  <Loader2
                    data-icon="inline-start"
                    className="size-4 animate-spin"
                  />
                  Generating…
                </>
              ) : (
                <>
                  <Download data-icon="inline-start" className="size-4" />
                  Download PDF
                </>
              )}
            </Button>
        </div>
      </main>
    </div>
  );
}
