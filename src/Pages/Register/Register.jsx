import { useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import photo2 from "../../assets/images/register 2.jpg"


const Register = () => {
    const { user, createUser, updateUserProfile } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const pass = form.password.value;
        const details = { name, photo, email, pass }
        console.log(details);
        if (pass.length < 6) {
            toast.error("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(pass)) {
            toast.error("Password Must have an Uppercase letter");
            return;
        }
        else if (!/[a-z]/.test(pass)) {
            toast.error("Password Must have a Lowercase letter");
            return;
        }

        createUser(email, pass)
            .then(result => {
                const registerUser = result.user;
                console.log(registerUser);
                updateUserProfile(name, photo)
                    .then(() => {
                        e.target.reset();
                        toast.success('Login successful!');
                        navigate(location?.state ? location?.state : "/");
                    })
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
        <div className="bg-slate-200 rounded-xl mt-10">
            <div className="container px-6 py-10 mx-auto lg:py-10">
                <div className="lg:flex">
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-bold text-center">Sign Up Now</h2>
                        <img src={photo2} alt="" className="w-auto h-4/5 rounded-xl mt-3" />
                    </div>

                    <div className="mt-8 lg:w-1/2 lg:mt-0">
                        <form onSubmit={handleRegister}>
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='name'
                                >
                                    Username
                                </label>
                                <input
                                    id='name'
                                    autoComplete='name'
                                    name='name' 
                                    required 
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='text'
                                />
                            </div>
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='photo'
                                >
                                    Photo URL
                                </label>
                                <input
                                    id='photo'
                                    autoComplete='photo'
                                    name='photo' 
                                    required 
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='text'
                                />
                            </div>
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
                                    className='w-full px-6 py-3 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div className='text-center mt-5'>
                                <Link
                                    to='/register'
                                    className='text-sm text-gray-500 uppercase  hover:underline'
                                >
                                    already have an account? <span className="text-red-600 font-bold">login now</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;