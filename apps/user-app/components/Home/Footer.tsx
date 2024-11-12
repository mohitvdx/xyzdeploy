import Link from "next/link";
import * as React from "react";

export default function Footer(){
    return (
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
    )
}