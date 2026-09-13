import { company } from "@/config/company";

export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export function buildWhatsAppUrl(message: string): string | null {
  const number = company.whatsapp.replace(/[^\d]/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildContactMessage(data: ContactFormData): string {
  return [
    "مرحبًا رزق تاكس،",
    "",
    `الاسم: ${data.name}`,
    `رقم الهاتف: ${data.phone}`,
    `البريد الإلكتروني: ${data.email || "غير مذكور"}`,
    `الخدمة المطلوبة: ${data.service || "غير محددة"}`,
    `الرسالة: ${data.message}`,
  ].join("\n");
}

export function buildMailtoUrl(data: ContactFormData): string | null {
  if (!company.email) return null;
  const subject = encodeURIComponent(`طلب تواصل من ${data.name}`);
  const body = encodeURIComponent(buildContactMessage(data));
  return `mailto:${company.email}?subject=${subject}&body=${body}`;
}
