export default function Contact () {
  return (
    <>
    <div className='w-screen h-screen flex flex-col sm:justify-center items-center p-1'>
      <div className='text-4xl sm:text-8xl mb-[2vh] sm:mb-12 mt-[2vh] sm:mt-0'>
        Get in touch
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-center sm:items-start gap-4">
        <div className='flex sm:w-2/5 flex-col gap-4 text-center sm:text-left'>
          <div className='text-xl sm:text-3xl self-start'>
            Want to work together? Contact me using this form or reach out through one of my channels below:
          </div>
          <div className='flex gap-4 justify-center sm:justify-start'>
            <a href="https://github.com/Fred-A-M" target='_blank'>
              <img src="/git.png" alt="GitHub" className='h-[10vh] sm:h-[15vh] hover:cursor-pointer hover:border-4 border-myBlue rounded-full' />
            </a>
            <a href="https://www.linkedin.com/in/frederic-moore/" target='_blank'>
              <img src="/linked.png" alt="LinkedIn" className='h-[10vh] sm:h-[15vh] hover:cursor-pointer hover:border-4 border-myBlue rounded-xl' />
            </a>
          </div>
        </div>


        <div className='sm:w-2/5 m-3 sm:m-0 bg-myRed rounded-md p-8'>
          <div className='text-lg sm:text-2xl'>
            <form target="_blank" action="https://formsubmit.co/d08a8762980636fb8eeaef99e7326843" method='POST'>
              <div className='flex flex-col gap-4'>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" id="name" autoComplete='off' className='w-full sm:h-10 rounded-md font-fira text-black px-2'/>
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" autoComplete='off' className='w-full sm:h-10 rounded-md font-fira text-black px-2'/>
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea name="message" id="message" autoComplete='off' className='w-full sm:h-32 rounded-md px-2 py-1 font-fira text-black text-lg resize-none'></textarea>
                </div>
                <div className='w-full flex justify-center'>
                  <button type='submit' className='bg-myBlue text-white font-semibold self-center h-10 rounded-md w-1/4'>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
