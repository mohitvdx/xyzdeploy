import {motion, useScroll, useTransform} from "framer-motion";
import {Button} from "@/components/ui/button";
import {ArrowRight, ChevronDown, MessageSquare, Shield, Users} from "lucide-react";
import FeatureCard from "@/components/Home/FeatureCard";
import * as React from "react";

export default function Hero() {
    const {scrollYProgress} = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    return (
        <>
            <div className="relative min-h-screen flex items-center">
                <div className="container mx-auto px-4 py-16 md:py-32">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="text-center space-y-6 md:space-y-8"
                        style={{opacity, scale}}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                            <span className="block text-white">Elevate Your</span>
                            <span
                                className="block bg-gradient-to-r from-[#6e44ff] via-[#ff9d00] to-[#6e44ff] text-transparent bg-clip-text">
                Campus Discourse
              </span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-4">
                            Join an exclusive community of thought leaders. Share ideas, spark conversations,
                            and shape the future of your campus—anonymously and securely.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4">
                            <motion.div
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="w-full sm:w-auto"
                            >
                                <Button size="lg"
                                        className="w-full sm:w-auto bg-gradient-to-r from-[#6e44ff] to-[#ff9d00] text-white font-semibold hover:from-[#5a36d1] hover:to-[#e68e00] px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-lg shadow-[#6e44ff]/25 rounded-full">
                                    Join the Elite <ArrowRight className="ml-2 h-5 w-5"/>
                                </Button>
                            </motion.div>
                            <motion.div
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="w-full sm:w-auto"
                            >
                                <Button size="lg" variant="outline"
                                        className="w-full sm:w-auto border-[#2a2d4a] hover:bg-[#2a2d4a] px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-lg shadow-[#ff9d00]/10 rounded-full backdrop-blur-sm bg-white/5">
                                    Discover More
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    animate={{y: [0, -10, 0]}}
                    transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-[#ff9d00]"/>
                </motion.div>
            </div>

            {/*//features section*/}
            <div id="features" className="relative py-16 md:py-24 lg:py-32 border-t border-[#2a2d4a]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12"
                    >
                        <FeatureCard
                            icon={<Shield className="h-10 w-10 md:h-12 md:w-12 text-[#ff9d00]"/>}
                            title="Exclusive Anonymity"
                            description="Express yourself freely within our trusted network. Your identity remains confidential, your ideas take center stage."
                        />
                        <FeatureCard
                            icon={<MessageSquare className="h-10 w-10 md:h-12 md:w-12 text-[#6e44ff]"/>}
                            title="Intellectual Discourse"
                            description="Engage in high-level conversations that challenge perspectives and drive innovation on your campus."
                        />
                        <FeatureCard
                            icon={<Users className="h-10 w-10 md:h-12 md:w-12 text-[#ff9d00]"/>}
                            title="Elite Network"
                            description="Connect with the brightest minds on campus. Build a network that will propel your academic and professional journey."
                        />
                    </motion.div>
                </div>
            </div>
        </>
    )
}