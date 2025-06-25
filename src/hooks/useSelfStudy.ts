import { useQuery } from "@tanstack/react-query";
import * as API from "../service/self-study";

export const useGetSelfStudyStats = () => {
  return useQuery({
    queryKey: ["selfStudyStats"],
    queryFn: async () => {
      const res = await API.getSelfStudyStats();
      return res.data || [];
    }
  })
}

export const useGetNextSelfStudy = () => {
  return useQuery({
    queryKey: ["nextSelfStudy"],
    queryFn: async () => {
      const res = await API.getNextSelfStudy();
      return res.data || [];
    }
  })
}