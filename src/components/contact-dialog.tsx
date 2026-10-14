"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const TO_EMAIL = "kendantinio@gmail.com";

type ContactDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Enter a valid email so we can reply.");
      return;
    }

    const subject = encodeURIComponent("UgnAI Labs Co. inquiry");
    const body = encodeURIComponent(
      [
        `From: ${trimmed}`,
        "",
        message.trim() || "(No message)",
        "",
        "Sent from ugnailabs.co contact form",
      ].join("\n"),
    );

    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
    setError("");
    setEmail("");
    setMessage("");
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" showCloseButton>
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-display)] text-xl">
            Contact us
          </DialogTitle>
          <DialogDescription>
            Leave your email and a short note. We&apos;ll get back to you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="contact-email">Your email</Label>
            <Input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) setError("");
              }}
            />
            {error ? (
              <p className="text-xs text-destructive" role="alert">
                {error}
              </p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="What are you building or looking for?"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <DialogFooter className="gap-2 sm:justify-end">
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="rounded-md">
              <Mail data-icon="inline-start" />
              Send
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
