"use client";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
    return ( 
    <div className="max-w-5xl mx-auto py-20">
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
              Streamline your business with our services
      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
      From website design to social media management, We offer a wide range of services
        </p>

        <CardHoverEffectDemo />
        </div>
    </div> );
}
 
export default Services;