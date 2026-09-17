import { MessageCircle, Phone } from "lucide-react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { company } from "@/config/company";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function FloatingContactActions() {
  const phoneNumber = company.phone.split("/")[0].replace(/[^\d+]/g, "");
  const whatsappNumber = company.whatsapp.replace(/[^\d]/g, "");

  return (
    <div className="floating-contact-actions" aria-label="خيارات التواصل السريع">
      <a className="floating-contact-button floating-contact-phone" href={`tel:${phoneNumber}`} aria-label="اتصل بنا">
        <Phone size={22} strokeWidth={2.2} />
        <span>اتصل بنا</span>
      </a>
      <a className="floating-contact-button floating-contact-whatsapp" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="تواصل معنا عبر واتساب">
        <MessageCircle size={23} strokeWidth={2.2} />
        <span>واتساب</span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <FloatingContactActions />
    </ErrorBoundary>
  );
}
