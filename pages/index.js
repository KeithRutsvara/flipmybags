import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, ShoppingCart, Sun, Moon, Timer } from "lucide-react";

const products = [
  {
    name: "Bag the Dip Tee",
    price: "$25",
    image: "/tee1.png",
    desc: "Clean black tee with bold green candle print.",
    tag: "Top Seller",
    stock: 7,
  },
  {
    name: "Bullish Hoodie",
    price: "$45",
    image: "/hoodie1.png",
    desc: "Oversized comfort with a bullish attitude.",
    tag: "New",
    stock: 5,
  },
  {
    name: "WAGMI Cap",
    price: "$20",
    image: "/cap1.png",
    desc: "Snapback cap embroidered with WAGMI.",
    tag: "Trending",
    stock: 9,
  },
  {
    name: "Money Is Calling Tee",
    price: "$27",
    image: "/money-is-calling.jpg",
    desc: "Funny entrepreneur hustle tee for the daily bag chasers.",
    tag: "Limited",
    stock: 4,
  }
];

export default function FlipMyBags() {
  const [theme, setTheme] = useState("bullish");
  const isBullish = theme === "bullish";
  const [countdown, setCountdown] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const scrollToProducts = () => {
    const merchSection = document.getElementById("merch");
    if (merchSection) merchSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1>FlipMyBags Shop Page</h1>
      <section id="merch">
        {products.map((item, index) => (
          <Card key={index}>
            <CardContent>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <p>{item.price}</p>
              <Button>Buy</Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}