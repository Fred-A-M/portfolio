import { jobs } from '../tools';
import JobBox from './JobBox';


export default function Work() {


  return (
    <>
      <div className='flex gap-32 text-myBlue'>
        {jobs.map((job) => {
          return <JobBox key={job.title} job={job} />;
        })}
      </div>
    </>
  );
}
