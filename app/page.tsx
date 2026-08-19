import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <ProjectGrid />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
