'use client'
import { useEffect, useState } from "react"

export default function Hero() {
    const [capabilites, setCapabilities] = useState('Web Developer')
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCapabilities("Software Developer")
        }, 2000)

        return () => {
            clearInterval(intervalId)
            setCapabilities("Web Developer")
        };
    }, []);
    return (
        <h1 className=" text-4xl mt-20">
            Hi I am a {capabilites}
        </h1>
    )
}