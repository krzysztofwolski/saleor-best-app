import { UpdateResult } from "typeorm"
import { verifyToken } from "../graphql/data/mutations/auth"
import { VerifyTokenMutation } from "../graphql/generated/graphql"
import { initializeApollo } from "../graphql/withApollo"
import { getOrCreateConnection } from "../utils/database"
import { Registration } from "./entities/Registration.entity"

export async function verifyRequestToken(requestToken: string): Promise<boolean> {
  const client = initializeApollo()
  const validationResponse = await client.mutate<VerifyTokenMutation>({
    mutation: verifyToken,
    variables: { token: requestToken },
  })
  return validationResponse.data?.tokenVerify?.isValid || false
}

export async function getRegistrationForDomain(domain: string): Promise<Registration | undefined> {
  const db = await getOrCreateConnection()
  const registrationRepo = await db.getRepository<Registration>(Registration)
  return await registrationRepo.findOne({
    domain,
  })
}

export async function updateRegistration(registration: Registration): Promise<UpdateResult> {
  const db = await getOrCreateConnection()
  const registrationRepo = await db.getRepository<Registration>(Registration)
  return await registrationRepo.update({ domain: registration.domain }, registration)
}
