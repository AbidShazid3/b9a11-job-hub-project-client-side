import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobCategorieCard = ({ job }) => {
    const { user } = useAuth();
    const { _id, userName, jobTitle, jobSalary, JobPostDate, jobDeadline, jobApplicants } = job;
    const navigate = useNavigate();

    const handleLinkClick = () => {
        if (!user) {
            toast.error("Login Now");
            navigate('/login');

        }
    }

    return (
        <div className='hover:scale-[1.05] transition-all'>
            <div className="card bg-base-100 shadow-xl border border-gray-200">
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{jobTitle}</h2>
                    <h2 className='text-lg font-bold'>Salary Range : {jobSalary}</h2>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-base font-bold'>Post Date:</h2>
                        <p>{new Date(JobPostDate).toLocaleDateString()}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-base font-bold'>Job Deadline:</h2>
                        <p>{new Date(jobDeadline).toLocaleDateString()}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-lg font-bold'>Job Applicants:</h2>
                        <p>{jobApplicants}</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <h2 className='text-xl font-bold'>Post By:</h2>
                        <p className='text-base font-bold'>{userName}</p>
                    </div>
                    <div className="card-actions">
                        {user ?
                            <Link to={`/categoriesJob/${_id}`} className="btn btn-outline btn-accent w-full font-extrabold">View Details</Link> : <button onClick={handleLinkClick} className="btn btn-outline btn-accent w-full font-extrabold">
                            View Details
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

JobCategorieCard.propTypes = {
    job: PropTypes.object,
}

export default JobCategorieCard;