import { Shield, Zap, BarChart, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Shield,
    title: "Real-Time Scanning",
    description: "Continuous monitoring and instant vulnerability detection",
  },
  {
    icon: BarChart,
    title: "User-Friendly Dashboards",
    description: "Clear visualizations and actionable insights at a glance",
  },
  {
    icon: Zap,
    title: "Plug-and-Play Setup",
    description: "Get started in minutes with our simple integration process",
  },
  {
    icon: Lock,
    title: "Actionable Reports",
    description: "Detailed analysis and step-by-step remediation guidance",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
              Protect Your Network with Real-Time{" "}
              <span className="text-primary">Vulnerability Assessments</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up">
              Dynamic scanning, user-friendly dashboards, and actionable insights
              tailored for SMEs.
            </p>
            <div className="flex justify-center gap-4 animate-fade-up">
              <Link to="/dashboard">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            Ready to Secure Your Network?
          </h2>
          <Link to="/dashboard">
            <Button size="lg" className="animate-fade-up">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;