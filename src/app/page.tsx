import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSlider from "@/components/TrustSlider";
import ViviendaSection from "@/components/ViviendaSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSlider />
        <WhyUs />
        <ProjectsCarousel />
        <ViviendaSection />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
