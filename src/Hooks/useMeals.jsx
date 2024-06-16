import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMeals = () => {
  
  const axiosPublic = useAxiosPublic();
   
  const {data: allMeals=[], isLoading} = useQuery({
    queryKey:['allMeals'],
    queryFn: async()=>{
       const res =  await axiosPublic.get('/allMeals')
       return res.data
    }
  })

  return [allMeals, isLoading]
};

export default useMeals;