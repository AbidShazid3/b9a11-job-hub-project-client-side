import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const UserProfile = () => {
    const { user } = useAuth();

    return (
        <div className="text-center bg-base-100 shadow-xl mt-10 p-4">
            <h2 className="text-4xl font-bold mt-5 text-slate-500">Profile Details</h2>
            <div className="mt-10 space-y-3">
                <img src={user.photoURL || "null"} alt="" className="rounded-full size-32 mx-auto" />
                <div className="flex justify-center items-center text-xl gap-2">
                    <h2 className="font-bold">Name:</h2>
                    <p>{user.displayName || "null"}</p>
                </div>
                <div className="flex justify-center items-center text-xl gap-2">
                    <h2 className="font-bold">Email:</h2>
                    <p>{user.email || "null"}</p>
                </div>
                <div className="flex justify-center items-center text-xl gap-2">
                    <h2 className="font-bold">Email Verified:</h2>
                    <p>{user.emailVerified ? "True" : "False"}</p>
                </div>
                <div className="flex justify-center items-center text-xl gap-2">
                    <h2 className="font-bold">Last Sign In:</h2>
                    <p>{user.metadata.lastSignInTime}</p>
                </div>
            </div>
            <Link to="/" className="text-xl font-bold btn btn-accent mt-5">Back To Home</Link>
        </div>
    );
};

export default UserProfile;