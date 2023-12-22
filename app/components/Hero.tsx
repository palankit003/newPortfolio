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
        '#FFD700', // Gold/Yellow
        '#FFA500', // Orange
        '#FF6F61', // Coral/Pink
        '#C0C0C0', // Silver/Gray
        '#40E0D0', // Turquoise
        '#98FB98'  // Mint Green
    ];

    // Example of accessing the colors in the array
    console.log(accentColors[0]); // Outputs: #FFD700 (Gold/Yellow)
    console.log(accentColors[2]); // Outputs: #FF6F61 (Coral/Pink)


    const [capabilitesIndex, setCapabilitiesIndex] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCapabilitiesIndex((prevIndex) => (prevIndex + 1) % capabilitiesList.length)
        }, 2000)

        return () => clearInterval(intervalId);
    }, [capabilitesIndex]);

    return (
        <h1 className={`${righteous.className} text-6xl mt-20`}>
            Hi, I am a <span style={{ color: `${accentColors[capabilitesIndex]}` }}>{capabilitiesList[capabilitesIndex]}</span>
        </h1>
    )
}