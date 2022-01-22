import { Injectable } from "@nestjs/common";
import { ICommandHandler } from "Core/0-Framework/ApplicationService/ICommandHandler";
import { UpdatePrice } from "Core/1-Domain/Commands/UpdatePrice";
import { AdvertismentRepository } from "Core/1-Domain/Data/AdvertismentRepository";

@Injectable()
export class HandleUpdatePrice implements ICommandHandler<UpdatePrice>
{
    constructor (private _advertismentRepository: AdvertismentRepository)
    { }
    
    handle(command: UpdatePrice): void
    {
        throw new Error("Method not implemented.");
    }
}
