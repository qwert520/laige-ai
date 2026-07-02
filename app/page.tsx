import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CasesSection } from "@/components/sections/cases-section";
import { AISolutionsSection } from "@/components/sections/ai-solutions-section";
import { VideoSection } from "@/components/sections/video-section";
import { SocialSection } from "@/components/sections/social-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CasesSection />
      <AISolutionsSection />
      <VideoSection />
      <SocialSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
