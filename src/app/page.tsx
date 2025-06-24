import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Service from '@/components/services';
import Footer from '@/components/Footer';
import Review from '@/components/review';
import Subscribe from '@/components/subscribe';


export default function Home() {
  return (
    <div className="w-full text-xs">
      <div className="bg-blue-900 text-white relative flex justify-between items-center px-4 min-h-[40px] py-1 text-base">
        {/* Left - hide below 1081px */}
        <div className="hidden min-[1081px]:flex items-center gap-2">
          <span className="inline-block">👤</span> Virtual Appointment
        </div>

        {/* Center - always visible and absolutely centered */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <span className="font-medium">Unlock Your FREE Gifts! </span>
          <span className="underline">Claim At Checkout!</span>
        </div>

        {/* Right - hide below 1081px */}
        <div className="hidden min-[1081px]:flex items-center gap-2">
          <span className="inline-block">📞</span> (+91) 90239-30923
        </div>
      </div>

      <Navbar />
   
      <Service/>
      <Review/>
      <Subscribe/>
      <Footer/>

      {/* Hero Section will go here */}
    </div>
  );
}
