import { IEvent } from "../../0-Framework/BaseEvents";

export class AdvertismentPriceUpdated extends IEvent
{
    constructor(public id: string, public price: number)
    {
        super()
    }
}