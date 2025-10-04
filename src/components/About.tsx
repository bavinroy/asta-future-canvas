import { Code2, Sparkles, Trophy, Zap } from "lucide-react";

export const About = () => {
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
      description: "Exciting coding challenges and hackathons with amazing prizes"
    },
    {
      icon: Zap,
      title: "Networking",
      description: "Connect with peers, mentors, and industry professionals"
    }
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">ASTA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ASTA (Association of Students in Technology and Arts) is the premier annual tech symposium 
            celebrating innovation, creativity, and technological excellence
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-primary/20 to-orange-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="glass-card p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">20+</div>
              <div className="text-muted-foreground">Events</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted-foreground">Participants</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Colleges</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">₹5L+</div>
              <div className="text-muted-foreground">Prize Pool</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
