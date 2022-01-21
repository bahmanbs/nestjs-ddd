import { BaseValueObject } from "../../0-Framework/BaseValueObject";

export class Title extends BaseValueObject<string>
{
    constructor(title: string)
    {
        if ( typeof title == "undefined" || title == null )
        {
            throw new Error("عنوان نمی تواند خالی باشد");
        }
        if ( (title.length < 4) || (title.length > 30) )
        {
            throw new Error("عنوان باید بین 4 الی 30 کاراکتر باشد");
        }
        super(title)
    }
}
