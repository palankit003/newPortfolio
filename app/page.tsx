
import Header from './components/Header'
import Hero from './components/Hero'
import Tech from './components/Tech'

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

      <div className='grid lg:grid-cols-5 md:grid-cols-3 mx-20 mt-20 gap-1'>
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
