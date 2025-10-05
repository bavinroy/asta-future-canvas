import { Badge } from "@/components/ui/badge";
import { Brain, Code, Gamepad2, Lightbulb, Mic, Palette } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export const Events = () => {
  const eventCategories = [
    {
      icon: Code,
      title: "Technical Events",
      color: "from-blue-500 to-cyan-500",
      events: ["Web Forge (Website Building)", "Internet Using Vibecode"]
    },
    {
      icon: Brain,
      title: "Tech Quiz",
      color: "from-purple-500 to-pink-500",
      events: [ "Decode & Recode(Python & C)","Snap With AI (Replicate Image Using Prompt)"]
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      color: "from-orange-500 to-red-500",
      events: ["Project Presentation", "Paper Presentation", "Workshop(Fullstack Web Development)"]
    },
    
    {
      icon: Mic,
      title: "Non-Tech",
      color: "from-yellow-500 to-orange-500",
      events: ["Mystric Map Challenge", "Memewar", "Fun Activities"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Event <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from a diverse range of technical and non-technical events designed to challenge and inspire
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {eventCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={index} variants={item}>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={2000}
                  gyroscope={true}
                >
                  <div className="glass-card p-6 group h-full">
                    <motion.div 
                      className={`bg-gradient-to-br ${category.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.events.map((event, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Badge 
                            variant="secondary"
                            className="text-sm py-1 hover:bg-primary/20 transition-colors cursor-pointer"
                          >
                            {event}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
