import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted/30 via-primary/5 to-purple-500/5 border-t border-border relative overflow-hidden" aria-label="Site footer">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent blur-[50px] rounded-full" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-transparent blur-[50px] rounded-full" aria-hidden="true" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={getAssetPath("/logo-full.png")} 
                alt="Mahagnani - Professional Online Education Platform" 
                className="h-24 md:h-32 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Live online tech classes taught by industry experts. Master Python, AI, Cybersecurity, and Web Development through interactive sessions at just ₹1,500 per course.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Live Courses
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses/python-data-science"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Python for Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/prompt-engineering"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Prompt Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/cybersecurity-analyst"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Cybersecurity Analyst
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/ai-web-dev-bootcamp"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  AI Web Dev Bootcamp
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <a 
                  href="mailto:mahagnanis@gmail.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  mahagnanis@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/place/Hyderabad,+Telangana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Hyderabad, Telangana, India
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-4">
              <a href="#" className="touch-target p-2 bg-gradient-to-br from-secondary to-secondary/50 rounded-full hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30" aria-label="Follow us on Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="touch-target p-2 bg-gradient-to-br from-secondary to-secondary/50 rounded-full hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30" aria-label="Follow us on Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="touch-target p-2 bg-gradient-to-br from-secondary to-secondary/50 rounded-full hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30" aria-label="Connect with us on LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" className="touch-target p-2 bg-gradient-to-br from-secondary to-secondary/50 rounded-full hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30" aria-label="Follow us on Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mahagnani. All rights reserved. Learn tech skills through live interactive classes.
          </p>
        </div>
      </div>
    </footer>
  )
}
