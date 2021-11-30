export interface IPostOffertsRequest {
    ticketNum: string;
    fullName: string;
    email: string;
    tel: string;
}

export interface IPostOffertsResponse {
    succeeded: boolean;
    message: string;
    errors: string[] | null;
    data: object | number;
}