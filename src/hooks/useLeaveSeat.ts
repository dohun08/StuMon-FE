import type { LeaveForm} from "../pages/leave-seat";
import * as API from "../service/leave-seat.ts";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import { useQueryClient } from '@tanstack/react-query';
import {complete_leave_seat} from "../service/leave-seat.ts";
import useDay from "../store/day.ts";

export const useCreateLeaveSeat = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
	const {today} = useDay();
  return useMutation({
	  mutationFn: async (data: LeaveForm & { place_id: number }) => {
		  const res = await API.create_leave_seat_form(data);
      return res;
    },
	  onSuccess: (_, variables) => {
		  setTimeout(async () => {
			  try {
				  await complete_leave_seat(variables);
				  console.log("✅ complete_leave_seat 성공");
			  } catch (error) {
				  console.error("❌ complete_leave_seat 실패", error);
			  }
		  }, 5000);
			
		  queryClient.invalidateQueries({
			  queryKey: ["leave_seat", today.slice(0, 10)],
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
	  staleTime: 0,
	  refetchOnMount: true,
    queryFn: async () => {
      const res = await API.get_leave_seat(date);
      return res.data;
    }
  })
}