export abstract class BaseValueObject<T>
{
    props: { value: T }

    public isEqual(valueObject: BaseValueObject<T>): boolean
    {
        return JSON.stringify(valueObject) == JSON.stringify(this.props)
    }

    constructor(value: T )
    {// value objects are immutable
        this.props = Object.freeze({ value })
    }
}
