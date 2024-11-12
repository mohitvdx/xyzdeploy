import * as React from "react";
import NavigationHeader from "@/components/Home/NavigationHeader";
import Footer from "@/components/Home/Footer";
import Testimonial from "./Testimonial";
import Hero from "@/components/Home/Hero";

export default function Home() {

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white overflow-x-hidden">
            {/* Background effects */}
            <div className="fixed inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
            <div
                className="fixed inset-0 bg-gradient-to-tr from-[#1a1b2e]/20 via-[#2a2d4a]/20 to-[#1a1b2e]/20 animate-gradient-xy"></div>

            {/* Decorative blobs - adjusted for mobile */}
            <div
                className="fixed top-20 left-5 md:left-10 w-36 md:w-72 h-36 md:h-72 bg-[#6e44ff] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
            <div
                className="fixed top-40 right-5 md:right-10 w-36 md:w-72 h-36 md:h-72 bg-[#ff9d00] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
            <div
                className="fixed -bottom-8 left-10 md:left-20 w-36 md:w-72 h-36 md:h-72 bg-[#6e44ff] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

            {/* Navigation */}
            <NavigationHeader/>

            {/* Hero Section */}
            <Hero/>

            {/* Testimonial Section */}
            <Testimonial/>

            {/* Footer */}
            <Footer/>

        </div>
    )
}