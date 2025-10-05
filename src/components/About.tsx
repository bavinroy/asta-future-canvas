import { Code2, Sparkles, Trophy, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code2,
      title: "Technical Workshops",
      description: "Hands-on sessions with industry experts on cutting-edge technologies"
    },
    {
      icon: Sparkles,
      title: "Innovation Showcase",
      description: "Display your projects and innovations to a diverse audience"
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "Exciting coding challenges with amazing prizes"
    },
    {
      icon: Zap,
      title: "Networking",
      description: "Connect with peers, mentors, and industry professionals"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

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
            About <span className="gradient-text">ASTA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ASTA (Association of Students in Engineering and Technology) is the premier annual tech symposium 
            celebrating innovation, creativity, and technological excellence
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-8 group perspective-card"
              >
                <motion.div 
                  className="bg-gradient-to-br from-primary/20 to-orange-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
       
      </div>
    </section>
  );
};
