import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const REGION_EMAILS: Record<string, string> = {
  "north-america": "owen.jenkins@rubiklab.ai",
  europe: "illitch.real@rubiklab.ai",
  other: "illitch.real@rubiklab.ai",
};

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    region: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.region || !form.message) return;

    setSending(true);

    const recipient = REGION_EMAILS[form.region] || REGION_EMAILS.other;
    const subject = encodeURIComponent(
      `New enquiry from ${form.name} — ${form.organisation || "N/A"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganisation: ${form.organisation}\nEmail: ${form.email}\nRegion: ${form.region}\n\n${form.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setForm({ name: "", organisation: "", email: "", region: "", message: "" });
      onOpenChange(false);
      toast({ title: "Thank you", description: "Your message is ready to send." });
    }, 600);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] theme-light">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-medium">
            Start a conversation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-[15px] leading-relaxed">
            Tell us what you are working on. We will respond directly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="organisation">Organisation</Label>
            <Input
              id="organisation"
              value={form.organisation}
              onChange={(e) => setForm({ ...form, organisation: e.target.value })}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label>Region</Label>
            <Select
              value={form.region}
              onValueChange={(val) => setForm({ ...form, region: val })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north-america">North America</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={sending}>
            {sending ? "Opening…" : "Send message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
