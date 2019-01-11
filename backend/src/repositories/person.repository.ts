import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Person} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Person, dataSource);
  }
}
