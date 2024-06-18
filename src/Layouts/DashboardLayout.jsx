import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
       {/* Sidebar */}
       <Sidebar/>
                     
       {/* Outlet */}
       <div className="flex-1 md:ml-64 p-10">
         <Outlet/>
       </div>
      
    </div>
  );
};

export default DashboardLayout;