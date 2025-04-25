
import { 
  Scan,
  ChartBar,
  ShieldCheck,
  CalendarClock,
  Wrench,
  FileText,
  Shield,
  Bell,
  Smile,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Scan,
    title: "One-Click Network Scanning",
    description: "Scan IP addresses and domains for vulnerabilities instantly with our streamlined interface."
  },
  {
    icon: ChartBar,
    title: "Real-Time Reporting Dashboard",
    description: "Get simplified, visual reports with clear severity ratings and actionable insights."
  },
  {
    icon: ShieldCheck,
    title: "10+ Vulnerability Checks",
    description: "Comprehensive security scanning covering XSS, SQL Injection, LFI, SSRF, Command Injection, and more."
  },
  {
    icon: CalendarClock,
    title: "Scheduled Auto-Scans",
    description: "Set up automated vulnerability scans on daily, weekly, or monthly schedules."
  },
  {
    icon: Wrench,
    title: "Actionable Fix Recommendations",
    description: "Receive detailed, step-by-step solutions for each discovered vulnerability."
  },
  {
    icon: FileText,
    title: "Executive and Technical Reports",
    description: "Choose between high-level summaries for executives or in-depth technical analysis."
  },
  {
    icon: Shield,
    title: "Secure User Management",
    description: "Role-based access control with comprehensive audit logging and encryption."
  },
  {
    icon: Bell,
    title: "Instant Critical Alerts",
    description: "Immediate notifications when high-risk vulnerabilities are detected."
  },
  {
    icon: Smile,
    title: "SME-Friendly Design",
    description: "Intuitive interface designed for businesses of all sizes - no cybersecurity background needed."
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "Regular updates to our scanning engine and vulnerability database to stay ahead of threats."
  }
];

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-100 via-primary-200 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Security <span className="text-primary">Features</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Comprehensive vulnerability assessment tools designed for modern businesses
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Secure Your Systems?
          </h2>
          <Link to="/auth">
            <Button size="lg" className="animate-fade-up">
              Start Your First Scan
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
