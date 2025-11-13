"use client";

import React from "react";
import HeroSection from "./HeroSection";
import ContentFotos from "./ContentFotos";

import FeatureSection from "./Feature";
import Feature from "./Feature";
import PricingPage from "@/app/pricing/page";
import FeatureDetail from "./FearureDetails";




export default function Main() {
  return (
    <main className="w-full">
      <HeroSection />
      <ContentFotos />
      <Feature/>
      <FeatureDetail/>
      
      
    </main>
  );
}