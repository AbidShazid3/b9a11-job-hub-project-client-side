import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AppliedJobs = () => {
    const { user } = useAuth();
    const [myAppliedJob, setMyAppliedJob] = useState([]);
    const axiosSecure = useAxiosSecure();
    // const [filter, setFilter] = useState('')

    const url = `/applied?email=${user?.email}`

    useEffect(() => {
        axiosSecure(url)
            .then(res => {
                setMyAppliedJob(res.data);
            })
    }, [axiosSecure, url])

    return (
        <div className="mt-10">
            <div className="text-center ">
                <h2 className="text-3xl font-bold text-slate-500 mb-3">Applied Jobs Dashboard</h2>
                <p>Track the progress of your job applications and manage your applied jobs effortlessly.</p>
            </div>
            <div className="flex justify-end mt-2">
            <select
              name='category'
              id='category'
              className='border p-4 rounded-lg bg-base-content text-white'
            >
              <option value=''>Filter By Category</option>
              <option value='On-Site Job'>On-Site Job</option>
              <option value='Remote Job'>Graphics Design</option>
              <option value='Hybrid'>Hybrid Job</option>
              <option value='Part-Time'>Part-Time Job</option>
            </select>
          </div>
            <div className="overflow-x-auto mt-5  p-4 rounded-xl">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job title</th>
                            <th>Job Categories</th>
                            <th>Job Salary</th>
                            <th>Submitted Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAppliedJob.map((job, idx) => <tr key={job._id} className="hover">
                                <th>{idx + 1}</th>
                                <td>
                                    <div>
                                        <div>
                                            <div className="font-bold">{job.jobTitle}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{job.jobCategory}</td>
                                <td>{job.jobSalary}</td>
                                <td>{job.resume}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;