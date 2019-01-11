import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Room} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RoomRepository extends DefaultCrudRepository<
  Room,
  typeof Room.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Room, dataSource);
  }
}
