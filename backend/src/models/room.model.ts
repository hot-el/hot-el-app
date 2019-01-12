import {Entity, model, property} from '@loopback/repository';

@model()
export class Room extends Entity {
  @property({
    type: 'string',
    id: true,
    required: false,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  number: string;

  @property({
    type: 'string',
    required: true,
    default: "basic",
  })
  type: string;

  @property({
    type: 'number',
    required: true,
    default: 2,
  })
  size: number;

  @property({
    type: 'date',
  })
  conservationDate?: string;

  constructor(data?: Partial<Room>) {
    super(data);
  }
}
