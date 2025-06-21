import axiosInstance from "../lib/axiosInstance.ts";
import React from "react";

export const searchStudent = async (
  search: string,
  setStudent: React.Dispatch<React.SetStateAction<{ name: string; student_number: number , id:number}[]>>
) => {  try{
    const res = await axiosInstance('/auth/?q='+search);
    const data = await res.data;
    setStudent(data);

  }catch (error) {
    console.error(error);
  }
}