'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ArrowRight, MessageSquare, Shield, Users, ChevronDown, Menu } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-[#1a1b2e]/20 via-[#2a2d4a]/20 to-[#1a1b2e]/20 animate-gradient-xy"></div>

      {/* Decorative blobs - adjusted for mobile */}
      <div className="fixed top-20 left-5 md:left-10 w-36 md:w-72 h-36 md:h-72 bg-[#6e44ff] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="fixed top-40 right-5 md:right-10 w-36 md:w-72 h-36 md:h-72 bg-[#ff9d00] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="fixed -bottom-8 left-10 md:left-20 w-36 md:w-72 h-36 md:h-72 bg-[#6e44ff] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#2a2d4a] backdrop-blur-md bg-[#0a0b0d]/80">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#6e44ff] via-[#ff9d00] to-[#6e44ff] text-transparent bg-clip-text">
                CampusVoices
              </span>
            </motion.div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-white" />
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="#features" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-[#6e44ff]")}>
                        Features
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#about" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-[#6e44ff]")}>
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/login" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-[#6e44ff]")}>
                        Login
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#2a2d4a]">
              <div className="flex flex-col space-y-4">
                <Link href="#features" className="text-gray-300 hover:text-[#6e44ff] px-4 py-2">
                  Features
                </Link>
                <Link href="#about" className="text-gray-300 hover:text-[#6e44ff] px-4 py-2">
                  About
                </Link>
                <Link href="/login" className="text-gray-300 hover:text-[#6e44ff] px-4 py-2">
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-6 md:space-y-8"
            style={{ opacity, scale }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-white">Elevate Your</span>
              <span className="block bg-gradient-to-r from-[#6e44ff] via-[#ff9d00] to-[#6e44ff] text-transparent bg-clip-text">
                Campus Discourse
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-4">
              Join an exclusive community of thought leaders. Share ideas, spark conversations,
              and shape the future of your campus—anonymously and securely.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#6e44ff] to-[#ff9d00] text-white font-semibold hover:from-[#5a36d1] hover:to-[#e68e00] px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-lg shadow-[#6e44ff]/25 rounded-full">
                  Join the Elite <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#2a2d4a] hover:bg-[#2a2d4a] px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-lg shadow-[#ff9d00]/10 rounded-full backdrop-blur-sm bg-white/5">
                  Discover More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-[#ff9d00]" />
        </motion.div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative py-16 md:py-24 lg:py-32 border-t border-[#2a2d4a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12"
          >
            <FeatureCard
              icon={<Shield className="h-10 w-10 md:h-12 md:w-12 text-[#ff9d00]" />}
              title="Exclusive Anonymity"
              description="Express yourself freely within our trusted network. Your identity remains confidential, your ideas take center stage."
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 md:h-12 md:w-12 text-[#6e44ff]" />}
              title="Intellectual Discourse"
              description="Engage in high-level conversations that challenge perspectives and drive innovation on your campus."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 md:h-12 md:w-12 text-[#ff9d00]" />}
              title="Elite Network"
              description="Connect with the brightest minds on campus. Build a network that will propel your academic and professional journey."
            />
          </motion.div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="relative py-16 md:py-24 lg:py-32 border-t border-[#2a2d4a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[#6e44ff] via-[#ff9d00] to-[#6e44ff] text-transparent bg-clip-text">
              What Our Elite Members Say
            </h2>
            <blockquote className="text-lg md:text-xl text-gray-300 italic mb-4 relative">
              <span className="absolute top-0 left-0 text-4xl md:text-6xl text-[#ff9d00] opacity-25">"</span>
              <p className="relative z-10 px-8">CampusVoices has transformed the way we engage in academic discourse. It's a game-changer for intellectual growth on campus.</p>
              <span className="absolute bottom-0 right-0 text-4xl md:text-6xl text-[#ff9d00] opacity-25">"</span>
            </blockquote>
            <p className="text-[#ff9d00] font-semibold">- Anonymous Ivy League Student</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-[#2a2d4a] py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2024 CampusVoices. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-[#ff9d00] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-[#ff9d00] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-[#ff9d00] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
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