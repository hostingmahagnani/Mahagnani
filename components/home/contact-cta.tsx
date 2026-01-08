"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact-form"
import { toast } from "sonner"
import { useState } from "react"

export function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          subject: `[Mahagnani Website] ${data.subject}`,
          message: data.message,
          from_name: "Mahagnani Website Contact Form",
          to_email: "mahagnanis@gmail.com",
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        })
        reset() // Clear form
      } else {
        throw new Error(result.message || "Form submission failed")
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or email us directly at mahagnanis@gmail.com",
      })
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 via-primary/5 to-purple-500/5 border-t border-border relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent blur-[50px] rounded-full animate-float" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent blur-[50px] rounded-full animate-float-up-down" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm animate-fade-in-up">Get Started</h2>
              <h3 className="text-3xl md:text-5xl font-bold animate-fade-in-up animation-delay-200 text-foreground">
                Attend a Free Live Demo Class
              </h3>
              <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                Experience our teaching style firsthand. Join a free live demo class, interact with the instructor, and see if our approach is right for you—no commitment required.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="mailto:mahagnanis@gmail.com"
                className="flex items-center space-x-4 group touch-target hover:scale-105 transition-transform"
                aria-label="Email us at mahagnanis@gmail.com"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary shadow-sm group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold group-hover:text-primary transition-colors">Email Us</div>
                  <div className="text-muted-foreground">mahagnanis@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="https://www.google.com/maps/place/Hyderabad,+Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group touch-target hover:scale-105 transition-transform"
                aria-label="View our location in Hyderabad, Telangana on Google Maps"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold group-hover:text-blue-600 transition-colors">Visit Us</div>
                  <div className="text-muted-foreground">Hyderabad, Telangana, India</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-primary/20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold ml-1">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    {...register("name")}
                    disabled={isSubmitting}
                    className="h-12 border-border/50 focus:border-primary transition-colors duration-300" 
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive ml-1">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold ml-1">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    {...register("email")}
                    disabled={isSubmitting}
                    className="h-12 border-border/50 focus:border-primary transition-colors duration-300" 
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive ml-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold ml-1">
                  Subject <span className="text-destructive">*</span>
                </label>
                <Input 
                  id="subject" 
                  placeholder="Question about courses" 
                  {...register("subject")}
                  disabled={isSubmitting}
                  className="h-12 border-border/50 focus:border-primary transition-colors duration-300" 
                />
                {errors.subject && (
                  <p className="text-sm text-destructive ml-1">{errors.subject.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold ml-1">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?" 
                  {...register("message")}
                  disabled={isSubmitting}
                  className="min-h-[150px] resize-none border-border/50 focus:border-primary transition-colors duration-300" 
                />
                {errors.message && (
                  <p className="text-sm text-destructive ml-1">{errors.message.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Request Free Demo 
                    <Send className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
