import { IEvent } from "../../0-Framework/BaseEvents";

export class AdvertismentSentForReview extends IEvent
{
    constructor(public id: string)
    {
        super()
    }
}