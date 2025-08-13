import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-gradient-card border-primary/20 hover:shadow-glow-primary transition-smooth text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <a 
              href="mailto:pritamthopate27@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              pritamthopate27@gmail.com
            </a>
          </Card>

          <Card className="p-6 bg-gradient-card border-primary/20 hover:shadow-glow-primary transition-smooth text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
            <a 
              href="tel:+919930806340" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 9930806340
            </a>
          </Card>

          <Card className="p-6 bg-gradient-card border-primary/20 hover:shadow-glow-primary transition-smooth text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">Navi Mumbai, India</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;