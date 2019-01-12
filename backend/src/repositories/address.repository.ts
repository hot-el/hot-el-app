import {DefaultCrudRepository, juggler, BelongsToAccessor, repository} from '@loopback/repository';
import {Address, Person} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { PersonRepository } from './person.repository';

export class AddressRepository extends DefaultCrudRepository<
  Address,
  typeof Address.prototype.id
> {
  public readonly person: BelongsToAccessor<
    Person,
    typeof Address.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('PersonRepository')
    personRepositoryGetter: Getter<PersonRepository>
  ) {
    super(Address, dataSource);
    this.person = this.createBelongsToAccessorFor(
      'person',
      personRepositoryGetter,
    );
  }
}
