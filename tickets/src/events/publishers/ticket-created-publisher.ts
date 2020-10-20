import { Publisher, Subjects, TicketCreatedEvent } from '@nsrtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

