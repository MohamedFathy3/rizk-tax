import { FormEvent, useState } from "react";
import { ArrowLeft, CheckCircle2, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { company } from "@/config/company";
import { buildContactMessage, buildMailtoUrl, buildWhatsAppUrl, ContactFormData } from "@/lib/whatsapp";

const initialForm: ContactFormData = { name: "", phone: "", email: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState("");

  const updateField = (field: keyof ContactFormData, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("");
    const message = buildContactMessage(form);
    const whatsappUrl = buildWhatsAppUrl(message);
    const mailtoUrl = buildMailtoUrl(form);
    const destination = whatsappUrl || mailtoUrl;

    if (destination) {
      window.open(destination, "_blank", "noopener,noreferrer");
      setSubmitted(true);
      return;
    }

    setNotice("أضف رقم واتساب أو البريد الإلكتروني في ملف إعدادات الشركة لتفعيل إرسال الطلبات.");
  };

  const contactItems = [
    { label: "الهاتف", value: company.phone, icon: Phone, href: company.phone ? `tel:${company.phone}` : "" },
    { label: "واتساب", value: company.whatsapp, icon: MessageCircle, href: company.whatsapp ? `https://wa.me/${company.whatsapp.replace(/[^\d]/g, "")}` : "" },
    { label: "البريد الإلكتروني", value: company.email, icon: Mail, href: company.email ? `mailto:${company.email}` : "" },
    { label: "العنوان", value: company.address, icon: MapPin, href: company.googleMaps || "" },
  ];

  const socials = [
    { label: "فيسبوك", value: company.facebook, icon: Facebook },
    { label: "إنستجرام", value: company.instagram, icon: Instagram },
    { label: "لينكدإن", value: company.linkedin, icon: Linkedin },
  ].filter((item) => item.value);

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <section className="page-hero page-hero-contact"><div className="page-hero-grid" /><div className="container page-hero-inner"><span className="eyebrow eyebrow-light">نحن على بُعد رسالة</span><h1>تواصل معنا</h1><p>يسعدنا الإجابة عن استفساراتك ومساعدتك في معرفة الحل المناسب لاحتياجاتك.</p><span className="page-hero-index">03 / 03</span></div></section>

        <section className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-info">
              <div className="section-heading"><span className="eyebrow">بيانات التواصل</span><h2>خلّينا نبدأ<br /><em>من سؤالك.</em></h2><p>اكتب لنا ما تحتاج إليه، وسنساعدك على ترتيب الصورة والخطوة التالية.</p></div>
              <div className="contact-cards">
                {contactItems.map(({ label, value, icon: Icon, href }) => value ? <a className="contact-card" key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><span className="contact-card-icon"><Icon size={18} /></span><span><small>{label}</small><strong>{value}</strong></span><ArrowLeft size={16} /></a> : <div className="contact-card contact-card-empty" key={label}><span className="contact-card-icon"><Icon size={18} /></span><span><small>{label}</small><strong>ستُضاف البيانات قريبًا</strong></span></div>)}
              </div>
              {socials.length > 0 && <div className="contact-socials"><small>تابعنا</small>{socials.map(({ label, value, icon: Icon }) => <a href={value} key={label} target="_blank" rel="noreferrer" aria-label={label}><Icon size={17} /></a>)}</div>}
            </div>

            <div className="contact-form-wrap">
              {submitted ? <div className="form-success"><span><CheckCircle2 size={28} /></span><h3>تم تجهيز طلبك</h3><p>فتحنا لك قناة التواصل المناسبة. شكرًا لثقتك في رزق تاكس.</p><button className="button button-navy" type="button" onClick={() => { setSubmitted(false); setForm(initialForm); }}>إرسال طلب آخر <ArrowLeft size={17} /></button></div> : <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span className="eyebrow">أرسل استفسارك</span><h3>كيف يمكننا مساعدتك؟</h3><p>املأ البيانات التالية، وسيتم فتح واتساب أو البريد الإلكتروني حسب الإعدادات.</p></div><div className="form-row"><label>الاسم<input required value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="اكتب اسمك" /></label><label>رقم الهاتف<input required value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="01xxxxxxxxx" dir="ltr" /></label></div><div className="form-row"><label>البريد الإلكتروني<input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="name@example.com" dir="ltr" /></label><label>نوع الخدمة<select required value={form.service} onChange={(event) => updateField("service", event.target.value)}><option value="">اختر الخدمة</option><option>استشارات ضريبية</option><option>إقرارات ضريبية</option><option>محاسبة</option><option>مراجعة وفحص</option><option>خدمة أخرى</option></select></label></div><label>الرسالة<textarea required value={form.message} onChange={(event) => updateField("message", event.target.value)} placeholder="اكتب تفاصيل استفسارك باختصار" rows={5} /></label>{notice && <div className="form-notice">{notice}</div>}<button className="button button-navy form-submit" type="submit">إرسال الطلب <Send size={17} /></button><small className="form-footnote">لن يتم إرسال البيانات إلى خادم؛ سيتم فتح قناة التواصل مباشرة من جهازك.</small></form>}
            </div>
          </div>
        </section>
        <section className="contact-bottom-note"><div className="container"><span>RIZK TAX</span><p>كل سؤال يستحق إجابة واضحة.</p><Link className="text-link" href="/">العودة للرئيسية <ArrowLeft size={16} /></Link></div></section>
      </main>
      <Footer />
    </div>
  );
}
