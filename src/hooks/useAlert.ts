import { useMutation, useQuery } from "@tanstack/react-query"
import * as API from "../service/alert"

export const useGetAlert = () => {
  return useQuery({
    queryKey: ["alert"],
    queryFn: async () => {
      const res = await API.getAlert();
      return res || {};
    },
  })
}

export const usePostAlert = () => {
  return useMutation({
    mutationKey: ["alert"],
    mutationFn: async (alert_id: number) => {
      const res = await API.postAlert(alert_id);
      return res || {};
    },
  })
}

export const useDeleteAlert = () => {
  return useMutation({
    mutationKey: ["alert", "delete"],
    mutationFn: async () => {
      const res = await API.deleteAlert();
      return res || {};
    },
  })
}