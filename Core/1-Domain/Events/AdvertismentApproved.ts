import { IEvent } from "../../0-Framework/BaseEvents";

export class AdvertismentApproved extends IEvent
{
    constructor(public id: string, public approver: string)
    {
        super()
    }
}