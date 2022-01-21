import { IEvent } from "../../0-Framework/BaseEvents";

export class AdvertismentDescriptionUpdated extends IEvent
{
    constructor(public id: string, public description: string)
    {
        super()
    }
}
