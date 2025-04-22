import React from 'react'
import DataCapabilitiesSection from '../ourProcess'
import { TextAnimate } from '../magicui/text-animate'
import WorkflowDashboard from '../workflow-dashboard'

const Process = () => {
    return (
        <section className=' flex flex-col w-full items-center justify-center text-center px-4 bg-white'>
            <div className=' w-full space-y-4 flex flex-col items-center'>
                <h2 className='bg-teal-100 decorated-all-corners inline-block px-4 py-1 text-xl font-semibold'>
                    The Tax Strategy Platform
                </h2>
                <TextAnimate className='text-3xl sm:text-4xl font-bold' delay={0.5} animation="slideUp" by="character">
                    Maximizing returns today,
                    securing wealth for tomorrow
                </TextAnimate>
                <p className="text-base sm:text-lg max-w-4xl">
                    Our comprehensive tax services are designed exclusively for real estate professionals, offering strategic planning, compliance assurance, and wealth preservation solutions. From portfolio optimization to development project structuring, we deliver expertise that drives real estate success.

                </p>
            </div>
            <DataCapabilitiesSection />
        </section>
    )
}

export default Process
