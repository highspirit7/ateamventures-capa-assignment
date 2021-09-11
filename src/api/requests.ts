import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:4000" });

export type Status = "대기중" | "상담중";
export interface IRequest {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: Status;
}

export const getRequests = async (): Promise<IRequest[]> => {
  const response = await axiosInstance.get<IRequest[]>("/requests");
  return response.data;
};
