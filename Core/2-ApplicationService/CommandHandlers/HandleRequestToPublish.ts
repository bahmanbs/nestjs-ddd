import { Injectable } from "@nestjs/common";
import { ICommandHandler } from "Core/0-Framework/ApplicationService/ICommandHandler";
import { RequestTopublish } from "Core/1-Domain/Commands/RequestToPublish";
import { AdvertismentRepository } from "Core/1-Domain/Data/AdvertismentRepository";

@Injectable()
export class HandleRequestToPublish implements ICommandHandler<RequestTopublish>
{
    constructor (private _advertismentRepository: AdvertismentRepository)
    { }
    
    handle(command: RequestTopublish): void
    {
        throw new Error("Method not implemented.");
    }
}