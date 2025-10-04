import { ParticleBackground } from "@/components/ParticleBackground";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
import { Schedule } from "@/components/Schedule";
import { Registration } from "@/components/Registration";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Events />
        <Schedule />
        <Registration />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
