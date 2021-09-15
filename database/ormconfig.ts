import 'reflect-metadata'
import { ConnectionOptions } from 'typeorm'

import { DATABASE_LOGGING, DATABASE_HOST, DATABASE_PORT, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } from './config'

const baseConfig: ConnectionOptions = {
  type: 'mysql',
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  logging: DATABASE_LOGGING,
}

const config: ConnectionOptions[] = [
  {
    ...baseConfig,
    entities: [`${__dirname}/entity/*{.ts,.js}`],
    migrations: [`${__dirname}/migration/*{.ts,.js}`],
    cli: {
      entitiesDir: `entity`,
      migrationsDir: `migration`,
    },
  },
  {
    ...baseConfig,
    name: 'seed',
    entities: [`${__dirname}/entity/*{.ts,.js}`],
    migrations: [`${__dirname}/migration/*{.ts,.js}`],
    cli: {
      migrationsDir: 'seeds',
    },
  },
]

// module.exports is need in migration-cli
module.exports = config

// Normal default export for usage in code
export default config
