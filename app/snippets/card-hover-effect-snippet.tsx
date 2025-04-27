import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiCodeFill, PiHeadphonesFill, PiHeadsetFill, PiLockFill, PiMonitor, PiPackageFill, PiStorefront } from "react-icons/pi";

// import {
//     FaGlobe,
//     FaShoppingCart,
//     FaUserLock,
//     FaMobileAlt,
//     FaHeadset,
//     FaBoxes
// } from "react-icons";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8  text-blue-600" /></div>,
    title: "Webistes Design",
    description:
      "Crafting modern, responsive websites that blend creativity with functionality to deliver an exceptional user experience.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8  text-blue-600" /></div>,
    title: "E-Commerce Store",
    description:
      "Building powerful online stores with seamless shopping experiences, secure payments, and scalable solutions.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiLockFill className="w-8 h-8  text-blue-600" /></div>,
    title: "Authentication",
    description:
      "Implementing secure and reliable login, signup, and identity verification systems to protect your users and data.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8  text-blue-600" /></div>,
    title: "Mobile App Development",
    description:
      "Developing intuitive and high-performance mobile and web applications tailored to your business needs.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiPackageFill className="w-8 h-8  text-blue-600" /></div>,
    title: "Inventory Management App",
    description:
      "Creating smart inventory systems that help you track, manage, and optimize your stock efficiently in real-time.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8  text-blue-600" /></div>,
    title: "Support",
    description:
      "Providing ongoing technical support to keep your website or application running smoothly, securely, and up-to-date.",
  },
];
