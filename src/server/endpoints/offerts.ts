/* import { axiosInstance } from "../../api/axios";
import { IPostOffertsRequest, IPostOffertsResponse } from "../../interfaces/offerts";

export const postOfferts = async (req: IPostOffertsRequest): Promise<IPostOffertsResponse> => {
    const res = await axiosInstance.post(`/offerts`, req);
    const resData = res.data as IPostOffertsResponse;
    return Promise.resolve(resData);
}; */