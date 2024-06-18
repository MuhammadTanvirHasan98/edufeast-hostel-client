import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMeals = (search = '', category = '', price = '') => {
  const axiosPublic = useAxiosPublic();

  const { data: allMeals = [], isLoading } = useQuery({
    queryKey: ['allMeals', search, category, price],
    queryFn: async () => {
      const res = await axiosPublic.get('/allMeals', {
        params: {
          search,
          category,
          price
        },
      });
      if (res.status === 204) {
        return []; // Return empty array if no content
      }
      return res.data;
    },
    enabled: true, // Always fetch regardless of filters
  });

  return [allMeals, isLoading];
};

export default useMeals;
