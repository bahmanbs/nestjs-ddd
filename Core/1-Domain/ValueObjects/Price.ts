import { BaseValueObject } from "../../0-Framework/BaseValueObject";
import { Rial } from "./Rial";

export class Price extends BaseValueObject<Rial>
{
    constructor(price: Rial)
    {// now price is valid always based on Rial rules
        if (price.props.value < 1)
        {
            throw new Error("قیمت نمیتواند کمتر از 1 باشد")
        }

        super(price);
    }
}