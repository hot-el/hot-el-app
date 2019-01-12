import {HotelapiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {HotelapiApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new HotelapiApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
