import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/20967.jpg"

const AllJobsSingleCard = () => {
    const singleJob = useLoaderData();
    const { jobTitle, jobCategory, jobDescription, jobSalary, jobApplicants, jobDeadline } = singleJob;
    console.log(singleJob);

    return (
        <div className="mt-10">
            <div className="card bg-gradient-to-r from-[#151515] to-[#15151500] shadow-xl bg-no-repeat w-full h-64" style={{ backgroundImage: `url(${banner})` }}>
                <div className="card-body text-white md:w-2/3 lg:w-2/3">
                    <h2 className="text-3xl font-bold">Explore Exciting Opportunities</h2>
                    <p>Discover Your Dream Career! Browse through our diverse range of job listings and find the perfect fit for your skills and aspirations.</p>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-500 text-center mt-10 underline underline-offset-8">{jobCategory}</h2>
            <div className="hero mt-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="p-4">
                        <h1 className="text-5xl font-bold">{jobTitle}</h1>
                        <p className="max-w-2xl mx-auto py-3">{jobDescription}</p>
                        <p className="text-lg font-bold mb-2">Job Salary Range : {jobSalary}</p>
                        <p>Deadline to submit : {new Date(jobDeadline).toLocaleDateString()}</p>
                        <p>Job Applied : {jobApplicants}</p>
                        <button className="btn btn-outline btn-accent mt-4">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllJobsSingleCard;