
"use client"
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Define testimonial type
type Testimonial = {
    id: number;
    logo: string;
    content: string;
    author: string;
    position: string;
    company: string;
    image: string;
};

// Mock data for testimonials
const testimonials: Testimonial[] = [
    {
        id: 1,
        logo: "/hmd_tagline-logo.svg",
        content: "We chose to migrate from our previous software to Taxezz in order to improve efficiency. With Taxezz, we've reduced our time spent on reporting by over 25% and saved over 30% on costs between the two softwares.",
        author: "Morgan Hoffmann",
        position: "Group Financial Accountant",
        company: "Bradken",
        image: "/person.jpg"
    },
    {
        id: 2,
        logo: "/hmd_tagline-logo.svg",
        content: "When demoing Taxezz, we were impressed with the functionality and the look and feel of the product. It became very apparent that without Taxezz, we would be spending more time on manual calculations and reporting.",
        author: "Ville Räsänen",
        position: "Senior Finance Manager",
        company: "HMD Global",
        image: "/person.jpg"

    },
    {
        id: 3,
        logo: "/hmd_tagline-logo.svg",
        content: "Implementing Taxezz has transformed our accounting workflow. The automated features have given our team back valuable time to focus on strategic initiatives rather than manual data entry.",
        author: "Sarah Johnson",
        position: "Chief Financial Officer",
        company: "TechGrowth",
        image: "/person.jpg"

    },
    {
        id: 4,
        logo: "/hmd_tagline-logo.svg",
        content: "The transition to Taxezz was seamless. Their support team guided us through every step, and now our financial reporting is not only faster but more accurate than ever before.",
        author: "Michael Chen",
        position: "Director of Finance",
        company: "GlobalEdge",
        image: "/person.jpg"

    },
    {
        id: 5,
        logo: "/hmd_tagline-logo.svg",
        content: "Taxezz has been a game-changer for my real estate investment business. Their proactive tax planning and strategic entity structuring have saved me tens of thousands in taxes over the past year. I can't imagine going back to my old accounting firm.",
        author: "Sarah Patel",
        position: "Residential Portfolio Investor",
        company: "",
        image: "/person.jpg"

    },
    {
        id: 6,
        logo: "/hmd_tagline-logo.svg",
        content: "As my real estate development firm has grown, the tax complexities have become a major headache. Working with Taxezz has been a total relief - their experts navigate all the compliance requirements and ensure we're maximizing every deduction. It's given me and my team peace of mind.",
        author: "John Wu",
        position: "Real Estate Developer",
        company: "",
        image: "/person.jpg"

    },
    {
        id: 7,
        logo: "/hmd_tagline-logo.svg",
        content: "I was wary of switching accounting providers for my commercial properties, but Taxezz has exceeded all my expectations. Their sophisticated tax strategies have protected my long-term equity, and the platform makes managing multi-state compliance a breeze. Highly recommend them to any commercial real estate owner.",
        author: "Maria Gonzalez",
        position: "Commercial Property Owner",
        company: "",
        image: "/person.jpg"

    },
    {
        id: 8,
        logo: "/hmd_tagline-logo.svg",
        content: "Taxezz's platform is a game-changer for our real estate syndicate. The AI-powered insights and tailored tax planning recommendations have been invaluable. We're able to make smarter investment decisions and keep the IRS at a safe distance - which is critical for our investors.",
        author: "David Lee",
        position: "Real Estate Syndicate Manager",
        company: "",
        image: "/person.jpg"
    },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="border border-white/20 rounded-lg h-full flex flex-col md:flex-row overflow-hidden">
        <div className="p-8 md:p-10 md:w-1/2 flex flex-col">
            <div className="h-12 mb-8">
                <Image
                    src={testimonial.logo}
                    alt={`${testimonial.company ?? 'Logo'} logo`}
                    width={120}
                    height={48}
                    className="object-contain"
                    priority
                />
            </div>
            <p className="text-white text-lg md:text-xl mb-8 flex-grow">
                {testimonial.content}
            </p>
            <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-medium text-yellow-300 mb-1">
                    {testimonial.author}
                </h3>
                <p className="text-white/80">
                    {testimonial.position}
                    {testimonial.company && `, ${testimonial.company}`}
                </p>
            </div>
        </div>

        <div className="md:w-1/2 w-full relative h-56 md:h-auto">
            <Image
                src={testimonial.image}
                alt={testimonial.author}
                fill
                className="object-cover filter brightness-90 contrast-125"
                priority
            />
        </div>
    </div>
);

const TestimonialCarousel = () => {
    const isMobile = useIsMobile();

    return (
        <section className="w-full bg-emerald-900 py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-12 md:mb-16">
                    What people are saying.
                </h2>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <div className="flex justify-end mb-10">
                        <div className="flex space-x-3">
                            <CarouselPrevious
                                className="relative inset-0 translate-y-0 bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50 transition-all h-12 w-12 rounded-md"
                                variant="outline"
                                size="icon"
                            />
                            <CarouselNext
                                className="relative inset-0 translate-y-0 bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50 transition-all h-12 w-12 rounded-md"
                                variant="outline"
                                size="icon"
                            />
                        </div>
                    </div>

                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial) => (
                            <CarouselItem
                                key={testimonial.id}
                                className={`pl-4 ${isMobile ? 'basis-full' : 'basis-3/4'} md:basis-3/4`}
                            >
                                <TestimonialCard testimonial={testimonial} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
