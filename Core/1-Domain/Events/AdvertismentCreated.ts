import { IEvent } from "../../0-Framework/BaseEvents";

export class AdvertismentCreated extends IEvent
{
    constructor(public id: string, public ownerId: string)
    {
        super()
    }
}