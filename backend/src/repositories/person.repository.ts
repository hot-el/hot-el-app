import {DefaultCrudRepository, juggler, HasOneRepositoryFactory, repository, BelongsToAccessor} from '@loopback/repository';
import {Person, Address, User} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { AddressRepository } from './address.repository';
import { BelongsTo } from 'loopback-datasource-juggler';
import { UserRepository } from './user.repository';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.id
> {
  public readonly address: HasOneRepositoryFactory<
    Address,
    typeof Address.prototype.id
  >;
  public readonly user: BelongsToAccessor<
    User,
    typeof User.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,

    @repository.getter('AddressRepository')
    getAddressRepository: Getter<AddressRepository>,

    @repository.getter('UserRepository')
    getUserRepository: Getter<UserRepository>,
  ) {
    super(Person, dataSource);

    this.address = this._createHasOneRepositoryFactoryFor(
      'address',
      getAddressRepository,
    )

    this.user = this.createBelongsToAccessorFor(
      'user',
      getUserRepository,
    )
  }
}
