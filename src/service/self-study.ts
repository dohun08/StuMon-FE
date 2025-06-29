import axiosInstance from "../lib/axiosInstance";

export const getSelfStudyStats = async () => {
  try {
    const res = await axiosInstance.get(`/self-study/stats`);
    return res.data;
  } catch (error) {
    console.error("Error fetching self-study stats:", error);
    throw error;
  }
}

export const getNextSelfStudy = async () => {
  try {
    const res = await axiosInstance.get(`/self-study/next`);
    return res.data;
  } catch (error) {
    console.error("Error fetching next self-study:", error);
    throw error;
  }
}