"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Step data type
type Step = {
    title: string;
    description: string;
};

const steps: Step[] = [
    { title: 'Step 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima incidunt voluptates nemo.' },
    { title: 'Step 2', description: 'Quisque sit amet purus vitae urna fermentum pellentesque. Suspendisse potenti.' },
    { title: 'Step 3', description: 'Donec vehicula, eros nec facilisis tristique, nunc elit pulvinar arcu, a vehicula nulla neque in metus.' },
    { title: 'Step 4', description: 'Nam ultricies leo at enim fermentum, sit amet luctus libero pretium.' },
];

const TimelineScroll: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div ref={containerRef} className="relative w-full m py-12 px-4 md:px-16">
            {/* Full-length grey line */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gray-300 w-1 h-full" />

            {/* Animated progress line */}
            <motion.div
                className="absolute left-1/2 top-0 -translate-x-1/2 bg-emerald-600 w-1"
                style={{ height: lineHeight }}
            />

            <div className="">
                {steps.map((step, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <motion.div
                            key={idx}
                            className={`relative flex items-center w-full ${isEven ? 'md:justify-end' : 'md:justify-start'
                                }`}
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
                        >
                            {/* Timeline marker */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 border-4 border-white rounded-full w-6 h-6" />

                            {/* Step card */}
                            <div
                                className={`bg-white p-6 md:p-8 rounded-lg shadow-lg w-full md:w-2/5 ${isEven ? 'text-left ' : 'text-right '
                                    }`}
                            >
                                <h3 className="text-2xl font-bold mb-2 text-gray-800">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default TimelineScroll;
