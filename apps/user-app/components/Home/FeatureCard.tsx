import * as React from "react";
import {motion} from "framer-motion";

export default function FeatureCard({
                         icon,
                         title,
                         description
                     }: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(110, 68, 255, 0.3)" }}
            className="relative p-6 md:p-8 bg-[#1a1b2e]/30 rounded-xl border border-[#2a2d4a] backdrop-blur-sm transition-all duration-300 group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6e44ff]/10 to-[#ff9d00]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#6e44ff]/5 to-[#ff9d00]/5 rounded-xl"></div>
            <div className="relative space-y-3 md:space-y-4">
                <div className="inline-block p-2 md:p-3 bg-[#2a2d4a]/50 rounded-lg shadow-inner">
                    {icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#ff9d00] transition-colors duration-300">{title}</h3>
                <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300">{description}</p>
            </div>
        </motion.div>
    )
}