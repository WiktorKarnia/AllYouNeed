import React from "react";

import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhopne 14 Pro"
        subtitle="Experience the power of the latest iPhopne with our most Pro camera ever"
        link="/product/659d89ecbe5858850343b1b9"
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add a Studio Display and colour-matched Magic accessories to your cart after you configure your Mac Mini"
        link="/product/659d89ecbe5858850343b1c1"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
