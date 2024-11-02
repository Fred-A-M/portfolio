
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Work from './Components/Work'
import Bio from './Components/Bio'
import Contact from './Components/Contact'
import Music from './Components/Music'


export default function App() {

  function isPhoneElse (a: number, b: number) {
    return window.innerWidth < 768 ? a : b
  }

  return (
    <>
    <Parallax pages={isPhoneElse(7, 7)}> 
      {/* Top Section with name*/}
      <ParallaxLayer offset={isPhoneElse(0.5, 0.4)} speed={1} factor={isPhoneElse(0.2, 0.3)} className='bg-myRed z-50'>
        <div className="flex h-full items-end justify-between">
          <div className="text-[10vw] sm:text-[8vw] ml-[5vw]">fred-a-m</div>
          <div className="mr-[5vw] text-[3vw] sm:text-[2vw] mb-[2vh] sm:mb-[5vh] animate-blink">{`(scroll down)`}</div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer horizontal={true} offset={0} speed={4} factor={7} className="bg-myBlue">
        <div className="text-[40vw] sm:text-[15vw] ml-[20vw] mt-[65vh] sm:mt-[59vh] flex gap-8 items-center">
          <div className="text-orange-400">Freelance developer</div>
          <div className="text-white">: London</div>
        </div>
      </ParallaxLayer>
          
      <ParallaxLayer offset={1} speed={0} factor={1} className='bg-black '>
      </ParallaxLayer>
      <ParallaxLayer offset={1.02} speed={isPhoneElse(0.1, 0.4)} factor={0.9} className='z-50'>
        <Bio/>
      </ParallaxLayer>
      
      {/* WorkSection */}
      <ParallaxLayer offset={2} speed={0} factor={1} sticky={{ start: 2, end: 3.5 }} className='bg-gradient-to-b from-black to-[#0a419f] z-40'>
        <ParallaxLayer horizontal={true} offset={isPhoneElse(0, 0.25)} factor={2} speed={isPhoneElse(-0.02, -0.1)}>
          <div className='text-5xl sm:text-8xl mt-[25vh] sm:mt-[15vh]'>
            Recent Work
          </div>
        </ParallaxLayer>

        <ParallaxLayer horizontal={true} offset={1.5} speed={1} factor={2} className='mt-[35vh] '>
          <Work/>
        </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer offset={4.5} speed={0} factor={isPhoneElse(1.5, 1.5)} className='bg-gradient-to-b from-[#0a419f] to-myBlue' />
      <ParallaxLayer offset={isPhoneElse(4.9, 4.8)} speed={isPhoneElse(0.8, 0.2)} factor={1.5}>
        <Music/>
      </ParallaxLayer>

      <ParallaxLayer offset={isPhoneElse(6, 6)} speed={0} factor={1} className='bg-myBlue'>
        <Contact/>
      </ParallaxLayer>

    </Parallax>
    </>
  )
}

