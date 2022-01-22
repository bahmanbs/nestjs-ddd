import { Injectable } from "@nestjs/common";
import { ICommandHandler } from "Core/0-Framework/ApplicationService/ICommandHandler";
import { CreateAdvertisment } from "Core/1-Domain/Commands/CreateAdvertisment";
import { AdvertismentRepository } from "Core/1-Domain/Data/AdvertismentRepository";

@Injectable()
export class CreateHandler implements ICommandHandler<CreateAdvertisment>
{ // all of transactions, intergration eventsm validations and ... will be done here
    constructor (private _advertismentRepository: AdvertismentRepository)
    { }

    handle(command: CreateAdvertisment): void
    {
        throw new Error("Method not implemented.");
    }
}
