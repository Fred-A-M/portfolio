
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Work from './Components/Work'
import Bio from './Components/Bio'
import Contact from './Components/Contact'

export default function App() {

  return (
    <>
    <Parallax pages={6}> 
      {/* Top Section with name*/}
      <ParallaxLayer offset={0} speed={1} factor={0.25} className='z-50 flex justify-between items-end bg-myRed mt-[300px]'>
      <div className='text-8xl ml-20'>
        fred-a-m.dev
      </div>
      <div className='mr-20 text-2xl mb-2 animate-blink'>
        {`(scroll down)`}
      </div>
      </ParallaxLayer>

      <ParallaxLayer horizontal={true} offset={0} speed={4} factor={7} className='bg-myBlue'>
        <div className='text-[200px] ml-[500px] flex gap-8 mt-[425px] items-center'>
          <div className='text-orange-400'>Freelance developer</div>
          <div className='text-white'> : London</div>
        </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={1} speed={0} factor={1} className='bg-black'>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.4} factor={0.5} className='bg-black'>
        <Bio/>
      </ParallaxLayer>
      
      {/* WorkSection */}
      <ParallaxLayer offset={2} speed={0} factor={1} sticky={{ start: 2, end: 3.5 }} className='bg-gradient-to-b from-black to-[#0a419f]'>
        <ParallaxLayer horizontal={true} offset={0.25} speed={-0.1} className='mt-16 -left-40'>
          <div className='text-6xl'>
            Recent Work
          </div>
        </ParallaxLayer>

        <ParallaxLayer horizontal={true} offset={1.5} speed={1} factor={3} className='mt-44 '>
          <Work/>
        </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer offset={4.5} factor={0.5} className='bg-gradient-to-b from-[#0a419f] to-myBlue'/>


      <ParallaxLayer offset={5} speed={0} factor={1} className='bg-myBlue'>
        <Contact/>
      </ParallaxLayer>

    </Parallax>
    </>
  )
}

