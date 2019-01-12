import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Person } from './person.model';

@model()
export class Address extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  street: string;

  @property({
    type: 'string',
    required: true,
  })
  buildingNo: string;

  @property({
    type: 'string',
  })
  flatNo?: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  postcode: string;

  @belongsTo(() => Person)
  personId: string;

  constructor(data?: Partial<Address>) {
    super(data);
  }
}
