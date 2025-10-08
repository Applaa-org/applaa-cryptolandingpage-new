import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MarketData from "@/components/MarketData";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MadeWithApplaa } from "@/components/made-with-applaa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <Hero />
      <Features />
      <MarketData />
      <About />
      <Contact />
      <Footer />
      <MadeWithApplaa />
    </div>
  );
};

export default Index;