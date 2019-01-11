import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'object',
  })
  person?: object;

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
