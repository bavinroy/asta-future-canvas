import { Clock } from "lucide-react";

export const Schedule = () => {
  const scheduleDay1 = [
    { time: "09:00 AM", event: "Registration & Breakfast", type: "general" },
    { time: "10:00 AM", event: "Inauguration Ceremony", type: "keynote" },
    { time: "11:00 AM", event: "Technical Workshop Session 1", type: "workshop" },
    { time: "01:00 PM", event: "Lunch Break", type: "general" },
    { time: "02:00 PM", event: "Coding Competitions Begin", type: "competition" },
    { time: "04:00 PM", event: "Project Expo & Innovation Showcase", type: "showcase" },
    { time: "06:00 PM", event: "Day 1 Closing & Networking", type: "general" },
  ];

  const scheduleDay2 = [
    { time: "09:00 AM", event: "Day 2 Opening & Breakfast", type: "general" },
    { time: "10:00 AM", event: "Guest Lecture by Industry Expert", type: "keynote" },
    { time: "11:30 AM", event: "Technical Workshop Session 2", type: "workshop" },
    { time: "01:00 PM", event: "Lunch Break", type: "general" },
    { time: "02:00 PM", event: "Final Round Competitions", type: "competition" },
    { time: "04:00 PM", event: "Cultural Events & Entertainment", type: "showcase" },
    { time: "06:00 PM", event: "Prize Distribution & Closing Ceremony", type: "keynote" },
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
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Event <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Two action-packed days of learning, competing, and networking
          </p>
        </div>

        {/* Schedule Days */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <h3 className="text-3xl font-bold gradient-text">Day 1</h3>
              <span className="text-muted-foreground ml-auto">March 15, 2025</span>
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
          </div>

          {/* Day 2 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <h3 className="text-3xl font-bold gradient-text">Day 2</h3>
              <span className="text-muted-foreground ml-auto">March 16, 2025</span>
            </div>
            <div className="space-y-4">
              {scheduleDay2.map((item, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};
