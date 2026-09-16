import { Facebook, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { company, navigation } from "@/config/company";

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark-bar brand-mark-bar-one" />
      <span className="brand-mark-bar brand-mark-bar-two" />
      <span className="brand-mark-bar brand-mark-bar-three" />
    </span>
  );
}

export default function Navbar() {
  const [location, navigate] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const handleNav = (href: string) => {
    if (href.startsWith("/#")) {
      if (location === "/") {
        document.querySelector(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(href);
      }
    }
  };

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label={`${company.nameAr} - الرئيسية`}>
          <img className="header-logo" src="/logo.png" alt="شعار رزق تاكس" />
        </Link>

        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          {navigation.map((item) =>
            item.href.startsWith("/#") ? (
              <a key={item.label} href={item.href} onClick={(event) => { event.preventDefault(); handleNav(item.href); }}>
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className={location === item.href ? "active" : ""}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Link className="nav-cta" href="/contact">
          <span>احجز استشارتك</span>
          <span className="nav-cta-arrow">←</span>
        </Link>

        <div className="nav-socials" aria-label="وسائل التواصل الاجتماعي">
          {company.facebook && <a href={company.facebook} target="_blank" rel="noreferrer" aria-label="فيسبوك"><Facebook size={16} /></a>}
          {company.whatsapp && <a href={`https://wa.me/${company.whatsapp.replace(/[^\d]/g, "")}`} target="_blank" rel="noreferrer" aria-label="واتساب"><MessageCircle size={16} /></a>}
        </div>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-nav ${open ? "mobile-nav-open" : ""}`}>
        <div className="container mobile-nav-inner">
          {navigation.map((item) =>
            item.href.startsWith("/#") ? (
              <a key={item.label} href={item.href} onClick={(event) => { event.preventDefault(); handleNav(item.href); }}>
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ),
          )}
          <Link className="mobile-nav-cta" href="/contact">احجز استشارتك الآن</Link>
        </div>
      </div>
    </header>
  );
}
