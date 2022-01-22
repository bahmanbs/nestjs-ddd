import { Injectable } from "@nestjs/common";
import { ICommandHandler } from "Core/0-Framework/ApplicationService/ICommandHandler";
import { UpdateDescription } from "Core/1-Domain/Commands/UpdateDescription";
import { AdvertismentRepository } from "Core/1-Domain/Data/AdvertismentRepository";

@Injectable()
export class HandleUdateDescription implements ICommandHandler<UpdateDescription>
{
    constructor (private _advertismentRepository: AdvertismentRepository)
    { }
    
    handle(command: UpdateDescription): void
    {
        throw new Error("Method not implemented.");
    }
}
