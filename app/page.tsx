import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import VisualizationTeaser from "@/components/VisualizationTeaser";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <ProjectGrid />
        <VisualizationTeaser />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
