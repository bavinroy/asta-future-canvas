import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">ASTA-2k25</h3>
            <p className="text-muted-foreground mb-4">
              The premier annual tech symposium organized by the Department of AIDS, CSE & IT at Selvam College of Technology.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-card hover:bg-primary/20 p-2 rounded-lg transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Selvam College of Technology<br />
                  Ponnusamy Nagar, Namakkal<br />
                  Tamil Nadu 637003, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">asta2k25@selvamtech.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About ASTA</a>
              </li>
              <li>
                <a href="#events" className="hover:text-primary transition-colors">Events</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
              </li>
              <li>
                <a href="#registration" className="hover:text-primary transition-colors">Registration</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ASTA-2k25. All rights reserved. Developed by Department of AIDS, CSE & IT
          </p>
        </div>
      </div>
    </footer>
  );
};
