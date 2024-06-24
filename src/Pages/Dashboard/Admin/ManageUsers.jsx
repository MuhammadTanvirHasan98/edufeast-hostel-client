import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import TableHeaderText from "../../../Components/Dashboard/TableHeaderText";
import LoadingSpinner from "../../../Components/Common/LoadingSpinner";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: users = [], isLoading , refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/users');
      return data;
    },
    enabled: !loading && !!user,
  });
  console.log(users);

  const handleMakeAdmin = (id) => {

     console.log(id);
    try {
      Swal.fire({
        title: "Are you sure to make Admin?",
        text: "Role will be changed after your confirmation!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axiosSecure.patch(`/makeAdmin/${id}`);
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Role Updated!",
              text: "Your action is done successfully",
              icon: "success",
            });
            refetch();
          }
        }
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] border-2 border-cyan-300 space-y-7">
      <div className="m-2">
        <TableHeaderText
          text={"All Users"}
          count={users.length}
        />

        {isLoading || loading ? (
          <LoadingSpinner />
        ) : (
          <div className="mt-6">
            <div className=" overflow-x-auto ">
              <div className="inline-block min-w-full py-2 align-middle ">
                <div className="overflow-hidden border border-slate-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-100 text-cyan-600 ">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm  text-left rtl:text-right "
                        >
                          <div className="flex items-center gap-x-2 whitespace-nowrap">
                            <span>User Name</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm  text-left rtl:text-right whitespace-nowrap"
                        >
                          <span>Email</span>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm  text-left rtl:text-right whitespace-nowrap"
                        >
                          <span>Subscription</span>
                        </th>


                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm  text-left rtl:text-right whitespace-nowrap"
                        >
                          <span>Role</span>
                        </th>



                        <th className="px-4 py-3.5 text-sm  text-center rtl:text-right ">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 ">
                      {users.map((user) => (
                        <tr key={user?._id}>
                          {/* Food Name */}
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {user?.name}
                          </td>

                          {/* Food Category */}
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {user?.email}
                          </td>

                          {/* Food Origin */}
                          <td className="px-4 pl-8 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {user?.badge}
                          </td>


                          <td className="px-4 pl-8 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {user?.role}
                          </td>


                          {/* Action button */}
                          <td className="px-4 py-4 text-sm flex justify-center whitespace-nowrap">
                            <button
                              onClick={() => handleMakeAdmin(user?._id)}
                              disabled={user?.role === 'admin'}
                              className="btn btn-sm hover:bg-blue-100 text-blue-600"
                            >
                              Make Admin
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
