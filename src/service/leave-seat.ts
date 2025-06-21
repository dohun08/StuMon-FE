
import axiosInstance from "../lib/axiosInstance.ts";
import type {LeaveForm} from "../pages/leave-seat";


export const create_leave_seat_form = async (data : LeaveForm)=> {
  try{
    const res = await axiosInstance.post('/leaveseat/',data );
    return res.status;

  }catch (error) {
    console.error(error);
    throw error;
  }
}

export const get_leave_seat = async (date : string)=>{
  try{
    const res = await axiosInstance('/leaveseat/' + date);
    return res.data;
  }catch (error) {
    console.error(error);
  }
}