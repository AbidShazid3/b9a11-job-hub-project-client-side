import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import photo1 from "../../assets/images/login.jpg";
import photo2 from "../../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LogIn = () => {
    const { user, logInUser, googleLogInUser, githubLogIn } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        const details = { name, email, pass }
        console.log(details);

        logInUser(email, pass)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                e.target.reset();
                toast.success('Login successful!');
                navigate(location?.state ? location?.state : "/");

            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);
            })
    }

    const handleGoogleLogIn = () => {
        googleLogInUser()
            .then(result => {
                const googleLoggedUser = result.user;
                console.log(googleLoggedUser);
                toast.success('Login successful!');
                navigate(location?.state ? location?.state : "/");
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);
            })
    }

    const handleGithubLogIn = () => {
        githubLogIn()
            .then(result => {
                const githubSignInUser = result.user;
                console.log(githubSignInUser);
                toast.success('Login successful!');
                navigate(location?.state ? location?.state : "/");
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);
            })
    }

    if (user) {
        return <Navigate to="/"></Navigate>
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${photo1})`,
                    }}
                ></div>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img className='w-auto size-10' src={photo2} alt='' />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Welcome back!
                    </p>
                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-sm text-center text-gray-500 uppercase  hover:underline'>
                            login now
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleLogIn}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email' 
                                required 
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    id='loggingPassword'
                                    autoComplete='current-password'
                                    name='password'
                                    required 
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type={showPassword ? "text" : "password"}
                                />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-5 cursor-pointer">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaRegEye ></FaRegEye>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-base font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div
                        onClick={handleGoogleLogIn}
                        className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '
                    >
                        <div className='px-4 py-2'>
                            <FcGoogle className="w-6 h-6" />
                        </div>

                        <span className='w-5/6 px-4 py-3 font-bold text-center'>
                            Sign in with Google
                        </span>
                    </div>
                    <div
                        onClick={handleGithubLogIn}
                        className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '
                    >
                        <div className='px-4 py-2'>
                            <FaGithub className="w-6 h-6" />
                        </div>

                        <span className='w-5/6 px-4 py-3 font-bold text-center'>
                            Sign in with Github
                        </span>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/register'
                            className='text-lg text-gray-500 uppercase  hover:underline'
                        >
                            new here? <span className="text-red-600 font-bold">register</span>
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;