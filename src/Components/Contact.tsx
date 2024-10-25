export default function Contact () {
  return (
    <>
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='text-8xl mb-12'>
        Get in touch
      </div>
      <div className="w-full flex justify-center items-start gap-4">
        <div className='flex w-2/5 flex-col gap-4'>
          <div className='text-3xl self-start'>
            Want to work together? Contact me using this form or reach out through one my channels below:
          </div>
          <div className='flex gap-4'>
            <a href="https://github.com/Fred-A-M" target='_blank'>
              <img src="src/assets/git.png" alt="GitHub" className='h-24 hover:cursor-pointer hover:border-4 border-myBlue rounded-full' />
            </a>
            <a href="https://www.linkedin.com/in/frederic-moore/" target='_blank'>
              <img src="src/assets/linked.png" alt="LinkedIn" className='h-24 hover:cursor-pointer hover:border-4 border-myBlue rounded-xl' />
            </a>
          </div>
        </div>


        <div className='w-2/5 bg-myRed rounded-md p-8'>
          <div className='text-2xl'>
            <form target="_blank" action="https://formsubmit.co/d08a8762980636fb8eeaef99e7326843" method='POST'>
              <div className='flex flex-col gap-4'>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" id="name" autoComplete='off' className='w-full h-10 rounded-md font-fira text-black px-2'/>
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" autoComplete='off' className='w-full h-10 rounded-md font-fira text-black px-2'/>
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea name="message" id="message" autoComplete='off' className='w-full h-32 rounded-md px-2 py-1 font-fira text-black text-lg resize-none'></textarea>
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