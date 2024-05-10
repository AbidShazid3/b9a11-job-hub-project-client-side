import PropTypes from 'prop-types';

const JobCategorieCard = ({ job }) => {
    const { userName, jobTitle, jobSalary, JobPostDate, jobDeadline, jobApplicants } = job;
    return (
        <div className='hover:scale-[1.05] transition-all'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{jobTitle}</h2>
                    <div className='flex items-center gap-2 text-lg font-bold'>
                        <h2>Salary Range:</h2>
                        <p>{jobSalary}</p>
                    </div>
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
                        <button className="btn btn-outline btn-accent w-full font-extrabold">View Details</button>
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