// "use client";

// import { InlineWidget } from "react-calendly";

// import Navbar from "@/components/navbar";

// const Book = () => {
//   return (
//     <>
//       <div className="flex flex-col   w-full  h-screen bg-black/[0.96]  bg-grid-white/[0.02]   ">
//         <Navbar
//           scrollToWebsiteDesign={() => {}}
//           scrollToEcommerce={() => {}}
//           scrollToShopifyStores={() => {}}
//           scrollToBrands={() => {}}
//           scrollToServices={() => {}}
//         />
//         <div className="text-4xl pb-5 md:text-6xl text-center 
//         bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//           Book a meeting
//         </div>

//         <InlineWidget url="https://calendly.com/antwiisaac/new-meeting" />
//       </div>
//     </>
//   );
// };

// export default Book;


"use client";

import { InlineWidget } from "react-calendly";
import Navbar from "@/components/navbar";

const Book = () => {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-black/[0.96] bg-grid-white/[0.02]">
        <Navbar
          scrollToWebsiteDesign={() => {}}
          scrollToEcommerce={() => {}}
          scrollToShopifyStores={() => {}}
          scrollToBrands={() => {}}
          scrollToServices={() => {}}
        />

        <div className="text-4xl pb-5 md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Book a meeting
        </div>

        <div className="flex justify-center px-4">
          <div className="w-full max-w-4xl">
            <InlineWidget
              url="https://calendly.com/antwiisaac/new-meeting"
              styles={{ height: '700px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
