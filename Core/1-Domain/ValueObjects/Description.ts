import { BaseValueObject } from "../../0-Framework/BaseValueObject";

export class Description extends BaseValueObject<string>
{
    constructor(description: string)
    {
        if (typeof description == "undefined" || description == null)
        {
            throw new Error("توضیحات نمی تواند خالی باشد");
        }
        if ((description.length < 4) || (description.length > 30) )
        {
            throw new Error("توضیحات نباید بیشتر از 100 کاراکتر باشد");
        }
        super(description)
    }
}
