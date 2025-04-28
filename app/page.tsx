"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { Spotlight }  from "@/components/ui/spotlight-new";
import Link from "next/link";
import SliderOne from "@/components/ui/slider";

import WebsiteDesign from "./website-design";
import ShopifyStores from "./shopify-stores";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { useRef } from "react";
import Ecommerce from "./ecommerce";


export default function Home() {

  const WebsiteDesignRef =useRef<HTMLDivElement>(null);
  const EcommerceRef =useRef<HTMLDivElement>(null);
  const shopifyStoresRef =useRef<HTMLDivElement>(null);
  const brandsRef =useRef<HTMLDivElement>(null);
  const servicesRef =useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    WebsiteDesignRef.current?.scrollIntoView({ behavior: "smooth", });
  }

  const scrollToEcommerce = () => {
    EcommerceRef.current?.scrollIntoView({ behavior: "smooth", });
  }

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth", });
  }

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth", });
  }

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth", });
  }

  return (
    <div className="w-full md:items-center md: justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar 
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToEcommerce={scrollToEcommerce}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />
      <Spotlight className="hidden md:flex md:left-80"
      fill="white"
      />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center 
         bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50">
                Create, grow, and <br /> scale your business
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom tailored solutions for your business. We are a team of
           creatives who are excited to help you grow your business
        </p>

        <Link
        href={"/book"}
        className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2
        mx-auto my-6 text-white"
        >
          Book a call</Link>

          <div className="w-full pt-20">
            <SliderOne />
            <div ref={WebsiteDesignRef}>
            <WebsiteDesign />
            </div>
            <div ref={EcommerceRef}>
            <Ecommerce />
            </div>
            <div ref={shopifyStoresRef}>
            <ShopifyStores />
            </div>
            <div ref={brandsRef}>
            <Brands />
            </div>
            <div ref={servicesRef}>
              <Services />
            </div>
            <FAQS />
          </div>

      </div>
    </div>
  );
}
