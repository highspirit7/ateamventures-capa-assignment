import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:4000" });

type Status = "대기중" | "상담중";
type Method = "밀링" | "선반";
type Material = "알루미늄" | "탄소강" | "구리" | "스테인리스강" | "강철";

export interface IRequest {
  id: number;
  title: string;
  client: string;
  due: string;
  count?: number;
  docs?: number;
  amount: number;
  method: Method[];
  material: Material[];
  status: Status;
}

export const getRequests = async (): Promise<IRequest[]> => {
  const response = await axiosInstance.get<IRequest[]>("/requests");
  return response.data;
};
