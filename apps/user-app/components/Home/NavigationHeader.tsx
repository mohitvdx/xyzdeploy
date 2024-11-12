import {motion} from "framer-motion";
import {Menu} from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {cn} from "@/lib/utils";
import * as React from "react";

export default function NavigationHeader() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    return (
        <nav className="sticky top-0 z-50 border-b border-[#2a2d4a] backdrop-blur-md bg-[#0a0b0d]/80">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        className="flex items-center"
                    >
              <span
                  className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#6e44ff] via-[#ff9d00] to-[#6e44ff] text-transparent bg-clip-text">
                CampusVoices
              </span>
                    </motion.div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-6 w-6 text-white"/>
                    </button>

                    {/* Desktop navigation */}
                    <div className="hidden md:block">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href="#features" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-[#6e44ff]")}>
                                            Features
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="#about" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-[#6e44ff]")}>
                                            About
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/signin" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-[#6e44ff]")}>
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
                            <Link href="/signin" className="text-gray-300 hover:text-[#6e44ff] px-4 py-2">
                                Login
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}