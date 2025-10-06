import { Button } from "@/components/ui/button";
import { Calendar, MapPin, PhoneCall, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

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
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/85 to-background"></div>
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 z-0" style={{ background: 'var(--gradient-mesh)' }}></div>

      {/* Animated Glow Effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* College Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card inline-block px-8 py-4 mb-8"
        >
          <h2 className="text-lg font-semibold text-foreground">SELVAM COLLEGE OF TECHNOLOGY</h2>
          <p className="text-sm text-muted-foreground mt-1">Salem Road(NH 44), Namakkal, Tamil Nadu 637003, India</p>
          <p className="text-xs text-muted-foreground">(Autonomous)</p>
        </motion.div>

        {/* Main Title with Stagger Effect */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1]
          }}
          className="text-8xl md:text-9xl font-black mb-6"
        >
          <span className="gradient-text gold-glow animate-gradient bg-gradient-to-r from-primary via-orange-500 to-primary">
          ASTA'25
          </span>
        </motion.h1>

        {/* Department Info */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-foreground mb-8"
        >
          Department of IT, CSE & AIDS
        </motion.p>

        {/* Event Details with Stagger Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Calendar, text: "Oct 24, 2025" },
            { icon: MapPin, text: "Namakkal Campus" },
            { icon: Users, text: "500+ Participants" }
            
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-2 glass-card px-6 py-3 cursor-pointer"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button with Pulse Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg" 
            variant="hero"
            className="px-12 py-7 text-xl relative overflow-hidden group"
          >
            <span className="relative z-10">A S S E M B L E !</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-primary"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </Button>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Join us for  innovation, technology, and collaboration
        </motion.p>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
    </section>
  );
};
