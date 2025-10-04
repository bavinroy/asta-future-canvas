import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* College Header */}
        <div className="glass-card inline-block px-8 py-4 mb-8 animate-fade-in">
          <h2 className="text-lg font-semibold text-foreground">SELVAM COLLEGE OF TECHNOLOGY</h2>
          <p className="text-sm text-muted-foreground mt-1">Ponnusamy Nagar, Namakkal, Tamil Nadu 637003, India</p>
          <p className="text-xs text-muted-foreground">(Autonomous)</p>
        </div>

        {/* Main Title */}
        <h1 className="text-8xl md:text-9xl font-black mb-6 animate-fade-in-delay">
          <span className="gradient-text gold-glow">ASTA-2k25</span>
        </h1>

        {/* Department Info */}
        <p className="text-2xl md:text-3xl font-semibold text-foreground mb-8 animate-slide-up">
          Department of AIDS, CSE & IT
        </p>

        {/* Event Details */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 glass-card px-6 py-3">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-foreground">March 15-16, 2025</span>
          </div>
          <div className="flex items-center gap-2 glass-card px-6 py-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-foreground">Namakkal Campus</span>
          </div>
          <div className="flex items-center gap-2 glass-card px-6 py-3">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground">500+ Participants</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg" 
          variant="hero"
          className="px-12 py-7 text-xl animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          A S S E M B L E !
        </Button>

        {/* Tagline */}
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Join us for two days of innovation, technology, and collaboration
        </p>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
    </section>
  );
};
