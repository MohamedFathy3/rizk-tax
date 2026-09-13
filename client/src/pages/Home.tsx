import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { AboutPreview, FinalCta, Hero, Process, Services, TrustStrip, WhyUs } from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <AboutPreview />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
