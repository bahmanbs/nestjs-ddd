import { BaseValueObject } from "../../0-Framework/BaseValueObject";

export class Rial extends BaseValueObject<number>
{
    constructor(value: number)
    {
        super(value);
    }

    public add(rial: Rial)
    {
        return new Rial(this.props.value + rial.props.value)
    }

    public subtract(rial: Rial)
    {
        return new Rial(this.props.value - rial.props.value)
    }
}
