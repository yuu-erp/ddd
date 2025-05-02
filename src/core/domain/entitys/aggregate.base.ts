import { EmitterPort } from "~/core/infrastructure/emitter/emitter.port";
import { DomainEvent } from "../events/domain-event.base";
import { Entity } from "./entity.base";
import { LoggerPort } from "~/core/infrastructure/logger/logger.port";

export abstract class AggregateRoot<Props> extends Entity<Props> {
  #domainEvents: DomainEvent[] = [];

  get domainEvents(): DomainEvent[] {
    return this.#domainEvents;
  }

  set domainEvents(domainEvents: DomainEvent[]) {
    this.#domainEvents = domainEvents;
  }

  addEvent(domainEvent: DomainEvent | DomainEvent[]): void {
    if (Array.isArray(domainEvent)) {
      this.domainEvents = [...this.domainEvents, ...domainEvent];
    } else {
      this.domainEvents.push(domainEvent);
    }
  }

  clearEvents(): void {
    this.domainEvents = [];
  }

  async publishEvents(
    emitter: EmitterPort,
    logger?: LoggerPort
  ): Promise<void> {
    try {
      await Promise.all(
        this.domainEvents.map(async (event) => {
          logger?.debug(
            `[RequestID] "${event.constructor.name}" event published for aggregate ${this.constructor.name} : ${this.id}`
          );
          await emitter.emitAsync(event.constructor.name, event);
        })
      );
      this.clearEvents();
    } catch (error) {
      logger?.error(
        `Failed to publish events for aggregate ${this.constructor.name}: ${
          (error as Error).message
        }`
      );
      throw error;
    }
  }
}
