import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdminData, isLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/admin/${user?.email}`);
      console.log(data);
      return data.admin; 
    },
  });

  console.log(isAdminData);
  return [isAdminData, isLoading];
};

export default useAdmin;