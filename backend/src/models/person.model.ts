import {Entity, model, property} from '@loopback/repository';

@model()
export class Person extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  firstName?: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'date',
  })
  birthDate?: string;

  @property({
    type: 'string',
  })
  position?: any;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @property({
    type: 'string',
  })
  email?: string;

  constructor(data?: Partial<Person>) {
    super(data);
  }
}
