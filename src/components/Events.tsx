import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Code, Mic, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

export const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const eventCategories = [
    {
      icon: Code,
      title: "Technical Events",
      color: "from-blue-500 to-cyan-500",
      events: [
        "Web Forge (Website Building)",
        "Internet Using Vibecode",
        "Decode & Recode(Python & C)",
        "Paper Presentation",
      ],
    },
    {
      icon: Mic,
      title: "Non-Tech",
      color: "from-yellow-500 to-orange-500",
      events: [
        "Mystric Map Challenge",
        "Memewar",
        "Snap With AI (Replicate Image Using Prompt)",
        "Fun Activities",
      ],
    },
    {
      icon: Zap,
      title: "Workshop",
      color: "from-blue-500 to-cyan-500",
      events: ["Fullstack Web Development"],
    },
  ];

  const eventDetails: Record<string, string> = {
    "Web Forge (Website Building)": `
Round 1: Front-End Development
• Participants will design a simple and attractive webpage.

Round 2: Backend Connection
• Connect your front end with backend logic.

Related Topic: On-spot theme will be given during the event.
    `,
    "Decode & Recode(Python & C)": `
Round 1:
• Participants will be given 5–6 Python programs.
• They must convert them into C programs within 60 minutes.
• Programs will test loops, conditionals, and functions.

Round 2:
• Qualified participants move to Round 2.
• They will be given 2–3 advanced Python programs (arrays, strings, functions).
• Duration: 45 minutes.
• Must convert and execute successfully in C.
    `,
    "Paper Presentation": `
• Max 4 members per team.
• Present papers on cutting-edge technologies.
• Abstract: up to 250 words.
• PowerPoint: up to 15 slides.
• Presentation: max 5 minutes.
• Must be clear, concise, and factually accurate.
    `,
    "Mystric Map Challenge": `
Round 1:
• Identify logos and hit the buzzer fast!
• Top 5 teams move to next round.

Round 2:
• Scan QR codes placed around to find the correct route.

Round 3:
• Find the hidden gift using clues.
• The first team to grab it wins!
    `,
    "Snap With AI (Replicate Image Using Prompt)": `
Round 1:
• Given 2 sample images (45 mins).
• Task: Write creative prompts in Gemini AI to recreate images.
• Top matches qualify for Round 2.

Round 2:
• 1 complex or concept-based image (60 mins).
• Must craft a perfect AI prompt that captures the theme accurately.
    `,
  };

  // 👇 Scroll to the detail box when event selected
  useEffect(() => {
    if (selectedEvent && detailRef.current) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, [selectedEvent]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
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
            Choose from a diverse range of technical and non-technical events designed to challenge and inspire.
          </p>
        </motion.div>

        {/* Event Cards */}
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
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.events.map((event, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`text-sm py-1 cursor-pointer hover:bg-primary/20 ${
                              selectedEvent === event
                                ? "bg-primary text-white"
                                : ""
                            }`}
                            onClick={() =>
                              setSelectedEvent(
                                selectedEvent === event ? null : event
                              )
                            }
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

        {/* Event Detail Box */}
        <div ref={detailRef}>
          <AnimatePresence>
            {selectedEvent && (
              <motion.div
                key={selectedEvent}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="mt-12 p-6 rounded-2xl bg-card/60 border border-border shadow-lg backdrop-blur-md"
              >
                <h3 className="text-3xl font-semibold mb-4 gradient-text">
                  {selectedEvent}
                </h3>
                <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                  {eventDetails[selectedEvent] || ""}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
