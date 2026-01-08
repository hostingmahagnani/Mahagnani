"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/utils"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-border bg-white/90 dark:bg-card/90 backdrop-blur-md shadow-sm" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Mahagnani home">
            <img 
              src={getAssetPath("/logo-full.png")} 
              alt="Mahagnani - Professional Online Education Platform" 
              className="h-14 md:h-20 lg:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-foreground/80 hover:text-primary transition-colors font-medium relative group ${
                isActive("/") && pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                isActive("/") && pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <Link
              href="/courses"
              className={`text-foreground/80 hover:text-primary transition-colors font-medium relative group ${
                isActive("/courses") ? "text-primary" : ""
              }`}
            >
              Courses
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                isActive("/courses") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <Link
              href="/#about"
              className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/#contact"
              className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 hover:scale-105">
              <Link href="/courses">View Live Courses</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors touch-target"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              href="/"
              className={`block py-2 text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/") && pathname === "/" ? "text-primary font-semibold" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className={`block py-2 text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/courses") ? "text-primary font-semibold" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/#about"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Link href="/courses">View Live Courses</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
