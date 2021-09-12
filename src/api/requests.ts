import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:4000" });

type Status = "대기중" | "상담중";
type Method = "밀링" | "선반";
export interface IRequest {
  id: number;
  title: string;
  client: string;
  due: string;
  count?: number;
  docs?: number;
  amount: number;
  method: Method[];
  material: string[];
  status: Status;
}

export const getRequests = async (): Promise<IRequest[]> => {
  const response = await axiosInstance.get<IRequest[]>("/requests");
  return response.data;
};
