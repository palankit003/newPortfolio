
import Header from './components/Header'
import Hero from './components/Hero'
import Tech from './components/Tech'
import { FrontEndTechnologies, BackEndTechnologies, DatabaseTechnologies, LanguagesTechnologies } from './utils/data'
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className='lg:px-20 pt-20 px-10 bg-red-400'>
        <h1 className='text-4xl my-4'>Frontend</h1>
        <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-1'>
          {
            FrontEndTechnologies.map((item) => {
              return (
                <Tech name={item.name} description={item.description} key={item.name} />
              )
            })
          }
        </div>
        <h1 className='text-4xl my-4'>Backend</h1>
        <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-1'>
          {
            BackEndTechnologies.map((item) => {
              return (
                <Tech name={item.name} description={item.description} key={item.name} />
              )
            })
          }
        </div>
        <h1 className='text-4xl my-4'>Database</h1>
        <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-1'>
          {
            DatabaseTechnologies.map((item) => {
              return (
                <Tech name={item.name} description={item.description} key={item.name} />
              )
            })
          }
        </div>
        <h1 className='text-4xl my-4'>Languages</h1>
        <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-1'>
          {
            LanguagesTechnologies.map((item) => {
              return (
                <Tech name={item.name} description={item.description} key={item.name} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}
