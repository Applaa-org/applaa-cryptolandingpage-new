import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-8">
            <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Live Market Cap: $2.1T</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Trade Crypto with
            <br />
            Confidence
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join millions of traders worldwide. Buy, sell, and manage your cryptocurrency portfolio with advanced tools and real-time market data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg">
              Start Trading Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 px-8 py-6 text-lg hover:bg-gray-50">
              View Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8 text-green-500" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Bank-Grade Security</div>
                <div className="text-sm text-gray-600">256-bit encryption</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-8 h-8 text-yellow-500" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Lightning Fast</div>
                <div className="text-sm text-gray-600">Sub-second execution</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Real-time Data</div>
                <div className="text-sm text-gray-600">Live market updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;