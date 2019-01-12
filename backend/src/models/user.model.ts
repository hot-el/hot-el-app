import {Entity, model, property} from '@loopback/repository';

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
  assigment?: string[];

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  isPasswordChangeRequired: boolean;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
