import { bio } from '../tools';

export default function Bio() {
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center gap-3 text-xl sm:text-3xl'>
        <div className='flex flex-col sm:w-2/5 text-center gap-3'>
          <img src='/Square.jpg' className='rounded-full w-48 h-48 mx-auto border-4 border-myRed' alt='Frederic Moore'/>
          <p className=' text-myRed'>
            {bio.name}
          </p>
          <p className=' text-myBlue'>
            {bio.heading}
          </p>
          <p className=' '>
            {bio.brief}
          </p>
        </div>
        
        <div className=' text-myBlue'>
          Tools I've worked with:
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 text-sm sm:text-lg'>
          {bio.tools.map((tool, index) => (
            <div key={index} className='bg-myRed opacity-100 text-center rounded-lg px-1'>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}