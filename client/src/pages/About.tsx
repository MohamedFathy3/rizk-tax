import { ArrowLeft, CheckCircle2, Eye, Focus, Handshake, Scale, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const values = [
  { title: "الاحترافية", text: "منهجية منظمة، ولغة واضحة، واهتمام بما يهم نشاطك.", icon: Sparkles },
  { title: "الشفافية", text: "نشاركك الصورة كما هي ونوضح لك الخيارات المتاحة.", icon: Eye },
  { title: "الثقة", text: "نبني علاقة عمل هادئة تقوم على الفهم والالتزام.", icon: Handshake },
  { title: "الدقة", text: "نراجع التفاصيل بعناية لأنها تصنع الفارق.", icon: CheckCircle2 },
  { title: "الالتزام", text: "نتابع ما اتفقنا عليه ونظل قريبين في الوقت المناسب.", icon: ShieldCheck },
  { title: "خدمة العميل", text: "نبدأ من احتياجك ونصمم التواصل حوله.", icon: Focus },
];

export default function About() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="page-hero-grid" />
          <div className="container page-hero-inner"><span className="eyebrow eyebrow-light">تعرف على رزق تاكس</span><h1>من نحن</h1><p>شريك عملي يساعدك على فهم وإدارة احتياجاتك الضريبية والمحاسبية بوضوح.</p><span className="page-hero-index">02 / 03</span></div>
        </section>

        <section className="section about-story-section">
          <div className="container about-story-grid">
            <div className="about-story-label"><span className="eyebrow">منهجنا</span><strong>وضوح<br /><em>يبني</em><br />ثقة.</strong></div>
            <div className="about-story-copy"><h2>نحن نؤمن أن التفاصيل المالية لا يجب أن تكون معقدة.</h2><p>رزق تاكس مساحة مهنية تساعد أصحاب الأعمال والمنشآت على التعامل مع احتياجاتهم الضريبية والمحاسبية بطريقة أكثر فهمًا وتنظيمًا. نستمع أولًا، نحلل ما أمامنا، ثم نضع الخطوة العملية التي تناسبك.</p><p>لا نَعِدك بحلول عامة؛ نركز على تقديم إجابات واضحة، ومتابعة قريبة، وتواصل يجعل الأمور المهمة أسهل في إدارتها.</p><Link className="text-link" href="/contact">ابدأ محادثة <ArrowLeft size={17} /></Link></div>
          </div>
        </section>

        <section className="section mission-section">
          <div className="container mission-grid">
            <article className="mission-card mission-card-dark"><span className="mission-icon"><Scale size={22} /></span><span className="eyebrow eyebrow-light">رسالتنا</span><h2>تقديم حلول ضريبية ومحاسبية واضحة وعملية تساعد أصحاب الأعمال والمنشآت على إدارة التزاماتهم بثقة.</h2><span className="mission-number">01</span></article>
            <article className="mission-card"><span className="mission-icon mission-icon-gold"><Eye size={22} /></span><span className="eyebrow">رؤيتنا</span><h2>أن نكون شريكًا موثوقًا لعملائنا في إدارة احتياجاتهم المالية والضريبية.</h2><span className="mission-number">02</span></article>
          </div>
        </section>

        <section className="section values-section">
          <div className="container"><div className="section-heading section-heading-row"><div><span className="eyebrow">ما نؤمن به</span><h2>قيمنا</h2></div><p>قيم بسيطة نترجمها إلى طريقة عمل واضحة في كل تواصل وكل تفصيلة.</p></div><div className="values-grid">{values.map(({ title, text, icon: Icon }, index) => <article className="value-card" key={title}><span className="value-index">0{index + 1}</span><Icon size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div></div>
        </section>

        <section className="about-final-cta"><div className="container about-final-inner"><div><span className="eyebrow eyebrow-light">خطوتك التالية</span><h2>دعنا نساعدك في إدارة<br /><em>احتياجاتك الضريبية.</em></h2></div><Link className="button button-gold" href="/contact">تواصل معنا <ArrowLeft size={17} /></Link></div></section>
      </main>
      <Footer />
    </div>
  );
}
