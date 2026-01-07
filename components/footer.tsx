import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted/30 via-primary/5 to-purple-500/5 border-t border-border relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-transparent blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Mahagnani</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering professionals with cutting-edge tech education. Master the skills that matter in today's
              digital world.
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
                  All Courses
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
                <span className="text-muted-foreground text-sm">contact@mahagnani.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">123 Education St, Tech City, TC 12345</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-4">
              <a href="#" className="p-2 bg-gradient-to-br from-secondary to-secondary/50 rounded-full hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                <Facebook size={16} />
              </a>
              <a href="#" className="p-2 bg-gradient-to-br from-secondary to-secondary/50 rounded-full hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 bg-gradient-to-br from-secondary to-secondary/50 rounded-full hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                <Linkedin size={16} />
              </a>
              <a href="#" className="p-2 bg-gradient-to-br from-secondary to-secondary/50 rounded-full hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mahagnani. All rights reserved. Built with excellence for your success.
          </p>
        </div>
      </div>
    </footer>
  )
}
