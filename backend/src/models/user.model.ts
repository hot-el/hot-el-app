import {Entity, model, property, hasOne} from '@loopback/repository';
import { Person } from './person.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  role?: string[];

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  isPasswordChangeRequired: boolean;

  @hasOne(() => Person, { keyTo: 'personId' })
  person?: Person;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
