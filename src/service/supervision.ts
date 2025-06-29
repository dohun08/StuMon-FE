import axios from "axios";

export const getSupervision = async (month: number) => {
  const URL = import.meta.env.VITE_TEACH_API_URL;
  try {
    const res = await axios.get(`${URL}/supervision/assignment/${month}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching supervision:", error);
    throw error;
  }
};

export const getTodaySupervision = async (date: string) => {
  const URL = import.meta.env.VITE_TEACH_API_URL;
  try {
    const res = await axios.get(`${URL}/supervision/day/${date}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching today's supervision:", error);
    throw error;
  }
};