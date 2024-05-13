import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/20967.jpg"
import useAuth from "../../hooks/useAuth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const AllJobsSingleCard = () => {
    const singleJob = useLoaderData();
    const { _id, jobTitle, userEmail, jobCategory, jobDescription, jobSalary, jobApplicants, jobDeadline } = singleJob;

    const { user } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const resume = e.target.resumeLink.value;
        const currentDate = new Date();
        const deadline = new Date(jobDeadline);

        if (user.email === userEmail) {
            toast.error("You Added This Job. Can't Apply");
            return;
        }

        if (currentDate > deadline) {
            toast.error("Job deadline has passed. You can't apply.");
            return;
        }

        const details = { jobTitle, jobCategory, jobDescription, jobSalary, jobDeadline, resume, jobId: _id, applicantName: user.displayName, email: user.email, buyerEmail: userEmail }
        
        document.getElementById('my_modal_1').close();

        fetch("http://localhost:5000/applies", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Applied A New Job Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    e.target.reset();
                }
            })
            .catch(error => {
                e.target.reset();
                toast.error('Already Applied');
            })
    }

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
                                    <form onSubmit={handleSubmit} method="dialog">
                                        <div className="form-control">
                                            <input type="text" name="resumeLink" placeholder="Enter Your Resume Link" className="input input-bordered" />
                                        </div>
                                        <div className="mt-5">
                                            <button className="btn btn-outline btn-accent text-base w-full">Submit</button>
                                        </div>
                                    </form>
                                    <button onClick={() => document.getElementById('my_modal_1').close()} className="btn btn-outline btn-error text-base w-full mt-2">Cancel</button>
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