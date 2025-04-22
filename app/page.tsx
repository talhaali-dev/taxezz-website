import BrandLogos from "@/components/sections/brand-logos";
import CTASection from "@/components/sections/CTA";
import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import GenAIAccountingSection from "@/components/sections/section4";
import ModernAccountingWorkflows from "@/components/sections/section5";
import BentoGridSection from "@/components/sections/section6";
import RealEstateTaxHero from "@/components/sections/section7";
import TestimonialCarousel from "@/components/sections/testimonias";
import TimelineScroll from "@/components/sections/timeline-scroll";

export default function Home() {
    return (
        <main>
            <Hero />
            <BrandLogos />
            <Process />
            <TimelineScroll />
            <GenAIAccountingSection />
            <ModernAccountingWorkflows />

            <BentoGridSection />
            {/* <RealEstateTaxHero /> */}
            <BrandLogos />
            <TestimonialCarousel />
            <CTASection />

        </main>
    );
}
