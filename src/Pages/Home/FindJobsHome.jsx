import { Link } from "react-router-dom";
import ifind from "../../assets/images/ifind.png";

const FindJobsHome = () => {
    return (
        <div>
            <div className="mt-10">
                <div className="hero bg-base-100">
                    <div className="hero-content flex-col lg:flex-row bg-[#d9e6ff] rounded-[40px]">
                        <div className="px-4 py-10 flex-1">
                            <p className="text-[#3979e7] font-bold">Find jobs</p>
                            <h1 className="text-5xl font-bold text-[#151515] pt-5">Create free count and start apply your dream job today</h1>
                            <p className="pt-7">Explore a diverse range of career options, connect with top employers, and take the first step towards shaping your future. Don`t miss out on your chance to turn your aspirations into reality join us now and embark on your professional journey!</p>
                            <Link className="btn btn-outline btn-info text-lg mt-5">Explore More</Link>
                        </div>
                        <div className="flex-1">
                            <img src={ifind} alt="" className="rounded-[40px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindJobsHome;