import { BaseValueObject } from "../../0-Framework/BaseValueObject";

export class UserId extends BaseValueObject<string>
{
    constructor(id: string)
    {
        if (typeof id == "undefined" || id == null)
        {
            throw new Error("شناسه نمی تواند خالی باشد");
        }
        if (typeof id != "string")
        {
            throw new Error("شناسه باید رشته باشد");
        }
        super(id)
    }
}
