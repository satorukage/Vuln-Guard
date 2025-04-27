
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Reach out through any of these channels.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Direct Contact Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-xl font-semibold">Contact Us Directly</h2>
              <div className="space-y-3">
                <a 
                  href="tel:+255745712891" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  +255 745 712 891
                </a>
                <a 
                  href="mailto:contact@vulnguard.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  contact@vulnguard.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-xl font-semibold">Follow Us</h2>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://facebook.com/vulnguard" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  Facebook
                </a>
                <a 
                  href="https://twitter.com/vulnguard" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  Twitter
                </a>
                <a 
                  href="https://instagram.com/vulnguard" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
                <a 
                  href="https://linkedin.com/company/vulnguard" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office Location Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground">
              123 Cyber Street, Digital District<br />
              Dar es Salaam, Tanzania
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
