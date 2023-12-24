'use client'
import { useEffect, useState } from "react"
import { Righteous } from 'next/font/google'
const righteous = Righteous({
    weight: "400",
    subsets: ['latin']
})
export default function Hero() {
    const capabilitiesList = [
        'Web Developer',
        'Creative Coder',
        'Mobile App Developer',
        'Full Stack Developer',
        'Frontend Developer',
        'Backend Developer'
    ];
    const accentColors = [
        '#F9ED69'
    ];

    const [capabilitesIndex, setCapabilitiesIndex] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCapabilitiesIndex((prevIndex) => (prevIndex + 1) % capabilitiesList.length)
        }, 2000)

        return () => clearInterval(intervalId);
    }, [capabilitesIndex]);

    return (
        <>
            <div className="mt-20">
                <p className={`${righteous.className} text-orange-600 text-2xl bg-white w-fit px-2`} >Ankit Pal</p>
                <h1 className={`${righteous.className} text-6xl flex`}>
                    Hi, I am a &nbsp;<div>
                        <div>Full Stack Developer</div>
                        <div className="w-full h-2 bg-[#FFDB58]"></div>
                    </div>
                </h1>
            </div>
        </>
    )
}