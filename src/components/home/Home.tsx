import React from "react";
import Hero from "./Hero/hero";
import CategorySlider from "./midle/CategorySlider";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import BuildOptions from "./BuildOptions/BuildOptions";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div>
       <Hero/>
       <CategorySlider/>
       <FeaturedProducts/>
       <BuildOptions/>
    </div>
  );
};

export default Home;
