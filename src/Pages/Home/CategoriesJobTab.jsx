import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCategorieCard from '../../components/JobCategoriesCard/JobCategorieCard';
import { Link } from 'react-router-dom';

const CategoriesJobTab = () => {
    const [jobs, setJobs] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])

    const handleTabSelect = index => {
        setActiveTab(index);
    }

    const sixJobs = jobs.slice(0, 6)

    return (
        <Tabs className='mt-10' selectedIndex={activeTab} onSelect={handleTabSelect}>
            <div className='p-10'>
                <h1 className='text-2xl font-semibold text-center text-slate-500 capitalize lg:text-4xl '>
                    Explore Job Categories
                </h1>

                <p className='max-w-2xl mx-auto my-5 text-center text-gray-500 '>
                    Discover job opportunities across various categories. Explore our selection of roles in On Site, Remote, Part_Time, Hybrid. Click on the tabs below to browse jobs in each category and find the perfect fit for your skills and interests. Begin your job search today!
                </p>
                <div className='flex justify-center items-center'>
                    <TabList>
                        <Tab>All Jobs</Tab>
                        <Tab>On Site</Tab>
                        <Tab>Remote</Tab>
                        <Tab>HyBrid</Tab>
                        <Tab>Part-Time</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                        {
                            sixJobs.map(job => <JobCategorieCard
                                key={job._id}
                                job={job}
                            ></JobCategorieCard>)
                        }
                    </div>
                    <div className='flex justify-center mt-10'>
                        <Link to="/alljobs" className='btn btn-accent text-lg'>View More Jobs</Link>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                        {
                            jobs.filter(jb => jb.jobCategory === 'On_Site Job').map(job => (<JobCategorieCard
                                key={job._id}
                                job={job}
                            ></JobCategorieCard>))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                        {
                            jobs.filter(jb => jb.jobCategory === 'Remote Job').map(job => (<JobCategorieCard
                                key={job._id}
                                job={job}
                            ></JobCategorieCard>))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                        {
                            jobs.filter(jb => jb.jobCategory === 'Hybrid').map(job => (<JobCategorieCard
                                key={job._id}
                                job={job}
                            ></JobCategorieCard>))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                        {
                            jobs.filter(jb => jb.jobCategory === 'Part Time').map(job => (<JobCategorieCard
                                key={job._id}
                                job={job}
                            ></JobCategorieCard>))
                        }
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default CategoriesJobTab;