import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/20967.jpg"
import useAuth from "../../hooks/useAuth";

const AllJobsSingleCard = () => {
    const singleJob = useLoaderData();
    const { jobTitle, jobCategory, jobDescription, jobSalary, jobApplicants, jobDeadline } = singleJob;
    const { user } = useAuth();

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

                        <button className="btn btn-outline btn-accent mt-4" onClick={() => document.getElementById('my_modal_1').showModal()}>Apply Now</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-xl">Want to Apply This Job</h3>
                                <p className="py-4">Add your resume link & <span className="text-green-500">Submit</span></p>
                                <h2>Name : {user.displayName}</h2>
                                <h3>Email : {user.email}</h3>
                                <div className="mt-2">
                                    <form method="dialog">
                                        <div className="form-control">
                                            <input type="text" name="resumeLink" placeholder="Enter Your Resume Link" className="input input-bordered" />
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <button className="btn btn-outline btn-accent text-base">Submit</button>
                                            <button className="btn btn-outline btn-error text-base">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllJobsSingleCard;