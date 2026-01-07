import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 via-primary/5 to-purple-500/5 border-t border-border relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl rounded-full animate-float-up-down"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm animate-fade-in-up">Get Started</h2>
              <h3 className="text-3xl md:text-5xl font-bold animate-fade-in-up animation-delay-200">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
                  Book a Free Demo
                </span>
              </h3>
              <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                Experience our real-time projects firsthand. Schedule a free demo today to see how we help you build
                your own applications.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary shadow-sm group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold group-hover:text-primary transition-colors">Email Us</div>
                  <div className="text-muted-foreground">hello@mahagnani.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center text-purple-600 shadow-sm group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold group-hover:text-purple-600 transition-colors">Call Us</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold group-hover:text-blue-600 transition-colors">Visit Us</div>
                  <div className="text-muted-foreground">123 Education St, Tech City, TC 12345</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-primary/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold ml-1">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="h-12 border-border/50 focus:border-primary transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold ml-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12 border-border/50 focus:border-primary transition-colors duration-300" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold ml-1">
                  Subject
                </label>
                <Input id="subject" placeholder="Question about courses" className="h-12 border-border/50 focus:border-primary transition-colors duration-300" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold ml-1">
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] resize-none border-border/50 focus:border-primary transition-colors duration-300" />
              </div>
              <Button type="submit" className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
                Send Message <Send className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
