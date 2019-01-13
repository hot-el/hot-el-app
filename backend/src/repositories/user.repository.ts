import {DefaultCrudRepository, juggler, HasOneRepositoryFactory, repository} from '@loopback/repository';
import {User, Person} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { PersonRepository } from './person.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  public readonly person: HasOneRepositoryFactory<
    Person,
    typeof Person.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,

    @repository.getter('PersonRepository')
    getPersonRepository: Getter<PersonRepository>,
  ) {
    super(User, dataSource);

    this.person = this._createHasOneRepositoryFactoryFor(
      'person',
      getPersonRepository,
    )
  }
}
