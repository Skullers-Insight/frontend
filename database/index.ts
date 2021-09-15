import { createConnection, Connection, ConnectionOptions } from 'typeorm'
import ormConfig from './ormconfig'

let connection: Connection | undefined

export function connectDatabase(options?: Partial<ConnectionOptions>) {
  // @ts-ignore -  Merging of same type causes error due to
  // potentially changing database connection type
  const connectionOption: ConnectionOptions = {
    ...ormConfig[0],
    ...options,
  }

  return createConnection(connectionOption)
    .then(c => {
      connection = c
      return connection
    })
    .catch(error => {
      throw error
    })
}

export async function disconnectDatabase() {
  if (!connection) {
    throw new Error("Connection doesn't exist")
  }

  return connection.close()
}
