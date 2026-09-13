import {
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  Calculator,
  Check,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Headphones,
  LineChart,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "wouter";
import { company } from "@/config/company";

const services = [
  { title: "الاستشارات الضريبية", text: "نساعدك على فهم التزاماتك الضريبية واتخاذ قرارات مناسبة لطبيعة نشاطك.", icon: Calculator, number: "01" },
  { title: "الإقرارات الضريبية", text: "إعداد ومراجعة الإقرارات الضريبية بعناية وفق المتطلبات المعمول بها.", icon: FileCheck2, number: "02" },
  { title: "المحاسبة", text: "تنظيم ومتابعة العمليات المحاسبية لتتوفر أمامك صورة أوضح عن أعمالك.", icon: BarChart3, number: "03" },
  { title: "التسجيل والخدمات الضريبية", text: "مساعدة المنشآت وأصحاب الأعمال في الإجراءات المرتبطة بالمنظومة الضريبية.", icon: ClipboardCheck, number: "04" },
  { title: "المراجعة والفحص", text: "مراجعة البيانات والمستندات واكتشاف الملاحظات المحتملة قبل أن تكبر.", icon: SearchCheck, number: "05" },
  { title: "الدعم والاستشارات المستمرة", text: "متابعة قريبة للإجابة عن استفساراتك ومساعدتك في التعامل مع المستجدات.", icon: Headphones, number: "06" },
];

const benefits = [
  { title: "خبرة واحترافية", text: "نتعامل مع التفاصيل المالية والضريبية بمنهجية واضحة.", icon: ShieldCheck },
  { title: "حلول تناسب نشاطك", text: "نفهم طبيعة عملك قبل أن نقترح الخطوة التالية.", icon: Target },
  { title: "وضوح وشفافية", text: "نشرح الأمور المالية والضريبية بطريقة بسيطة ومباشرة.", icon: Sparkles },
  { title: "اهتمام بالتفاصيل", text: "نراجع التفاصيل بعناية لتقليل الأخطاء والملاحظات المحتملة.", icon: CheckCircle2 },
];

const steps = [
  { number: "01", title: "نفهم احتياجك", text: "نتعرف على نشاطك والتحدي الذي تحتاج إلى التعامل معه." },
  { number: "02", title: "نحلل وضعك", text: "نراجع التفاصيل والمعلومات المتعلقة بطلبك بعناية." },
  { number: "03", title: "نقدم الحل المناسب", text: "نقترح خطوات عملية تناسب احتياجاتك وأولوياتك." },
  { number: "04", title: "نتابع معك", text: "نستمر في المتابعة والدعم عند الحاجة وبالقدر المناسب." },
];

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal reveal-delay-one">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> حلول ضريبية ومحاسبية بثقة</div>
          <h1>شريكك في<br /><em>الحلول الضريبية</em><br />والمحاسبية.</h1>
          <p className="hero-lead">نساعدك على إدارة التزاماتك الضريبية والمحاسبية بثقة ووضوح، ونقدم لك حلولًا عملية تناسب احتياجات نشاطك.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/contact">تواصل معنا <ArrowLeft size={17} /></Link>
            <Link className="text-link text-link-light" href="/about">تعرف علينا <ArrowUpLeft size={16} /></Link>
          </div>
          <div className="hero-note"><span className="hero-note-line" /> نعتني بالتفاصيل، لتتفرغ لعملك</div>
        </div>

        <div className="hero-art reveal reveal-delay-two" aria-label="تصميم تجريدي يمثل وضوح البيانات المالية">
          <div className="hero-art-grid" />
          <div className="hero-art-ring hero-art-ring-one" />
          <div className="hero-art-ring hero-art-ring-two" />
          <div className="hero-chart-card">
            <div className="chart-card-head"><span>وضوح أكبر</span><LineChart size={17} /></div>
            <div className="chart-bars" aria-hidden="true"><i style={{ height: "34%" }} /><i style={{ height: "48%" }} /><i style={{ height: "42%" }} /><i style={{ height: "67%" }} /><i style={{ height: "61%" }} /><i className="chart-bar-active" style={{ height: "86%" }} /></div>
            <div className="chart-card-foot"><span>قرارات مبنية على فهم</span><b>+ وضوح</b></div>
          </div>
          <div className="hero-seal"><ShieldCheck size={19} /><span>ثقة<br /><small>تُبنى</small></span></div>
          <div className="hero-art-caption">RIZK<br /><span>TAX</span></div>
        </div>
      </div>
      <div className="hero-bottom-line container"><span>01</span><i /><span>رزق تاكس</span></div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        <div className="trust-intro"><span className="eyebrow">لماذا نبدأ من هنا؟</span><p>لأن التعامل مع التفاصيل المالية يبدأ بالوضوح.</p></div>
        <div className="trust-item"><span className="trust-icon"><ShieldCheck size={20} /></span><div><strong>خبرة مهنية</strong><small>منهجية واضحة في كل خطوة</small></div></div>
        <div className="trust-item"><span className="trust-icon"><Target size={20} /></span><div><strong>حلول متكاملة</strong><small>خدمات مترابطة تناسب نشاطك</small></div></div>
        <div className="trust-item"><span className="trust-icon"><Headphones size={20} /></span><div><strong>متابعة مستمرة</strong><small>نظل قريبين عند الحاجة</small></div></div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section section-services" id="services">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><span className="eyebrow">ما نقدمه لك</span><h2>خدماتنا</h2></div>
          <p>حلول ضريبية ومحاسبية تساعدك على إدارة أعمالك بثقة، من التفاصيل اليومية إلى القرارات المهمة.</p>
        </div>
        <div className="services-grid">
          {services.map(({ title, text, icon: Icon, number }) => (
            <article className="service-card" key={title}>
              <div className="service-top"><span className="service-number">{number}</span><span className="service-icon"><Icon size={22} /></span></div>
              <h3>{title}</h3><p>{text}</p><span className="service-arrow"><ArrowUpLeft size={17} /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section why-section">
      <div className="container why-grid">
        <div className="why-visual">
          <div className="why-visual-top"><span>R</span><small>منهجية رزق تاكس</small></div>
          <div className="why-visual-line" />
          <div className="why-visual-statement">أرقامك<br /><em>تستحق</em><br />وضوحًا.</div>
          <div className="why-visual-bottom"><span>01—04</span><span>RIZK TAX / EGYPT</span></div>
        </div>
        <div className="why-copy">
          <span className="eyebrow eyebrow-light">الفرق في التفاصيل</span>
          <h2>لماذا<br /><em>رزق تاكس؟</em></h2>
          <p className="why-lead">نؤمن أن الحل الجيد يبدأ من فهم حقيقي لنشاطك، وينتهي بخطوة واضحة يمكنك اتخاذها بثقة.</p>
          <div className="benefits-list">
            {benefits.map(({ title, text, icon: Icon }) => <div className="benefit-item" key={title}><span><Icon size={18} /></span><div><strong>{title}</strong><p>{text}</p></div></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="section about-preview-section">
      <div className="container about-preview-grid">
        <div className="section-heading"><span className="eyebrow">عن رزق تاكس</span><h2>نساعدك على التركيز في عملك، <em>ونعتني بالتفاصيل الضريبية.</em></h2></div>
        <div className="about-preview-copy"><p>رزق تاكس شريكك في فهم وإدارة احتياجاتك الضريبية والمحاسبية. نعمل على تبسيط التفاصيل، وتنظيم المعلومات، ومساعدتك على رؤية الصورة الأوضح لنشاطك.</p><Link className="text-link" href="/about">اعرف المزيد عنا <ArrowLeft size={17} /></Link></div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-heading section-heading-row"><div><span className="eyebrow">كيف نعمل</span><h2>خطوات بسيطة، <em>نتيجة أوضح.</em></h2></div><p>نضع التواصل والفهم والمتابعة في قلب كل تجربة معك.</p></div>
        <div className="process-grid">{steps.map((step, index) => <div className="process-item" key={step.number}><span className="process-number">{step.number}</span><div className="process-connector">{index < steps.length - 1 && <i />}</div><h3>{step.title}</h3><p>{step.text}</p></div>)}</div>
      </div>
    </section>
  );
}

export function FinalCta() {
  const whatsapp = company.whatsapp.replace(/[^\d]/g, "");
  return (
    <section className="cta-section">
      <div className="cta-pattern" />
      <div className="container cta-inner">
        <div><span className="eyebrow eyebrow-light">نحن هنا لمساعدتك</span><h2>هل لديك <em>استفسار ضريبي؟</em></h2><p>تحدث معنا ودعنا نساعدك في فهم احتياجاتك والوصول إلى الحل المناسب.</p></div>
        <div className="cta-actions"><Link className="button button-gold" href="/contact">تواصل معنا <ArrowLeft size={17} /></Link>{whatsapp && <a className="button button-ghost-light" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> واتساب</a>}</div>
      </div>
    </section>
  );
}
