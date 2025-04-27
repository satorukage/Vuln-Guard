
import { Shield, Lock, BarChart, Clock, RefreshCw } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Designed for SMEs",
    description: "Simple, fast, and effective.",
  },
  {
    icon: Clock,
    title: "Real-time Protection",
    description: "Real-time scanning and threat detection.",
  },
  {
    icon: BarChart,
    title: "Clear Insights",
    description: "Clear, interactive dashboards for easy understanding.",
  },
  {
    icon: Lock,
    title: "Privacy-first",
    description: "Your data stays secure with us.",
  },
  {
    icon: RefreshCw,
    title: "Always Improving",
    description: "Always improving to stay ahead of threats.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-100 via-primary-200 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-primary">VulnGuard</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your trusted cybersecurity partner, built specifically for SMEs. We help you spot vulnerabilities early, protect your digital assets, and strengthen your security posture—with powerful tools that are easy to use and affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Why VulnGuard Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why <span className="text-primary">VulnGuard</span>?
          </h2>
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

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <Card className="p-8 h-full">
                <p className="text-lg leading-relaxed text-gray-600">
                  Empowering SMEs with smart, accessible cybersecurity tools to protect their growth and success.
                </p>
              </Card>
            </div>

            {/* Vision */}
            <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <Card className="p-8 h-full">
                <p className="text-lg leading-relaxed text-gray-600">
                  A world where every small and medium-sized business thrives confidently and securely in the digital era.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
