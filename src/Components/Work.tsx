import { jobs } from '../tools';
import JobBox from './JobBox';


export default function Work() {


  return (
    <>
      <div className='flex gap-[10vw] text-myBlue'>
        {jobs.map((job) => {
          return <JobBox key={job.title} job={job} />;
        })}
      </div>
    </>
  );
}
