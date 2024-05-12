import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const MyJobs = () => {
    const { user } = useAuth();
    const [myJobs, setMyJobs] = useState([]);
    const axiosSecure = useAxiosSecure();

    const url = `/myJob?email=${user?.email}`;

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setMyJobs(res.data);
            })
    }, [axiosSecure, url])

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Has been deleted successfully.",
                                icon: "success"
                            });
                            const remaining = myJobs.filter(newJob => newJob._id !== id);
                            setMyJobs(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="mt-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-500 mb-3">My Added Jobs Collection</h2>
                <p>View and manage the jobs you have added. Stay organized and keep track of your job postings in one place</p>
            </div>
            <div className="overflow-x-auto mt-5 bg-stone-300 p-4 rounded-xl">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job title</th>
                            <th>Post Date</th>
                            <th>Job Deadline</th>
                            <th>Job Salary</th>
                            <th>Delete Job</th>
                            <th>Update Job</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myJobs.map((job, idx) => <tr key={job._id} className="hover">
                                <th>{idx + 1}</th>
                                <td>
                                    <div>
                                        <div>
                                            <div className="font-bold">{job.jobTitle}</div>
                                            <div className="text-sm opacity-50">{job.jobCategory}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{new Date(job.JobPostDate).toLocaleDateString()}</td>
                                <td>{new Date(job.jobDeadline).toLocaleDateString()}</td>
                                <td>{job.jobSalary}</td>
                                <th>
                                    <button onClick={() => handleDelete(job._id)} className="btn btn-xs btn-outline btn-error">Delete</button>
                                </th>
                                <th>
                                    <Link to={`/updateJob/${job._id}`}><button className="btn btn-xs btn-outline btn-accent">Update</button></Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;