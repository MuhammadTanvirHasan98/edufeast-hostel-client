import LoadingSpinner from "../../../Components/Common/LoadingSpinner";
import useProfile from "../../../Hooks/useProfile";

const UserProfile = () => {
  const { profile, isLoading } = useProfile();
  console.log(profile, isLoading);

  return (
    <div>
      <div>
        <div>
          {isLoading ? (
            <>
              <LoadingSpinner />
            </>
          ) : (
            <>
              <div className="min-h-[calc(100vh-80px)] flex flex-col md:justify-center border-2 border-cyan-300 items-center space-y-7 py-10">
                <div>
                <p className="text-3xl font-semibold text-cyan-600">Your Profile Info</p>
                <hr className="border-2  border-cyan-100 w-[220px]"/>
                </div>
              
                <div className="lg:w-[50%] w-[80%] md:p-10  py-10 p-5 space-y-2 border-2 flex flex-col justify-center items-center bg-gradient-to-t from-blue-200 to-cyan-100 ">

                  
                  {/* Profile image */}
                  <img
                    src={profile?.image}
                    className="w-40 h-40 rounded-full border-4 border-blue-300 p-2"
                    alt="user-image"
                  />

                  {/* Profile info */}
                  <div className="text-center font-semibold md:text-lg">
                    <p> {profile?.name}</p>
                    <p>{profile?.email}</p>
                    <p>
                      Badge:{" "}
                      <span
                        className={`${
                          profile?.badge === "Bronze" && "text-yellow-500"
                        }`}
                      >
                        {" "}
                        {profile?.badge}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
