import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mongo-1.datasource.json';

export class Mongo1DataSource extends juggler.DataSource {
  static dataSourceName = 'mongo1';

  constructor(
    @inject('datasources.config.mongo1', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
