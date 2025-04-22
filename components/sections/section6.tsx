import { Card, CardContent } from "@/components/ui/card";
import { TextAnimate } from "../magicui/text-animate";

const bentoItems = [
    {
        bg: "bg-green-100",
        title: "Keep Every Possible Investor Deduction",
        description:
            "We forensically comb through your books to uncover every possible tax deduction - from granular property depreciation schedules to advanced Section 1031 exchange strategies. <br /><br /> That means you get to pocket more of the cash flow from your hard-earned investment properties.",
    },
    {
        bg: "bg-orange-100",
        title: "Wave Goodbye to Tax Season Headaches",
        description:
            "Filing season is a breeze when you have our team of real estate CPAs handling all the complex reporting and filings. No more frantic last-minute scrambles or worrying about IRS audits - just send over your documents and enjoy the off-season.",
    },
];

const bentoItems2 = [
    {
        bg: "bg-purple-100",
        title: "Stay One Step Ahead of Ever-Changing Tax Laws",
        description:
            "With tax regulations in constant flux, it takes a dedicated real estate tax expert to keep you compliant and maximize your savings. Our advisors provide year-round strategic guidance, ensuring you capitalize on the latest deductions, credits, and wealth-building opportunities (think Opportunity Zones, loss carrybacks, and more).",
    },
    {
        bg: "bg-teal-100",
        title: "The Customized Wealth-Building Roadmap",
        description:
            "We build a comprehensive financial plan tailored to your unique goals, whether that's scaling your rental portfolio, perfecting your ground-up development model, or protecting the equity in your commercial real estate assets. <br /><br /> Know exactly where your money is going and how to optimize every dollar for maximum returns.",
    },
];

// Pushpin SVG for sticky note effect
const PinIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <circle cx="12" cy="6" r="3" fill="#f56565" />
        <rect x="11" y="8" width="2" height="8" fill="#a0aec0" />
    </svg>
);

export default function BentoGridSection() {
    return (
        <section className="px-4 md:px-12 py-12 bg-white">
            <div className="max-w-7xl mx-auto text-center space-y-6">
                <h2 className="bg-teal-100 decorated-all-corners inline-block px-4 py-1 text-xl font-semibold">
                    Strategic Planning
                </h2>
                <TextAnimate className="text-4xl md:text-5xl font-semibold text-gray-900" delay={0.5} animation="slideUp" by="character">
                    Why Real Estate Investors Choose Us
                </TextAnimate>
                <TextAnimate className="text-4xl md:text-5xl font-semibold text-gray-900" delay={0.7} animation="slideUp" by="character">
                    And What They Walk Away With
                </TextAnimate>
            </div>

            {/* Keep original grid layout, but apply sticky note styles to each card */}
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 mt-8">
                {bentoItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={`relative transform ${idx % 2 === 0 ? "-rotate-2" : "rotate-2"} hover:rotate-0 transition-transform duration-300`}>
                        <PinIcon />
                        <Card className={`${item.bg} rounded-xl shadow-lg p-8 flex flex-col justify-between`}>
                            <CardContent className="p-0">
                                <h3 className="font-semibold text-gray-900 text-3xl mb-2">
                                    {item.title}
                                </h3>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                    className="text-gray-700 text-lg leading-relaxed"
                                />
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 mt-8">
                {bentoItems2.map((item, idx) => (
                    <div
                        key={idx}
                        className={`relative transform ${idx % 2 === 0 ? "rotate-2" : "-rotate-2"} hover:rotate-0 transition-transform duration-300`}>
                        <PinIcon />
                        <Card className={`${item.bg} rounded-xl shadow-lg p-8 flex flex-col justify-between`}>
                            <CardContent className="p-0">
                                <h3 className="font-semibold text-gray-900 text-3xl mb-2">
                                    {item.title}
                                </h3>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                    className="text-gray-700 text-lg leading-relaxed"
                                />
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}
