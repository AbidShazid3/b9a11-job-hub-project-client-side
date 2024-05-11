import { useLoaderData } from "react-router-dom";

const JobCatDetails = () => {
    const jobDetails = useLoaderData();
    const { userName, jobTitle, jobCategory, jobSalary, jobDescription, JobPostDate, jobDeadline, jobApplicants, photo } = jobDetails;
    console.log(jobDetails);

    return (
        <div className="mt-10">
            <h2 className="text-4xl font-bold text-center text-gray-600 p-4">{jobCategory} Categories</h2>
            <div className="hero min-h-screen bg-base-200 shadow-xl rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="flex-1">
                        <img src={photo} className="size-5/6 rounded-lg shadow-2xl mx-auto" />
                    </div>
                    <div className="flex-1 space-y-2">
                        <h1 className="text-5xl font-bold">{jobTitle}</h1>
                        <p className="text-base">{jobDescription}</p>
                        <div className='flex items-center gap-2 text-lg font-bold'>
                            <h2>Job Category:</h2>
                            <p>{jobCategory}</p>
                        </div>
                        <div className='flex items-center gap-2 text-lg font-bold'>
                            <h2>Salary Range:</h2>
                            <p>{jobSalary}</p>
                        </div>
                        <div className='flex items-center gap-2 text-lg font-bold'>
                            <h2>Post Date:</h2>
                            <p>{new Date(JobPostDate).toLocaleDateString()}</p>
                        </div>
                        <div className='flex items-center gap-2 text-lg font-bold'>
                            <h2>Job Deadline:</h2>
                            <p>{new Date(jobDeadline).toLocaleDateString()}</p>
                        </div>
                        <div className='flex items-center gap-2 text-lg font-bold'>
                            <h2>Job Applicants:</h2>
                            <p>{jobApplicants}</p>
                        </div>
                        <div className='flex items-center gap-2 text-lg font-bold'>
                            <h2>Posted By:</h2>
                            <p>{userName}</p>
                        </div>
                        <button className="btn btn-outline btn-accent w-1/5">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCatDetails;