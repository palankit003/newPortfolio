import Image from 'next/image'
import User from '../../public/AnkitPalWithoutBackground.png'
import { Righteous } from 'next/font/google'
const righteous = Righteous({
    weight: "400",
    subsets: ['latin']
})
export default function Hero() {

    return (

        <div className="flex flex-col lg:flex-row justify-between mt-40 mx-20">
            <div>
                <p className={`${righteous.className} text-orange-600 text-2xl bg-white w-fit px-2`} >ANKIT PAL</p>
                <h1 className={`${righteous.className} text-6xl`}>
                    Hi, I am a &nbsp;<div className=" w-fit">
                        <div>Full Stack Developer</div>
                        <div className="w-full h-2 bg-[#FFDB58]"></div>
                    </div>
                </h1>
                <div className='flex gap-4 mt-10 text-xl'>
                    <button className='rounded-full border border-yellow-300 p-3 hover:bg-yellow-300 hover:text-black'>Cotact Me</button>
                    <button className='rounded-full bg-yellow-300 p-3'> Resume</button>
                </div>
            </div>
            <div className=' relative rounded-full lg:w-[400px] lg:h-[400px] border-yellow-300 border-[0.5rem] border-b-[#00000000] pt-2'>
                <Image src={User} alt='ankit pal' className='absolute right-[15%] top-[7%] w-[75%]' />
            </div>
        </div>

    )
}