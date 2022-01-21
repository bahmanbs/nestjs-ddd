import { IEvent } from "../BaseEvents";

export abstract class BaseEntity
{
    public id: string;
    private readonly _events: Set<IEvent> = new Set();
    private raise(event: IEvent): void
    {
        this._events.add(event);
    }
    public getChanges(): IEvent[]
    {
        return [ ...this._events.values() ];
    }
    public clearChanges(): void
    {
        this._events.clear();
    }
    protected handleEvent(event: IEvent): void
    {
        this.setStateByEvent(event);
        this.validateInvariants();
        this.raise(event);
    }
    protected abstract validateInvariants(): void;
    protected abstract setStateByEvent(event: IEvent): void;
    constructor (id: string)
    {
        this.id = id;
    }
}
