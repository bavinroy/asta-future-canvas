import { Clock } from "lucide-react";
import { motion } from "framer-motion";

export const Schedule = () => {
  const scheduleDay1 = [
    { time: "09:00 AM", event: "Registration", type: "general" },
    { time: "10:00 AM", event: "Inauguration Ceremony", type: "keynote" },
    { time: "11:00 AM", event: "Technical Workshop ", type: "workshop" },
    { time: "12:00 PM", event: "Coding Competitions Begin", type: "competition" },
    { time: "01:00 PM", event: "Lunch Break", type: "general" },
    { time: "02:00 PM", event: "Paper Presentation & Innovation Showcase", type: "showcase" },
    { time: "04:00 PM", event: "Prize Distribution & Closing Ceremony", type: "general" },
  ];


  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote": return "border-l-primary";
      case "workshop": return "border-l-blue-500";
      case "competition": return "border-l-orange-500";
      case "showcase": return "border-l-purple-500";
      default: return "border-l-muted";
    }
  };

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Event <span className="gradient-text">Schedule</span>
          </h2>
          
        </motion.div>

        {/* Schedule Days */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Day 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <h3 className="text-3xl font-bold gradient-text">Oct 24, 2025</h3>
            </div>
            <div className="space-y-4">
              {scheduleDay1.map((item, index) => (
                <div 
                  key={index}
                  className={`border-l-4 ${getTypeColor(item.type)} pl-4 py-2 hover:bg-card/50 transition-colors rounded-r`}
                >
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm text-primary font-semibold">{item.time}</div>
                      <div className="text-foreground font-medium">{item.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
