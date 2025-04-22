"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Building2, Globe, Activity, RefreshCcw, UserCheck } from "lucide-react";
import { TextAnimate } from "../magicui/text-animate";
import { motion } from 'framer-motion';

const features = [
    {
        icon: Briefcase,
        title: "Proactive tax planning from day one",
    },
    {
        icon: Building2,
        title: "Strategic entity structuring for optimal tax efficiency",
    },
    {
        icon: Globe,
        title: "Seamless multi-state compliance management",
    },
    {
        icon: Activity,
        title: "Real-time tax position monitoring",
    },
    {
        icon: RefreshCcw,
        title: "Quarterly strategy reviews and adjustments",
    },
    {
        icon: UserCheck,
        title: "Direct access to senior tax professionals",
    },
];

export default function ModernAccountingWorkflows() {
    return (
        <section className="px-4 md:px-12 py-12 bg-muted">
            <div className="max-w-7xl mx-auto text-center space-y-6 flex flex-col items-center">
                <motion.h2
                    className="bg-teal-100 decorated-all-corners inline-block px-4 py-1 text-xl font-semibold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Modern Accounting Workflows
                </motion.h2>
                <TextAnimate
                    className="text-4xl md:text-5xl font-semibold text-gray-900"
                    delay={0.5}
                    animation="slideUp"
                    by="character"
                >
                    It's the expertise that
                </TextAnimate>
                <TextAnimate
                    className="text-4xl md:text-5xl font-semibold text-gray-900"
                    delay={0.7}
                    animation="slideUp"
                    by="character"
                >
                    makes your investments thrive
                </TextAnimate>
                <motion.p
                    className="text-lg text-gray-700 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    Our tax professionals deliver
                </motion.p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <Card className="group flex items-center space-x-4 p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50">
                                <div className="p-3 bg-background rounded-lg transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-blue-400">
                                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <CardContent className="p-0">
                                    <h3 className="text-base font-medium text-gray-900 group-hover:text-gray-100 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
