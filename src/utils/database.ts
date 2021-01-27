import { getConnection, createConnection } from "typeorm"
import { Registration } from "../saleorApp/entities/Registration.entity"

let connectionCreated = false

export async function getOrCreateConnection() {
  // Seems that typeorm is not handling properly database connection and devserver reloading
  // If server reloaded, we are forcing it to close old connection and open new one
  try {
    const currentConnection = await getConnection()
    if (connectionCreated) {
      return currentConnection
    }
    await currentConnection.close()
  } catch (e) {
    // ignore connection error
  }
  connectionCreated = true
  return await createConnection({
    name: "default",
    type: "sqlite",
    database: "dev.db",
    entities: [Registration],
    synchronize: true,
    logging: false,
  })
}
