export interface ContactStripButton {
  label: string;
  href: string;
  external?: boolean;
}

export interface ContactStripProps {
  id?: string;
  message: string; // “Ready to talk? Request a quote …”
  primary: ContactStripButton; // Request Quote
  secondary: ContactStripButton; // WhatsApp Chat
  className?: string;
}
