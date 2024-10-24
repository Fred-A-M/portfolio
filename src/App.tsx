
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Work from './Components/Work'

export default function App() {

  return (
    <>
    <Parallax pages={5}> 
      {/* Top Section with name*/}
      <ParallaxLayer offset={0} speed={1} factor={0.25} className='z-50 flex justify-start items-center bg-myRed mt-[300px]'>
      <div className='text-8xl ml-20 '>
        fred-a-m.dev
      </div>
      </ParallaxLayer>

      <ParallaxLayer horizontal={true} offset={0} speed={4} factor={7} className='bg-myBlue'>
        <div className='text-[200px] ml-[500px] flex gap-8 mt-[425px] items-center'>
          <div className='text-orange-400'>Freelance developer</div>
          <div className='text-white'> : London</div>
        </div>
      </ParallaxLayer>
      
      
      {/* WorkSection */}
      <ParallaxLayer offset={1} speed={0} factor={1} sticky={{ start: 1, end: 2 }} className='bg-black'>
        <ParallaxLayer horizontal={true} offset={0.25} speed={-0.1} className='mt-16 -left-40'>
          <div className='text-6xl'>
            Recent Work
          </div>
        </ParallaxLayer>

        <ParallaxLayer horizontal={true} offset={1.5} speed={3} factor={3} className='mt-44 '>
          <Work/>
        </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer offset={3} className='bg-gradient-to-b from-black to-myBlue'/>


      <ParallaxLayer offset={4} speed={0} factor={1} className='bg-myBlue'>
      </ParallaxLayer>

    </Parallax>
    </>
  )
}

