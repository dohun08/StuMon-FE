import * as API from "../service/supervision";
import { useQuery } from "@tanstack/react-query";

export const useGetSupervision = (month: number) => {
  return useQuery({
    queryKey: ["supervision", month],
    queryFn: async () => {
      const res = await API.getSupervision(month);
      return res.data || [];
    },
  });
};

export const useGetTodaySupervision = (date: string) => {
  return useQuery({
    queryKey: ["todaySupervision", date],
    queryFn: async () => {
      const res = await API.getTodaySupervision(date);
      return res.data || [];
    },
  });
};