import { useQuery } from "@tanstack/react-query";
import * as API from "../service/auth";

export const useGetStudent = () => {
  return useQuery({
    queryKey: ["student"],
    queryFn: async () => {
      const res = await API.getStudent();
      return res || {};
    },
  });
}