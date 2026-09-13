import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return <div className="app-shell"><Navbar /><main className="not-found"><div className="container not-found-inner"><span className="eyebrow">404 / الصفحة غير موجودة</span><h1>يبدو أننا<br /><em>ابتعدنا قليلًا.</em></h1><p>الصفحة التي تبحث عنها غير متاحة أو تم نقلها.</p><Link className="button button-navy" href="/">العودة للرئيسية <ArrowLeft size={17} /></Link></div></main><Footer /></div>;
}
