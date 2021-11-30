import { IPostOffertsRequest, IPostOffertsResponse } from "../../interfaces/offerts";
import { post } from "../endpoints/offerts.api"

abstract class AbstractOffertsAPI {
    abstract post(req: IPostOffertsRequest): Promise<IPostOffertsResponse>;
}
export class OffertsAPI extends AbstractOffertsAPI {
    post(req: IPostOffertsRequest): Promise<IPostOffertsResponse> {
        return post(req);
    }
}