import { musicTools } from '../tools';


export default function Music () {
  return (
    <>
    <div className='p-28 w-full h-full flex flex-col items-center'>
      <div className='w-full max-w-[80vw]'>
        <div className='text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl mb-[2vh] sm:mb-[5vh] text-center md:text-right'>
          Musical Interfaces
        </div>
      </div>
      <div className='flex flex-col justify-center items-center md:justify-start max-w-[80vw]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 text-sm sm:text-lg items-center'>
          <div className='text-md md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl max-h-[20vh] max-w-[55vw]  md:text-left text-center'>
            <span className='font-bold'>Music For Household Objects</span> was a series of gestural performance tools I created in 2016 - using custom software and repurposed everyday household items.
          </div>
              {musicTools.map((tool, index) => (
                <div key={index} className=' bg-jobBox hover:bg-jobBoxHover w-[55vw] md:w-[25vw] transition duration-300 hover:cursor-pointer shadow-2xl flex-shrink-0 rounded-md text-xl sm:text-3xl flex flex-col p-4 sm:p-4 z-50 justify-center items-center'>
                  <a href={tool.link} target='_blank'><img src={tool.gif} className='w-full h-full rounded-xl' alt='Music Controller Gif' /></a>
                </div>
              ))}
        </div>
      </div>
    </div>
    </>
  );
};
