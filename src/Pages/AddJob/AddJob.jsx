import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import 'animate.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";


const AddJob = () => {
    const { user } = useAuth();
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name?.value;
        const userEmail = form.email?.value;
        const jobTitle = form.jobTitle.value;
        const jobCategory = form.jobCategory.value;
        const jobSalary = form.jobSalary.value;
        const jobDescription = form.jobDescription.value;
        const JobPostDate = startDate;
        const jobDeadline = endDate;
        const jobApplicant = form.jobApplicants.value;
        const jobApplicants =  parseInt(jobApplicant);
        const photo = form.photo.value;
        const details = { userName, userEmail, jobTitle, jobCategory, jobSalary, jobDescription, JobPostDate, jobDeadline, jobApplicants, photo }

        fetch("https://job-hub-server-five.vercel.app/jobs", {
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
                        text: 'Added A New Job Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
                form.reset();
            })


    }

    return (
        <div className="mt-10">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-blue-500 animate__animated animate__heartBeat">Add A New Job</h1>
                <p className="py-3 px-20 text-base font-medium">Welcome to the Add A Job page. <br /> Here, you can post new job opportunities for others to see.</p>
            </div>
            <div className="">
                <form onSubmit={handleAddJob} className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="jobTitle" placeholder="Enter Job Title" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <select name="jobCategory" required defaultValue="" className="select select-bordered">
                            <option disabled value="">Job Category</option>
                            <option value="On_Site Job">On_Site Job</option>
                            <option value="Remote Job">Remote Job</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Part Time">Part Time</option>
                        </select>
                        {/* <input type="text" name="jobCategory" placeholder="Job Category" className="input input-bordered" /> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name="jobSalary" placeholder="Enter Salary Range" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <input type="text" name="jobDescription" placeholder="Job Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Posting Date</span>
                        </label>
                        <DatePicker
                            className='rounded-md input input-bordered w-full'
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
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
                        <input type="number" defaultValue={0} name="jobApplicants" placeholder="Enter Job Applicants" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user.displayName} placeholder="Enter Your Name" readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user.email} placeholder="Enter Your Email" readOnly className="input input-bordered" />
                    </div>
                    <div className="mt-6 col-span-full">
                        <button className="btn btn-active btn-accent text-xl w-full">Add A Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;