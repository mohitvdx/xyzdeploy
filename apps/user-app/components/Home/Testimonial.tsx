import {motion} from "framer-motion";
import * as React from "react";

export default function Testimonial() {
    return (
        <div className="relative py-16 md:py-24 lg:py-32 border-t border-[#2a2d4a]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="max-w-3xl mx-auto text-center px-4"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[#6e44ff] via-[#ff9d00] to-[#6e44ff] text-transparent bg-clip-text">
                        What Our Elite Members Say
                    </h2>
                    <blockquote className="text-lg md:text-xl text-gray-300 italic mb-4 relative">
                        <span className="absolute top-0 left-0 text-4xl md:text-6xl text-[#ff9d00] opacity-25">"</span>
                        <p className="relative z-10 px-8">CampusVoices has transformed the way we engage in academic
                            discourse. It's a game-changer for intellectual growth on campus.</p>
                        <span
                            className="absolute bottom-0 right-0 text-4xl md:text-6xl text-[#ff9d00] opacity-25">"</span>
                    </blockquote>
                    <p className="text-[#ff9d00] font-semibold">- Anonymous Ivy League Student</p>
                </motion.div>
            </div>
        </div>
    )
}