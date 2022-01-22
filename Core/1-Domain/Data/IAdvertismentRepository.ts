import { Advertisment } from "../Entity/Advertisment";

export interface IAdvertismentRepository
{
    exists(id: string): boolean;
    load(id: string): Advertisment;
    add(id: Advertisment): void;
}