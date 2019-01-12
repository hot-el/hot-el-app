import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import { Address } from './address.model';
import { User } from './user.model';

@model()
export class Person extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

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
    required: true,
  })
  birthdate: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @hasOne(() => Address)
  adress?: Address;

  @belongsTo(() => User, {
    keyTo: 'userId',
    keyFrom: 'personId'
  })
  user?: User;

  constructor(data?: Partial<Person>) {
    super(data);
  }
}
