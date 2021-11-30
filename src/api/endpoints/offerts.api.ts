import { axiosInstance } from "../axios";
import { IPostOffertsRequest, IPostOffertsResponse } from "../../interfaces/offerts";

/* export const post = async (req: IPostOffertsRequest): Promise<IPostOffertsResponse> => {
    const res = await axiosInstance.post(`/offerts`, req) as IPostOffertsResponse;
    return Promise.resolve(res);
} */

export const post = async (req: IPostOffertsRequest): Promise<IPostOffertsResponse> => {
    const res = await axiosInstance.post(`/offerts`, req);
    const resData = res.data as IPostOffertsResponse;
    return Promise.resolve(resData);
};