import { Outlet } from "react-router-dom";


const MainLayOut = () => {
    return (
        <div className="font-poppins overflow-x-hidden">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;