import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const Registration = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Registration</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Register now and be part of this amazing event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="glass-card p-8"
          >
            <h3 className="text-3xl font-bold mb-4 gradient-text">Single Event</h3>
            <div className="text-4xl font-bold text-foreground mb-6">₹100</div>
            <ul className="space-y-3 mb-8">
              {["Event participation", "Certificate", "Event kit", "Refreshments"].map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Check className="w-5 h-5 text-primary" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="w-full">
                Register Now
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="glass-card p-8 border-primary/50 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-orange-500/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-primary to-orange-500 text-primary-foreground text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                BEST VALUE
              </div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">All Events Pass</h3>
              <div className="text-4xl font-bold text-foreground mb-6">₹300</div>
              <ul className="space-y-3 mb-8">
                {[
                  "All event access",
                  "Workshop access",
                  "Certificate",
                  "Premium event kit",
                  "All-day refreshments",
                  "Networking sessions"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Check className="w-5 h-5 text-primary" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="lg" className="w-full">
                  Get Full Access
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 text-center"
        >
          <p className="text-muted-foreground">
            Registration closes on <span className="text-primary font-semibold">March 10, 2025</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            For queries: <a href="mailto:asta2k25@selvamtech.edu" className="text-primary hover:underline">asta2k25@selvamtech.edu</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
