"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
    Landmark,
    Lightbulb,
    BookOpen,
    Share2,
} from "lucide-react";

const tabs = [
    {
        title: "The Real Estate Tax Advantage We Deliver",
        description:
            "As a firm dedicated solely to serving investors, developers, and commercial owners like yourself, we bring unmatched industry-specific expertise to tackle your most complex tax challenges. Our team intimately understands the nuances of your business, from scaling rental portfolios to navigating development projects.",
        icon: <Share2 className="h-10 w-10 text-green-600" />,
    },
    {
        title: "Tax Strategies Engineered to Maximize Your Returns",
        description:
            "Our integrated, multidisciplinary approach delivers the full breadth of tax advisory services you need - from uncovering every deduction to optimizing entity structures and cash flow. We're laser-focused on driving measurable improvements to your bottom line.",
        icon: <BookOpen className="h-10 w-10 text-green-600" />,
    },
    {
        title: "Cutting-Edge Tax Innovation for a Competitive Edge",
        description:
            "Staying one step ahead of the constantly evolving tax landscape is critical in this fast-paced industry. That's why we're pioneering the latest tax planning strategies and technologies, from robotic process automation to predictive data analytics.",
        icon: <Lightbulb className="h-10 w-10 text-green-600" />,
    },
    {
        title: "Trusted Real Estate Tax Alliances, Integrated Advantages",
        description:
            "By partnering with leading industry technology providers and associations, we ensure you have seamless access to best-in-class tax tools and resources that enhance your operations.",
        icon: <Landmark className="h-10 w-10 text-green-600" />,
    },
];

export default function DifferentiatorsTabs() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = tabs[selectedIndex];

    return (
        <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left side: Tabs */}
            <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What sets us apart</h2>
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
                    Our Differentiators
                </p>
                <ul className="space-y-2 bg-white">
                    {tabs.map((tab, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={cn(
                                "cursor-pointer px-4 py-3 border rounded flex justify-between items-center",
                                selectedIndex === index
                                    ? "font-semibold text-black border-r-2 border-green-600 border-t-0 border-b-0 border-l-0"
                                    : "text-gray-700 hover:bg-gray-50"
                            )}
                        >
                            {tab.title}
                            <span className="text-xl">›</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right side: Animated Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-white via-green-50 to-green-100 p-8 rounded-xl shadow-xl min-h-[300px] max-w-fit"

                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                            hidden: {},
                        }}
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            transition={{ duration: 0.3 }}
                            className="mb-4"
                        >
                            {selected.icon}
                        </motion.div>
                        <motion.h3
                            className="text-2xl font-semibold text-gray-900 mb-4"
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {selected.title}
                        </motion.h3>
                        <motion.p
                            className="text-gray-700 text-lg mb-6"
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {selected.description}
                        </motion.p>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Button className="border bg-transparent border-green-600 text-green-600 px-5 py-2 rounded-full text-sm hover:bg-green-100">
                                Learn more →
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
