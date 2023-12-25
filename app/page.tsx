import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import Tech from './components/Tech'
import User from '../public/AnkitPalWithoutBackground.png'

const Technologies: TechProps[] = [
  {
    name: "React", description: "I have a good understanding of ReactJS"
  },
  {
    name: "NextJS", description: "Currently Learning"
  },
  {
    name: "Angular", description: "Currently Learning"
  },
  {
    name: "NestJS", description: "Currently Learning"
  },
  {
    name: "Python", description: "Currently Learning"
  },
  {
    name: "ExpressJS", description: "Currently Learning"
  },
  {
    name: "Fastify", description: "Currently Learning"
  },
  {
    name: "NodeJS", description: "Currently Learning"
  },
  {
    name: "DenoJS", description: "Currently Learning"
  },
  {
    name: "Golang", description: "Currently Learning"
  },
  {
    name: "Rust", description: "Currently Learning"
  },
]
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className=' absolute right-20 bottom-5 border-orange-200 border-[0.5rem] pt-2'>
        <Image src={User} alt='ankit pal' width={300} />
      </div>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 mt-[80vh] gap-1'>
        {
          Technologies.map((item) => {
            return (
              <Tech name={item.name} description={item.description} key={item.name} />
            )
          })
        }
      </div>
    </>
  )
}
