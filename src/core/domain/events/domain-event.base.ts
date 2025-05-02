import { generatePrefixId } from "~/core/helpers/ids";
import { ArgumentNotProvidedException } from "../../exceptions";
import { invariant } from "../../utils";
import { UniqueEntityID } from "../entitys/unique-entity";

/**
 * Metadata đi kèm domain event
 */
export type DomainEventMetadata = {
  /** Timestamp when this domain event occurred */
  readonly timestamp: number;

  /** ID for correlation purposes (for Integration Events,logs correlation, etc).
   */
  readonly correlationId?: string;

  /**
   * Causation id used to reconstruct execution order if needed
   */
  readonly causationId?: string;

  /**
   * User ID for debugging and logging purposes
   */
  readonly userId?: string;
};

/**
 * Định dạng input khi tạo event
 */
export type IDomainEvent<T> = Omit<T, "id" | "_metadata"> & {
  _metadata: DomainEventMetadata;
  aggregateId: UniqueEntityID;
};
/**
 * Base class cho mọi Domain Event
 */
export abstract class DomainEvent {
  readonly id: UniqueEntityID;
  readonly aggregateId: UniqueEntityID;
  readonly _metadata: DomainEventMetadata;

  constructor(domainEvent: IDomainEvent<unknown>) {
    invariant(
      domainEvent,
      new ArgumentNotProvidedException("Domain event payload must be provided")
    );

    invariant(
      domainEvent._metadata.timestamp !== undefined,
      new ArgumentNotProvidedException(
        "Timestamp must be included in event metadata"
      )
    );
    invariant(
      domainEvent.aggregateId,
      new ArgumentNotProvidedException("Aggregate ID must be provided")
    );

    this.id = new UniqueEntityID(generatePrefixId("de"));
    this.aggregateId = domainEvent.aggregateId;
    this._metadata = {
      correlationId: domainEvent?._metadata?.correlationId,
      causationId: domainEvent?._metadata?.causationId,
      timestamp: domainEvent._metadata.timestamp,
      userId: domainEvent?._metadata?.userId,
    };
  }
}
