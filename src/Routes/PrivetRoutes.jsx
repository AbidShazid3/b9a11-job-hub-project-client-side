import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';


const PrivetRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div>
                    <span className="loading loading-ring loading-xs  text-primary"></span>
                    <span className="loading loading-ring loading-sm text-secondary"></span>
                    <span className="loading loading-ring loading-md text-accent"></span>
                    <span className="loading loading-ring loading-lg text-warning"></span>
                    <span className="loading loading-ring loading-lg text-warning"></span>
                    <span className="loading loading-ring loading-md text-accent"></span>
                    <span className="loading loading-ring loading-sm text-secondary"></span>
                    <span className="loading loading-ring loading-xs  text-primary"></span>
                </div>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
};

PrivetRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivetRoutes;