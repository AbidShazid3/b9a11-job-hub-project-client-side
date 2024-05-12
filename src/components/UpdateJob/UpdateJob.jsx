import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";


const UpdateJob = () => {
    const job = useLoaderData();
    const { _id, userName, userEmail, jobTitle, jobCategory, jobSalary, jobDescription, JobPostDate, jobDeadline, jobApplicants, photo } = job;

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleUpdateJob = e => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobTitle.value;
        const jobCategory = form.jobCategory.value;
        const jobSalary = form.jobSalary.value;
        const jobDescription = form.jobDescription.value;
        const JobPostDate = startDate;
        const jobDeadline = endDate;
        const jobApplicants = form.jobApplicants.value;
        const photo = form.photo.value;
        const details = { jobTitle, jobCategory, jobSalary, jobDescription, JobPostDate, jobDeadline, jobApplicants, photo }
        // console.log(details);

        fetch(`http://localhost:5000/jobs/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <div className="mt-10">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-blue-500 animate__animated animate__heartBeat">Update A Job</h1>
                    <p className="py-3 text-base font-medium">Welcome to the Update Job page. Here, you can Update a job for others to see.</p>
                </div>
                <div className="bg-stone-200 rounded-lg">
                    <form onSubmit={handleUpdateJob} className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name="jobTitle" defaultValue={jobTitle} placeholder="Enter Job Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <select name="jobCategory" required defaultValue={jobCategory} className="select select-bordered">
                                <option disabled value="">Job Category</option>
                                <option value="On_Site Job">On_Site Job</option>
                                <option value="Remote Job">Remote Job</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Part Time">Part Time</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <input type="text" name="jobSalary" defaultValue={jobSalary} placeholder="Enter Salary Range" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <input type="text" name="jobDescription" defaultValue={jobDescription} placeholder="Job Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Posting Date : {new Date(JobPostDate).toLocaleDateString()}</span>
                            </label>
                            <DatePicker
                                className='rounded-md input input-bordered w-full'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Application Deadline : {new Date(jobDeadline).toLocaleDateString()}</span>
                            </label>
                            <DatePicker
                                className='rounded-md input input-bordered w-full'
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Applicants</span>
                            </label>
                            <input type="number" defaultValue={jobApplicants} name="jobApplicants" placeholder="Enter Job Applicants" className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={userName} placeholder="Enter Your Name" readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={userEmail} placeholder="Enter Your Email" readOnly className="input input-bordered" />
                        </div>
                        <div className="mt-6 col-span-full">
                            <button className="btn btn-active btn-accent text-xl w-full">Updated A Job</button>
                        </div>
                    </form>
                    <div className="text-center pb-4">
                        <Link to="/myjobs" className="text-lg font-bold text-green-500">Back to My Jobs</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateJob;