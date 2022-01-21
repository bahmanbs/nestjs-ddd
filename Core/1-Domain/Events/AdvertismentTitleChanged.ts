import { IEvent } from "../../0-Framework/BaseEvents";

export class AdvertismentTitleChanged extends IEvent
{
    constructor(public id: string, public title: string)
    {
        super()
    }
}