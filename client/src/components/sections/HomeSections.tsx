import { ArrowLeft, ArrowUpLeft, CheckCircle2, ClipboardCheck, FileCheck2, LineChart, Mail, MapPin, MessageCircle, Phone, SearchCheck, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { company } from "@/config/company";

const services = [
  { title: "شهادات الدخل", text: "إصدار شهادات دخل واضحة للاستخدامات الرسمية والمصرفية.", image: "/manus-storage/calculator_154aca8e.jpg", icon: FileCheck2 },
  { title: "تأسيس الشركات", text: "مساعدة أصحاب الأعمال في خطوات التأسيس والملفات المرتبطة بالنشاط.", image: "/manus-storage/service-meeting_279d87d0.jpg", icon: ClipboardCheck },
  { title: "محاسب قانوني معتمد", text: "خدمات محاسبية ومراجعة تساعدك على تنظيم أعمالك وفهم أرقامك.", image: "/manus-storage/accountant_1fac540b.jpg", icon: ShieldCheck },
  { title: "استشارات ضريبية", text: "شرح الالتزامات والخيارات الضريبية بما يناسب طبيعة نشاطك.", image: "/manus-storage/documents_08c2d3a9.jpg", icon: SearchCheck },
  { title: "فحوصات ضريبية", text: "مراجعة البيانات والملفات الضريبية وتجهيز الملاحظات المحتملة.", image: "/manus-storage/dark-paperwork_355ef6fd.jpg", icon: SearchCheck },
  { title: "اعتماد الإقرارات الضريبية", text: "إعداد ومراجعة إقرارات الدخل والقيمة المضافة بدقة واهتمام.", image: "/manus-storage/desk_b01e2a13.jpg", icon: CheckCircle2 },
  { title: "التحليل المالي وتقييم الأداء", text: "تقارير تساعدك على تقييم الأداء ودعم القرارات الإدارية.", image: "/manus-storage/service-client_5b52c83d.jpg", icon: LineChart },
  { title: "إعداد السياسات والإجراءات", text: "تنظيم السياسات المالية والمحاسبية بما يلائم طريقة عملك.", image: "/manus-storage/calculator_154aca8e.jpg", icon: ClipboardCheck },
  { title: "مراجعة الحسابات والقوائم المالية", text: "مراجعة منظمة تساعد على رفع مستوى الشفافية والالتزام.", image: "/manus-storage/accountant_1fac540b.jpg", icon: ShieldCheck },
];

const testimonials = [
  { name: "عميل من أصحاب الأعمال", text: "تواصل واضح ومتابعة منظمة ساعدتنا على فهم احتياجاتنا المحاسبية." },
  { name: "صاحب منشأة", text: "وجدنا إجابات عملية وطريقة عمل مريحة في التعامل مع التفاصيل." },
  { name: "رائد أعمال", text: "خدمة مهنية واهتمام حقيقي بما نحتاجه في كل مرحلة." },
];

export function Hero() {
  return <section className="reference-photo-hero"><img className="reference-hero-photo" src="/manus-storage/hero_1f95f595.jpg" alt="مكتب وأوراق محاسبية" /><div className="reference-hero-overlay" /><div className="container reference-photo-inner"><span className="reference-mini-logo">R<span>▲</span></span><h1>رزق تاكس<br />للمحاسبة والاستشارات الضريبية</h1><p>نقدم خدمات محاسبية وضريبية متكاملة تساعد أصحاب الأعمال والمنشآت على إدارة التزاماتهم بثقة ووضوح.</p><Link className="reference-pill-button" href="/contact">احجز استشارتك مجانًا <ArrowLeft size={14} /></Link><div className="reference-scroll">اكتشف خدماتنا <span>↓</span></div></div></section>;
}

export function TrustStrip() { return <div className="reference-spacer-strip" />; }

export function Services() {
  return <section className="reference-photo-services" id="services"><div className="container"><div className="reference-photo-heading"><span className="eyebrow">ما نقدمه لك</span><h2>خدماتنا المحاسبية</h2><p>نقدم خدمات محاسبية وضريبية متكاملة تشمل الاستشارات والمراجعة والتحليل المالي لمساعدتك على النجاح.</p></div><div className="photo-services-grid">{services.map(({ title, text, image, icon: Icon }, index) => <article className="photo-service-card" key={title}><div className="photo-service-image"><img src={image} alt="" /><span><Icon size={15} /></span></div><div className="photo-service-copy"><span className="photo-service-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>;
}

export function WhyUs() {
  return <section className="reference-photo-about"><div className="container photo-about-grid"><div className="photo-about-copy"><span className="eyebrow">نبذة عن رزق تاكس</span><h2>رزق تاكس للمحاسبة والاستشارات المحاسبية والضريبية</h2><p>نقدم حلولًا دقيقة وموثوقة تخدم الأفراد ورواد الأعمال والشركات، من خلال فهم عملي للأنظمة المحاسبية والضريبية واحتياجات كل نشاط.</p><p>نلتزم بالوضوح والاحترافية والاهتمام بالتفاصيل، لمساعدتك على إدارة أعمالك واتخاذ قرارات أفضل.</p><h3>الرؤية:</h3><p className="accent-copy">أن نكون شريكًا موثوقًا يساعد عملاءه على النمو والالتزام.</p><h3>الرسالة:</h3><p className="accent-copy">تقديم خدمات محاسبية وضريبية تعتمد على المعرفة والنزاهة والاحترافية.</p><Link className="reference-outline-button" href="/about">اعرف المزيد <ArrowLeft size={14} /></Link></div><div className="photo-about-badge"><span>R</span><strong>Rizk</strong><small>TAX & ACCOUNTING</small><i>خبراء ضرائب ومحاسبة</i></div></div></section>;
}

export function AboutPreview() { return null; }

export function Process() {
  return <section className="reference-testimonials"><div className="container"><div className="reference-photo-heading"><span className="eyebrow">تجارب عملائنا</span><h2>آراء عملائنا</h2><p>نسعد بثقة عملائنا ونؤمن أن جودة الخدمة تظهر في التجربة اليومية.</p></div><div className="testimonials-grid">{testimonials.map((item) => <article key={item.name}><div className="stars">★★★★★</div><p>“{item.text}”</p><strong>{item.name}</strong><small>عميل رزق تاكس</small></article>)}</div></div></section>;
}

export function FinalCta() {
  const number = company.whatsapp.replace(/[^\d]/g, "");
  return <section className="reference-photo-contact"><div className="container photo-contact-grid"><div className="photo-contact-copy"><span className="eyebrow">تواصل معنا</span><h2>يسعدنا الإجابة عن استفساراتك</h2><p>لأي استفسارات أو معلومات إضافية، لا تتردد في التواصل معنا.</p><div className="photo-contact-details">{company.phone && <a href={`tel:${company.phone}`}><Phone size={15} />{company.phone}</a>}{company.email && <a href={`mailto:${company.email}`}><Mail size={15} />{company.email}</a>}{company.address && <span><MapPin size={15} />{company.address}</span>}</div><Link className="reference-pill-button red" href="/contact">املأ نموذج التواصل <ArrowLeft size={14} /></Link></div><div className="photo-contact-card"><span className="eyebrow">ابدأ محادثة</span><h3>كيف يمكننا مساعدتك؟</h3><p>اكتب لنا احتياجك وسنساعدك في معرفة الحل المناسب.</p><Link className="reference-pill-button red" href="/contact">تواصل معنا <ArrowLeft size={14} /></Link>{number && <a className="whatsapp-link" href={`https://wa.me/${number}`} target="_blank" rel="noreferrer"><MessageCircle size={15} /> واتساب</a>}</div></div></section>;
}
