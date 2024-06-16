import { Link, NavLink } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";


const Navbar = () => {



  const navLinks = (
    <div className="flex flex-col  lg:flex-row gap-4 ">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg rounded-none border-b-2 font-bold flex justify-center border-white text-white"
              : "font-bold text-lg flex justify-center rounded-none text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg rounded-none border-b-2 font-bold flex justify-center border-white text-white"
              : "font-bold text-lg flex justify-center rounded-none text-white"
          }
          to="/allMeals"
        >
         All Meals
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
          ? "text-lg rounded-none border-b-2 font-bold flex justify-center border-white text-white"
          : "font-bold text-lg flex justify-center rounded-none text-white"
         }
          to="/upcomingMeals"
        >
          Upcoming Meals
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className=" bg-opacity-50 bg-blue-500 text-white w-full z-10 fixed">
    <div className=" max-w-[2400px] mx-auto">
      <div className="navbar lg:w-[86%] p-0  w-[95%] mx-auto">
        <div className="navbar-start lg:w-[50%] w-full">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn rounded-none flex btn-sm px-1 btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-8 md:w-8 h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-blue-500 rounded-none bg-opacity-50 w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to='/' className="md:text-2xl text-xl font-extrabold merienda">
            Edu<span className="text-yellow-600">Feast</span>{" "} Hostel
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end lg:w-[50%] w-[30%]">
        <IoMdNotificationsOutline className="text-white md:mr-4 mr-1 text-2xl" />
            <Link to='/login' className="font-bold md:text-xl border-x-2 border-white rounded-none md:px-3 px-1 border-y-0 text-white text-sm  hover:text-black">
              Join Us
            </Link>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;