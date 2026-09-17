import { ArrowLeft, ArrowUpLeft, CheckCircle2, ClipboardCheck, FileCheck2, LineChart, Mail, MapPin, MessageCircle, Phone, SearchCheck, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { company } from "@/config/company";

const services = [
  { title: "شهادات الدخل", text: "إصدار شهادات دخل واضحة للاستخدامات الرسمية والمصرفية.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80", icon: FileCheck2 },
  { title: "تأسيس الشركات", text: "مساعدة أصحاب الأعمال في خطوات التأسيس والملفات المرتبطة بالنشاط.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80", icon: ClipboardCheck },
  { title: "محاسب قانوني معتمد", text: "خدمات محاسبية ومراجعة تساعدك على تنظيم أعمالك وفهم أرقامك.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80", icon: ShieldCheck },
  { title: "استشارات ضريبية", text: "شرح الالتزامات والخيارات الضريبية بما يناسب طبيعة نشاطك.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80", icon: SearchCheck },
  { title: "فحوصات ضريبية", text: "مراجعة البيانات والملفات الضريبية وتجهيز الملاحظات المحتملة.", image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=900&q=80", icon: SearchCheck },
  { title: "اعتماد الإقرارات الضريبية", text: "إعداد ومراجعة إقرارات الدخل والقيمة المضافة بدقة واهتمام.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80", icon: CheckCircle2 },
  { title: "التحليل المالي وتقييم الأداء", text: "تقارير تساعدك على تقييم الأداء ودعم القرارات الإدارية.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80", icon: LineChart },
  { title: "إعداد السياسات والإجراءات", text: "تنظيم السياسات المالية والمحاسبية بما يلائم طريقة عملك.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80", icon: ClipboardCheck },
  { title: "مراجعة الحسابات والقوائم المالية", text: "مراجعة منظمة تساعد على رفع مستوى الشفافية والالتزام.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", icon: ShieldCheck },
  { title: "نظام ERP مدعوم بالذكاء الاصطناعي", text: "نساعدك على اختيار وتطبيق نظام ERP يربط الحسابات والمخزون والمبيعات، مع أدوات ذكاء اصطناعي لتحليل البيانات وأتمتة التقارير ودعم قراراتك.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80", icon: LineChart },
];

const testimonials = [
  { name: "عميل من أصحاب الأعمال", text: "تواصل واضح ومتابعة منظمة ساعدتنا على فهم احتياجاتنا المحاسبية." },
  { name: "صاحب منشأة", text: "وجدنا إجابات عملية وطريقة عمل مريحة في التعامل مع التفاصيل." },
  { name: "رائد أعمال", text: "خدمة مهنية واهتمام حقيقي بما نحتاجه في كل مرحلة." },
];

export function Hero() {
  return <section className="reference-photo-hero"><img className="reference-hero-photo" src="/slider.jpeg" alt="Rizk Tax for accounting and tax consulting" /><div className="reference-hero-overlay" /><div className="container reference-photo-inner"><h1>Rizk Tax<br />Accounting &amp; Tax Consulting</h1><p>نقدم خدمات محاسبية وضريبية متكاملة تساعد أصحاب الأعمال والمنشآت على إدارة التزاماتهم بثقة ووضوح.</p><Link className="reference-pill-button" href="/contact">احجز استشارتك مجانًا <ArrowLeft size={14} /></Link><div className="reference-scroll">اكتشف خدماتنا <span>↓</span></div></div></section>;
}

export function TrustStrip() { return <div className="reference-spacer-strip" />; }

export function Services() {
  return <section className="reference-photo-services" id="services"><div className="container"><div className="reference-photo-heading"><span className="eyebrow">ما نقدمه لك</span><h2>خدماتنا المحاسبية والرقمية</h2><p>نقدم حلولًا محاسبية وضريبية ورقمية متكاملة؛ من تأسيس الأعمال والمراجعة إلى التحليل المالي، وتطبيق أنظمة ERP الذكية التي تساعدك على إدارة عملياتك واتخاذ قرارات أدق.</p></div><div className="photo-services-grid">{services.map(({ title, text, image, icon: Icon }, index) => <article className="photo-service-card" key={title}><div className="photo-service-image"><img src={image} alt={title} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/slider.jpeg"; }} /><span><Icon size={15} /></span></div><div className="photo-service-copy"><span className="photo-service-number">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>;
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
