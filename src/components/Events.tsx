import { Badge } from "@/components/ui/badge";
import { Brain, Code, Gamepad2, Lightbulb, Mic, Palette } from "lucide-react";

export const Events = () => {
  const eventCategories = [
    {
      icon: Code,
      title: "Coding Events",
      color: "from-blue-500 to-cyan-500",
      events: ["Code Sprint", "Bug Hunt", "Algo Quest", "Web-a-thon"]
    },
    {
      icon: Brain,
      title: "Tech Quiz",
      color: "from-purple-500 to-pink-500",
      events: ["Tech Trivia", "AI Challenge", "Data Science Quiz", "Crypto Quiz"]
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      color: "from-orange-500 to-red-500",
      events: ["Project Expo", "Startup Pitch", "Idea Presentation", "Paper Presentation"]
    },
    {
      icon: Palette,
      title: "Design",
      color: "from-green-500 to-emerald-500",
      events: ["UI/UX Design", "Logo Design", "Poster Design", "Video Editing"]
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      color: "from-indigo-500 to-blue-500",
      events: ["E-Sports", "Game Dev", "VR Challenge", "Mobile Gaming"]
    },
    {
      icon: Mic,
      title: "Non-Tech",
      color: "from-yellow-500 to-orange-500",
      events: ["Photography", "Short Film", "Treasure Hunt", "Debate"]
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Event <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from a diverse range of technical and non-technical events designed to challenge and inspire
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 hover-lift group"
              >
                <div className={`bg-gradient-to-br ${category.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.events.map((event, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="text-sm py-1 hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                      {event}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
