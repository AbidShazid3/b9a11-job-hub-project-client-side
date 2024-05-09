import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="font-lato">
            <div>
                <h2 className="text-5xl font-bold">hello this is main root</h2>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Main;