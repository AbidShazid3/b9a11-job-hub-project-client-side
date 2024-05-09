import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';


const PrivetRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="">
                    <span className="loading loading-spinner text-primary loading-xs"></span>
                    <span className="loading loading-spinner text-secondary loading-sm"></span>
                    <span className="loading loading-spinner text-accent loading-md"></span>
                    <span className="loading loading-spinner text-neutral loading-lg"></span>
                    <span className="loading loading-spinner text-error loading-lg"></span>
                    <span className="loading loading-spinner text-info loading-md"></span>
                    <span className="loading loading-spinner text-success loading-sm"></span>
                    <span className="loading loading-spinner text-warning loading-xs"></span>
                </div>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

PrivetRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivetRoutes;