import axiosInstance from "../lib/axiosInstance"

export const getAlert = async () => {
  try {
    const res = await axiosInstance.get("/alert")
    return res.data;
  } catch (error) {
    console.error("Error fetching alerts:", error);
    throw error;
  }
}

export const postAlert = async (alert_id: number) => {
  try {
    const res = await axiosInstance.post(`/alert/${alert_id}`);
    return res.data;
  } catch (error) {
    console.error("Error posting alert:", error);
    throw error;
  }
}

export const deleteAlert = async () => {
  try {
    const res = await axiosInstance.delete("/alert");
    return res.data;
  } catch (error) {
    console.error("Error deleting alerts:", error);
    throw error;
  }
}