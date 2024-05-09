import { Link, NavLink } from "react-router-dom";
import lo from "../../assets/images/logo.png"
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import useAuth from "../../hooks/useAuth";


const NavBar = () => {
    const { user,loading, logOutUser } = useAuth();

    const handleSignOutUser = () => {
        logOutUser()
            .then()
            .catch(error => {
                console.log(error.message);
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/alljobs">All Jobs</NavLink></li>
        <li><NavLink to="/appliedjob">Applied Jobs</NavLink></li>
        <li><NavLink to="/addjob">Add A Job</NavLink></li>
        <li><NavLink to="/myjobs">My Jobs</NavLink></li>
        <li><NavLink to="/profile">User Profile</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-1">
                    <Link to="/"><img src={lo} alt="" className="size-10" /></Link>
                    <Link to="/" className="text-2xl font-bold">JobHub</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <input onChange={handleToggle} type="checkbox" className="checkbox theme-controller mr-2" /> */}
                {
                    user ?
                        <div className="flex gap-2 items-center">
                            <img src={user?.photoURL || "https://t4.ftcdn.net/jpg/04/72/81/55/360_F_472815510_sdB7bklhuyVQ9eCx49WUV3CvhoLcSsvj.jpg"} alt="" className="rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user?.displayName || "Null"}
                            />
                            <Tooltip id="my-tooltip" />
                            <button onClick={handleSignOutUser} className="btn btn-accent text-lg">Sign Out</button>
                        </div>
                        :
                        <div>
                            <Link to="/login" className="btn btn-sm btn-accent text-lg mr-1">{loading ? "Loading..." : "LogIn"}</Link>
                            <Link to="/register" className="btn btn-sm btn-accent text-lg">{loading ? "Loading..." : "Register"}</Link>
                        </div>
                }
            </div>

        </div>
    );
};

export default NavBar;