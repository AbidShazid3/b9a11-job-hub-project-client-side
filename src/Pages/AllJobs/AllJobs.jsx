import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
            .then(res => res.json())
            .then(data => {
                setAllJobs(data);
                console.log(data);

            })
    }, [])

    return (
        <div className="mt-10 bg-slate-300 p-4 rounded-lg">
            <div>
                <form className="flex mb-5 justify-center">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="search" className="" placeholder="Search" />
                    </label>
                    {/* <button className="btn btn-outline btn-accent">Search</button> */}
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Job Post Date</th>
                            <th>Application Deadline</th>
                            <th>Salary Range</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allJobs.map((job, idx) => <tr key={job._id} className="hover">
                                <th>{idx + 1}</th>
                                <td>{job.jobTitle}</td>
                                <td>{new Date(job.JobPostDate).toLocaleDateString()}</td>
                                <td>{new Date(job.jobDeadline).toLocaleDateString()}</td>
                                <td>{job.jobSalary}</td>
                                <td><Link className="btn btn-sm btn-outline btn-accent">View Details</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;