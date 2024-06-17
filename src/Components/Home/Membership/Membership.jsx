import HeadingPart from "../../Common/HeadingPart";
import { IoCheckmarkDoneOutline } from "react-icons/io5";


const Membership = () => {
  return (

    <div className="my-56 lg:w-[75%] w-[65%] mx-auto">
      <HeadingPart heading='Our Membership Packages' subHeading='Get Packages'/>
      
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-16 gap-8 mt-32">


    
    {/* Card 1 */}
      <div className="lg:mb-0 mb-20 shadow-2xl border-2 border-cyan-200">
         <div className="bg-gradient-to-tr from-cyan-300 to-cyan-600 m-10 -mt-16  p-5 text-center text-white space-y-3 shadow-2xl">
           <h1 className="text-2xl font-bold ">SILVER PLAN</h1>
           <p className="lg:text-6xl text-5xl font-semibold">$29</p>
           <p className="text-lg">PER MONTH</p>
         </div>

         <div className="lg:px-10 px-6 lg:pb-10 pb-6 space-y-2 font-semibold ">
           <p className="text-lg flex items-center gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-cyan-600"/>Send 20 meals requests</p>
           <p className="text-lg flex items-center gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-cyan-600"/>3 meals per day</p>
           <p className="text-lg flex items-center gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-cyan-600"/>5 premium meals</p>
           <p className="text-lg flex items-center gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-cyan-600"/>Get 20% off next time</p>
           
           {/* Button */}
           <div className="flex items-center justify-center">
           <button className="btn text-white bg-gradient-to-tr from-cyan-300 to-cyan-600 hover:from-cyan-600 hover:to-cyan-300  rounded-none font-bold mt-4 px-10">Choose Plan</button>
           </div>
         </div>
      </div>
      
      {/* Card 2 */}
      <div className="lg:mb-0 mb-20 shadow-2xl border-2 border-yellow-200">
         <div className="bg-gradient-to-tr from-yellow-400 to-yellow-600 m-10 -mt-16  p-5 text-center text-white space-y-3 shadow-2xl">
           <h1 className="text-2xl font-bold ">GOLD PLAN</h1>
           <p className="lg:text-6xl text-5xl font-semibold">$69</p>
           <p className="text-lg">PER MONTH</p>
         </div>

         <div className="lg:px-10 px-6 lg:pb-10 pb-6 space-y-2 font-semibold ">
           <p className="text-lg flex items-center  gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-yellow-600"/>Send 50 meals requests</p>
           <p className="text-lg flex items-center  gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-yellow-600"/>5 meals per day</p>
           <p className="text-lg flex items-center  gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-yellow-600"/>10 premium meals</p>
           <p className="text-lg flex items-center  gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-yellow-600"/>Get 40% off next time</p>
           <div className="flex items-center justify-center">

           <button className="btn text-white bg-gradient-to-tr from-yellow-300 to-yellow-600 hover:from-yellow-600 hover:to-yellow-300  rounded-none font-bold mt-4 px-10">Choose Plan</button>
           </div>
         </div>
      </div>

      {/* Card 3 */}
      <div className="lg:mb-0 mb-20 shadow-2xl border-2 border-blue-200">
         <div className="bg-gradient-to-tr from-blue-300 to-blue-600 m-10 -mt-16  p-5 text-center text-white space-y-3 shadow-2xl">
           <h1 className="text-2xl font-bold ">PLATINUM PLAN</h1>
           <p className="lg:text-6xl text-5xl font-semibold">$99</p>
           <p className="text-lg">PER MONTH</p>
         </div>

         <div className="lg:px-10 px-6 lg:pb-10 pb-6 space-y-2 font-semibold ">
           <p className="text-lg flex items-center gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-blue-600"/>Send unlimited meals requests</p>
           <p className="text-lg flex items-center gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-blue-600"/>10 meals per day</p>
           <p className="text-lg flex items-center gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-blue-600"/>50 premium meals</p>
           <p className="text-lg flex items-center gap-2 text-gray-500 xl:ml-4 ml-0"><IoCheckmarkDoneOutline  className="text-blue-600"/>Get 65% off next time</p>
           <div className="flex items-center justify-center">

           <button className="btn text-white bg-gradient-to-tr from-blue-300 to-blue-600 hover:from-blue-600 hover:to-blue-300  rounded-none font-bold mt-4 px-10">Choose Plan</button>
           </div>
         </div>
      </div>
  
     

    </div>
    </div>
  );
};

export default Membership;