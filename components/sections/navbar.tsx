"use client";

import Link from "next/link";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
    { href: "#brand", label: "브랜드 소개" },
    { href: "#menu", label: "메뉴 구성" },
    { href: "#franchise", label: "창업 문의" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-32 h-10">
                        <img src="/images/logo_title.svg" alt="괴로피자" className="object-contain w-full h-full" />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-text-main font-medium hover:text-point-red transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="#franchise">
                        <Button variant="primary" size="sm" className="bg-point-red hover:bg-[#A31217]">
                            창업 상담
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-main-green p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t p-4 md:hidden shadow-lg flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-text-main font-medium py-2 hover:text-point-red transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="#franchise" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="primary" className="w-full">
                            창업 상담
                        </Button>
                    </Link>
                </div>
            )}
        </header>
    );
}
