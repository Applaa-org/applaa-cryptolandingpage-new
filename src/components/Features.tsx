import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Wallet, Globe, Smartphone, Shield, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Trading Tools",
      description: "Professional charting tools, technical indicators, and real-time market analysis to make informed decisions.",
      color: "text-blue-500"
    },
    {
      icon: Wallet,
      title: "Secure Wallet",
      description: "Multi-layer security with cold storage, 2FA, and biometric authentication to keep your assets safe.",
      color: "text-green-500"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Trade from anywhere in the world with support for 150+ countries and 40+ fiat currencies.",
      color: "text-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Full-featured mobile app for iOS and Android with push notifications and instant trading.",
      color: "text-orange-500"
    },
    {
      icon: Shield,
      title: "Regulated & Compliant",
      description: "Fully licensed and regulated platform with KYC/AML compliance and insurance coverage.",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support in multiple languages via chat, email, and phone.",
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to trade cryptocurrencies safely and efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.color} bg-opacity-10`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;