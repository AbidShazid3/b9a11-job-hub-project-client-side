import { Link, useRouteError } from "react-router-dom";
import error404 from "../../assets/images/error404.jpg";


const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
            <div className="text-center text-xl space-y-1">
                <img src={error404} alt="" className="w-1/3 h-1/3 m-auto" />
                <p>Sorry, an unexpected error has occurred.</p>
                <p className="text-red-600">{error.data}</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/" className="text-xl font-bold btn btn-accent">Back To Home</Link>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;