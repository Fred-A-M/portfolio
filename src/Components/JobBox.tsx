interface JobBoxProps {
  job : {
    title: string;
    image: string;
    desc: string;
    role: string;
    skills: string[];
  }
}

export default function JobBox({ job }: JobBoxProps) {
  return (
    <>
      <div className='relative group'>
      <div className='bg-jobBox hover:cursor-pointer flex-shrink-0 w-[70vw] sm:w-[35vw] rounded-md text-xl sm:text-3xl flex flex-col px-2 pb-2 sm:p-4'>
        <div className='mb-[0.5vh]'>
          {job.title}
        </div>
        <div>
          <img src={job.image} className='w-full h-full rounded-xl' alt={job.title} />
        </div>
      </div>

      {/* Hidden detail box */}
      <div className='absolute top-0 bg-gray-800 text-white font-fira p-4 rounded-lg shadow-lg w-full h-full opacity-0 hover:opacity-85  transition-all duration-500'>
        <p className='mb-2'>{job.desc}</p>
        <p className='font-bold'>My Role:</p>
        <p>{job.role}</p><br/>
        <div className='grid grid-cols-2 gap-2'>
          {job.skills.map((skill, index) => (
            <div key={index} className='bg-myRed opacity-100 text-center rounded-lg'>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </>
  );
}