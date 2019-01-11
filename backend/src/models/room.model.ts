import {Entity, model, property} from '@loopback/repository';

@model()
export class Room extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  number: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
    default: 2,
  })
  size?: number;

  @property({
    type: 'date',
  })
  conservationDate?: string;

  constructor(data?: Partial<Room>) {
    super(data);
  }
}
