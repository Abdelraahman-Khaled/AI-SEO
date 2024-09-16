import React from "react";
import Product from "../assets/product-image.png";
import { MousePointerClick, ChartSpline, Sparkles } from "lucide-react";
const Features = () => {
  const features = [
    {
      icon: <ChartSpline />,
      title: "User-friendly dashboard",
      isNew: false,
      backgroundPositionX: 0,
      backgroundPositionY: 0,
      backgroundSizeX: 150,
    },
    {
      icon: <MousePointerClick />,
      title: "One-click optimization",
      isNew: false,
      backgroundPositionX: 98,
      backgroundPositionY: 100,
      backgroundSizeX: 135,
    },
    {
      icon: <Sparkles />,
      title: "Smart keyword generator",
      isNew: true,
      backgroundPositionX: 100,
      backgroundPositionY: 27,
      backgroundSizeX: 177,
    },
  ];
  return (
    <section className="py-20 md:py-24" id="feature">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elvate your SEO efforts.
        </h2>
        <p className="text-white/70 text-lg tracking-irght text-center mt-5 md:text-xl max-w-2xl mx-auto">
          From small startups to large enterprises,our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="border relative border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1"
            >
              <div className="absolute inset-0 border border-[#a369ff] -m-px rounded-xl [mask-image:radial-gradient(80px_80px_at_0%_0%,black,transparent)]"></div>
              <div className="absolute inset-0 border border-[#a369ff] -m-px rounded-xl [mask-image:radial-gradient(80px_80px_at_100%_100%,black,transparent)]"></div>
              <div className="border border-white/15 h-12 w-12 rounded-lg inline-flex items-center justify-center">
                <span className="h-5 w-5">{item.icon}</span>
              </div>
              <div className="font-medium">{item.title}</div>
              {item.isNew && (
                <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                  new
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{ backgroundImage: `url(${Product})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
