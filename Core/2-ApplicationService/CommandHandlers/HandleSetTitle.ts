import { Injectable } from "@nestjs/common";
import { ICommandHandler } from "Core/0-Framework/ApplicationService/ICommandHandler";
import { SetTitle } from "Core/1-Domain/Commands/SetTitle";
import { AdvertismentRepository } from "Core/1-Domain/Data/AdvertismentRepository";

@Injectable()
export class HandleSetTitle implements ICommandHandler<SetTitle>
{
    constructor (private _advertismentRepository: AdvertismentRepository)
    { }
    
    handle(command: SetTitle): void
    {
        throw new Error("Method not implemented.");
    }
}
