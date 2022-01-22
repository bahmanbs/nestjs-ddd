import { Injectable } from "@nestjs/common";
import { Advertisment } from "../Entity/Advertisment";
import { IAdvertismentRepository } from "./IAdvertismentRepository";

@Injectable()
export class AdvertismentRepository implements IAdvertismentRepository
{
    exists(id: string): boolean
    {
        throw new Error("Method not implemented.");
    }
    load(id: string): Advertisment
    {
        throw new Error("Method not implemented.");
    }
    add(id: Advertisment): void
    {
        throw new Error("Method not implemented.");
    }
}
