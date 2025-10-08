import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";

const MarketData = () => {
  const [cryptoData, setCryptoData] = useState([
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 43250.32,
      change: 2.45,
      volume: "28.5B",
      marketCap: "845.2B",
      icon: "₿"
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: 2280.15,
      change: -1.23,
      volume: "15.2B",
      marketCap: "274.1B",
      icon: "Ξ"
    },
    {
      name: "Binance Coin",
      symbol: "BNB",
      price: 312.45,
      change: 3.67,
      volume: "1.8B",
      marketCap: "48.3B",
      icon: "◈"
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: 98.72,
      change: 5.89,
      volume: "2.1B",
      marketCap: "42.7B",
      icon: "◎"
    },
    {
      name: "Cardano",
      symbol: "ADA",
      price: 0.58,
      change: -0.45,
      volume: "890M",
      marketCap: "20.4B",
      icon: "₳"
    },
    {
      name: "Ripple",
      symbol: "XRP",
      price: 0.62,
      change: 1.87,
      volume: "1.2B",
      marketCap: "33.8B",
      icon: "✕"
    }
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(prevData => 
        prevData.map(crypto => ({
          ...crypto,
          price: crypto.price * (1 + (Math.random() - 0.5) * 0.01),
          change: crypto.change + (Math.random() - 0.5) * 0.5
        }))
      );
      setLastUpdated(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="market" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Live Market Data
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time cryptocurrency prices and market trends
          </p>
          <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
            <Activity className="w-4 h-4 mr-2" />
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptoData.map((crypto, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {crypto.name}
                </CardTitle>
                <div className="text-2xl font-bold text-gray-900">
                  {crypto.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  ${crypto.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className={`flex items-center text-sm font-medium ${crypto.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {crypto.change >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                  {Math.abs(crypto.change).toFixed(2)}%
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-gray-600">
                  <div>
                    <div className="font-medium">Volume (24h)</div>
                    <div className="font-bold text-gray-900">${crypto.volume}</div>
                  </div>
                  <div>
                    <div className="font-medium">Market Cap</div>
                    <div className="font-bold text-gray-900">${crypto.marketCap}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
            View Full Market
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketData;