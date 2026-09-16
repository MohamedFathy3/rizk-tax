import { ArrowUpLeft, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { company, navigation } from "@/config/company";

const serviceLinks = ["الاستشارات الضريبية", "الإقرارات الضريبية", "المحاسبة", "المراجعة والفحص"];

export default function Footer() {
  const socials = [
    { label: "فيسبوك", href: company.facebook, icon: Facebook },
    { label: "إنستجرام", href: company.instagram, icon: Instagram },
    { label: "لينكدإن", href: company.linkedin, icon: Linkedin },
  ].filter((social) => social.href);

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <Link href="/" className="brand footer-brand">
            <img className="footer-logo" src="/logo.png" alt="شعار رزق تاكس" />
          </Link>
          <p>{company.description}</p>
          <div className="footer-socials">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon size={17} />
              </a>
            ))}
            {company.whatsapp && (
              <a href={`https://wa.me/${company.whatsapp.replace(/[^\d]/g, "")}`} target="_blank" rel="noreferrer" aria-label="واتساب">
                <MessageCircle size={17} />
              </a>
            )}
          </div>
        </div>

        <div className="footer-column">
          <h3>روابط سريعة</h3>
          {navigation.filter((item) => !item.href.startsWith("/#")).map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
          <a href="/#services">خدماتنا</a>
        </div>

        <div className="footer-column">
          <h3>خدماتنا</h3>
          {serviceLinks.map((service) => <a key={service} href="/#services">{service}</a>)}
        </div>

        <div className="footer-column footer-contact-column">
          <h3>تواصل معنا</h3>
          {company.phone && <a href={`tel:${company.phone}`}><Phone size={15} />{company.phone}</a>}
          {company.email && <a href={`mailto:${company.email}`}><Mail size={15} />{company.email}</a>}
          {company.address && <a href={company.googleMaps || "#"} target={company.googleMaps ? "_blank" : undefined} rel="noreferrer"><MapPin size={15} />{company.address}</a>}
          {!company.phone && !company.email && !company.address && <span className="footer-muted">بيانات التواصل ستُضاف قريبًا</span>}
          <Link className="footer-contact-link" href="/contact">أرسل استفسارك <ArrowUpLeft size={15} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 {company.name} — جميع الحقوق محفوظة.</span>
        <span>حلول واضحة. قرارات أفضل.</span>
      </div>
    </footer>
  );
}
