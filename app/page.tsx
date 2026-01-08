import { Hero } from "@/components/home/hero"
import { About } from "@/components/home/about"
import { CourseGrid } from "@/components/home/course-grid"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ContactCTA } from "@/components/home/contact-cta"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <CourseGrid limit={4} />
      <WhyChooseUs />
      <ContactCTA />
    </div>
  )
}
