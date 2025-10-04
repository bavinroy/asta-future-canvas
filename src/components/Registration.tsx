import { Button } from "@/components/ui/button";
import { Check, IndianRupee, Users } from "lucide-react";

export const Registration = () => {
  const features = [
    "Access to all technical workshops",
    "Participate in multiple competitions",
    "Networking opportunities with industry experts",
    "Certificate of participation",
    "Event kit and goodies",
    "Lunch and refreshments for both days"
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Register Now</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Secure your spot at the most exciting tech symposium of the year
          </p>
        </div>

        {/* Registration Card */}
        <div className="glass-card p-10 relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-lg text-muted-foreground">Registration Fee</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <IndianRupee className="w-12 h-12 text-primary" />
                <span className="text-6xl font-bold gradient-text">500</span>
              </div>
              <p className="text-muted-foreground">Per Participant (Early Bird)</p>
              <p className="text-sm text-primary mt-2">Limited seats available!</p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/20 rounded-full p-1 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" className="px-8">
                Register as Individual
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-primary/50 hover:bg-primary/10">
                Team Registration
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>Registration closes on March 10, 2025</p>
              <p className="mt-1">For queries: asta2k25@selvamtech.edu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
