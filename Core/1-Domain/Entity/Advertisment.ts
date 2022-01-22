import { BaseEntity } from "../../0-Framework/BaseEntity";
import { IEvent } from "../../0-Framework/BaseEvents";
import { AdvertismentApproved } from "../Events/AdvertismentApproved";
import { AdvertismentCreated } from "../Events/AdvertismentCreated";
import { AdvertismentDescriptionUpdated } from "../Events/AdvertismentDescriptionUpdated";
import { AdvertismentPriceUpdated } from "../Events/AdvertismentPriceUpdated";
import { AdvertismentSentForReview } from "../Events/AdvertismentSentForReview";
import { AdvertismentTitleChanged } from "../Events/AdvertismentTitleChanged";
import { Description, Price, Rial, Title, UserId } from "../ValueObjects";
export enum AdvertismentStatus
{
    New = 1,
    WaitingForReview = 2,
    Published = 3,
    Disable = 4
}
export class Advertisment extends BaseEntity
{
    public ownerId!: UserId;
    public approvedBy!: UserId;
    public title!: Title;
    public description!: Description;
    public price!: Price;
    public status!: AdvertismentStatus;

    public setTitle(title: Title): void
    {
        this.handleEvent(new AdvertismentTitleChanged(this.id, title.props.value));
    }
    
    public setDescription(description: Description): void
    {
        this.handleEvent(new AdvertismentDescriptionUpdated(this.id, description.props.value));
    }

    public setPrice(price: Price): void
    {
        this.handleEvent(new AdvertismentPriceUpdated(this.id, price.props.value.props.value));
    }

    public sendForReview(): void
    {
        this.handleEvent(new AdvertismentSentForReview(this.id));
    }

    public approve(approver: UserId)
    {
        this.handleEvent(new AdvertismentApproved(this.id, approver.props.value));
    }

    protected validateInvariants(): void
    {
        const isValid =
            this.id != null &&
            this.ownerId != null &&
            (() =>
            {
                switch (this.status)
                {
                    case AdvertismentStatus.Published:
                        return ((this.title != null) && (this.description != null) && (this.price != null) && (this.approvedBy != null)) ? true : false;
                    case AdvertismentStatus.WaitingForReview:
                        return ((this.title != null) && (this.description != null) && (this.price != null)) ? true : false;
                    default:
                        return true;
                }
            })();

        if (!isValid)
        {
            throw new Error("امکان تغییر وضعیت وجود ندارد");
        }
    }

    protected setStateByEvent(event: IEvent): void
    {
        if (event instanceof AdvertismentCreated)
        {
            this.id = event.id;
            this.ownerId = new UserId(event.ownerId);
        }
        else if (event instanceof AdvertismentDescriptionUpdated)
        {
            this.description = new Description(event.description);
        }
        else if (event instanceof AdvertismentTitleChanged)
        {
            this.title = new Title(event.title);
        }
        else if (event instanceof AdvertismentPriceUpdated)
        {
            this.price = new Price(new Rial(event.price));
        }
        else if (event instanceof AdvertismentSentForReview)
        {
            this.status = AdvertismentStatus.WaitingForReview;
        }
        else if (event instanceof AdvertismentApproved)
        {
            this.approvedBy = new UserId(event.approver);
            this.status = AdvertismentStatus.Published;
        }
    }

    constructor ({ id, ownerId }: { id: string, ownerId: UserId; })
    {
        super(id);
        this.handleEvent(new AdvertismentCreated(id, ownerId.props.value));
    }
}
