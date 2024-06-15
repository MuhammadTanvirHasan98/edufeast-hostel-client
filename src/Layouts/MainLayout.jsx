import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div>
       {/* Navbar */}

       {/* Outlet */}
       <div className="min-h-[calc(100vh-600px)] max-w-[2400px] mx-auto">
        <Outlet />
      </div>

       {/* Footer */}
    </div>
  );
};

export default MainLayout;