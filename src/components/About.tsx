import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Shield, Globe, Users } from "lucide-react";

const About = () => {
  const stats = [
    { number: "2M+", label: "Active Users", icon: Users },
    { number: "150+", label: "Countries Supported", icon: Globe },
    { number: "$50B+", label: "Trading Volume", icon: Target },
    { number: "99.9%", label: "Uptime", icon: Shield }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://picsum.photos/150/150?random=1",
      bio: "Former Goldman Sachs executive with 15+ years in fintech"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://picsum.photos/150/150?random=2",
      bio: "Ex-Google engineer, blockchain expert and crypto enthusiast"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Security",
      image: "https://picsum.photos/150/150?random=3",
      bio: "Former NSA cybersecurity specialist with 10+ years experience"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "https://picsum.photos/150/150?random=4",
      bio: "Full-stack developer with expertise in DeFi and smart contracts"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About CryptoHub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of finance by making cryptocurrency trading accessible, secure, and efficient for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Mission</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in 2020, CryptoHub was born from a simple belief: cryptocurrency should be accessible to everyone, not just tech-savvy investors. We set out to create a platform that combines the power of advanced trading tools with the simplicity that everyday users need.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our mission is to democratize access to digital assets by providing a secure, user-friendly platform that empowers individuals to participate in the cryptocurrency economy. We believe that blockchain technology and digital currencies will fundamentally reshape the global financial system, and we're here to help our users navigate this transformation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, CryptoHub serves millions of users worldwide, offering a comprehensive suite of trading tools, educational resources, and institutional-grade security. We're proud to be at the forefront of the financial revolution, helping shape the future of money.
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;