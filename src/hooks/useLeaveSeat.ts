import type { LeaveForm} from "../pages/leave-seat";
import * as API from "../service/leave-seat.ts";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import { useQueryClient } from '@tanstack/react-query';


export const useCreateLeaveSeat = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: LeaveForm) => {
      const res = await API.create_leave_seat_form(data);
      return res;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['leave_seat', variables.date],
      });
      navigate("/main");
    },
    onError: () => {
      alert("실패");
    }
  });
}

export const useGetLeaveSeat = (date : string) => {
  return useQuery({
    queryKey: ['leave_seat', date],
    queryFn: async () => {
      const res = await API.get_leave_seat(date);
      return res.data;
    }
  })
}