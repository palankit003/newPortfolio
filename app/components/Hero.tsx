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
        '#008080', // Teal
        '#FF6F61', // Coral
        '#4169E1', // Royal Blue
        '#DAA520', // Goldenrod
        '#DA70D6', // Orchid
        '#32CD32', // Lime Green
    ];


    const [capabilitesIndex, setCapabilitiesIndex] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCapabilitiesIndex((prevIndex) => (prevIndex + 1) % capabilitiesList.length)
        }, 2000)

        return () => clearInterval(intervalId);
    }, [capabilitesIndex]);


    return (
        <h1 className={`${righteous.className} text-6xl mt-20`}>
            Hi, I am a <span className={` text-[${accentColors[capabilitesIndex]}]`}>{capabilitiesList[capabilitesIndex]}</span>
        </h1>
    )
}