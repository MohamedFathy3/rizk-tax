import { ArrowLeft, ArrowUpLeft, BarChart3, Calculator, CheckCircle2, ClipboardCheck, FileCheck2, Headphones, LineChart, MessageCircle, SearchCheck, ShieldCheck, Target } from "lucide-react";
import { Link } from "wouter";
import { company } from "@/config/company";

const services = [
  { title: "شهادات الدخل", text: "إعداد شهادات دخل واضحة للاستخدامات الرسمية والمصرفية حسب احتياجك.", icon: FileCheck2 },
  { title: "تأسيس الشركات", text: "مساعدة أصحاب الأعمال في خطوات التأسيس والملفات المرتبطة بالنشاط.", icon: ClipboardCheck },
  { title: "المحاسب القانوني", text: "خدمات محاسبية ومراجعة تساعدك على تنظيم أعمالك وفهم أرقامك.", icon: ShieldCheck },
  { title: "الاستشارات الضريبية", text: "شرح الالتزامات والخيارات الضريبية بلغة واضحة تناسب طبيعة نشاطك.", icon: Calculator },
  { title: "الفحوصات الضريبية", text: "مراجعة البيانات والملفات الضريبية وتجهيز الملاحظات المحتملة.", icon: SearchCheck },
  { title: "الإقرارات الضريبية", text: "إعداد ومراجعة إقرارات الدخل والقيمة المضافة بدقة واهتمام.", icon: CheckCircle2 },
  { title: "التحليل المالي", text: "تقارير تساعدك على تقييم الأداء ودعم القرارات الإدارية.", icon: LineChart },
  { title: "السياسات والإجراءات", text: "تنظيم السياسات المالية والمحاسبية بما يلائم طريقة عملك.", icon: BarChart3 },
];

const steps = [
  { number: "01", title: "نفهم احتياجك", text: "نبدأ من نشاطك والسؤال الذي تريد إجابة واضحة عنه." },
  { number: "02", title: "نراجع التفاصيل", text: "نرتب المعلومات والمستندات ونحدد الأولويات." },
  { number: "03", title: "نقترح الحل", text: "نقدم خطوات عملية مناسبة لطبيعة عملك." },
  { number: "04", title: "نتابع معك", text: "نظل قريبين عند الحاجة وفي كل مرحلة مهمة." },
];

export function Hero() {
  return <section className="reference-hero"><div className="reference-hero-shape" /><div className="container reference-hero-inner"><div className="reference-hero-copy"><span className="eyebrow">رزق تاكس للمحاسبة والضرائب</span><h1>خبراء في المحاسبة<br />والاستشارات الضريبية</h1><p>نقدم خدمات محاسبية وضريبية متكاملة تساعد أصحاب الأعمال والمنشآت على إدارة التزاماتهم بثقة ووضوح.</p><div className="hero-actions"><Link className="button button-blue" href="/contact">تواصل معنا <ArrowLeft size={17} /></Link><a className="text-link" href="#services">خدماتنا <ArrowUpLeft size={16} /></a></div></div><div className="reference-logo-panel"><img src="/manus-storage/rizk-tax-logo_3f4c5cf1.png" alt="شعار رزق تاكس - محاسبون قانونيون وخبراء ضرائب" /><span>حلول عملية تبدأ من فهم احتياجك</span></div></div></section>;
}

export function TrustStrip() {
  return <section className="reference-trust"><div className="container reference-trust-grid"><div><span className="eyebrow">لماذا رزق تاكس؟</span><p>دقة مهنية واهتمام حقيقي بتفاصيل أعمالك.</p></div><div><ShieldCheck size={24} /><strong>ثقة ووضوح</strong><small>تواصل مباشر وخطوات مفهومة</small></div><div><Target size={24} /><strong>حلول مناسبة</strong><small>خدمات مصممة حول احتياجك</small></div><div><Headphones size={24} /><strong>متابعة مستمرة</strong><small>نظل قريبين عند الحاجة</small></div></div></section>;
}

export function Services() {
  return <section className="section reference-services" id="services"><div className="container"><div className="section-heading reference-heading"><span className="eyebrow">ما نقدمه لك</span><h2>خدماتنا المحاسبية والضريبية</h2><p>نقدم خدمات محاسبية متكاملة تشمل الاستشارات الضريبية والمراجعة والتحليل المالي لمساعدتك على إدارة عملك بشكل أفضل.</p></div><div className="reference-services-grid">{services.map(({ title, text, icon: Icon }, index) => <article className="reference-service-card" key={title}><span className="reference-service-index">0{index + 1}</span><span className="reference-service-icon"><Icon size={25} /></span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`اعرف المزيد عن ${title}`}><ArrowLeft size={17} /></a></article>)}</div></div></section>;
}

export function WhyUs() {
  return <section className="section reference-about"><div className="container reference-about-grid"><div className="reference-about-visual"><div className="reference-about-orbit" /><span>RIZK<br /><b>TAX</b></span></div><div className="reference-about-copy"><span className="eyebrow">نبذة عن المكتب</span><h2>رزق تاكس للمحاسبة والاستشارات <em>المحاسبية والضريبية</em></h2><p>نلتزم بتقديم حلول دقيقة وموثوقة تخدم الأفراد ورواد الأعمال والشركات، من خلال فهم عملي للأنظمة المحاسبية والضريبية واحتياجات كل نشاط.</p><p>هدفنا أن نجعل التفاصيل المالية أكثر وضوحًا، وأن نساعدك على اتخاذ قرارات أفضل دون تعقيد أو مبالغة.</p><Link className="text-link" href="/about">اعرف المزيد عنا <ArrowLeft size={17} /></Link></div></div></section>;
}

export function AboutPreview() { return null; }

export function Process() {
  return <section className="section reference-process"><div className="container"><div className="section-heading reference-heading"><span className="eyebrow">كيف نعمل معك</span><h2>خطوات واضحة من البداية</h2></div><div className="reference-process-grid">{steps.map((step) => <div key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>;
}

export function FinalCta() {
  const number = company.whatsapp.replace(/[^\d]/g, "");
  return <section className="reference-cta" id="contact"><div className="container reference-cta-inner"><div><span className="eyebrow">تواصل معنا</span><h2>هل لديك استفسار ضريبي؟</h2><p>لا تتردد في التواصل معنا، فقط املأ النموذج وسنساعدك في معرفة الحل المناسب.</p></div><div className="cta-actions"><Link className="button button-blue" href="/contact">أرسل استفسارك <ArrowLeft size={17} /></Link>{number && <a className="button button-outline-blue" href={`https://wa.me/${number}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> واتساب</a>}</div></div></section>;
}
