import { gql } from "@apollo/client"
import { webhookErrorFragment, webhookFragment } from "../fragments/webhook"

export const createWebhook = gql`
  mutation CreateWebhook(
    $name: String!
    $targetUrl: String!
    $events: [WebhookEventTypeEnum!]!
    $secretKey: String!
  ) {
    webhookCreate(
      input: {
        name: $name
        targetUrl: $targetUrl
        events: $events
        isActive: true
        secretKey: $secretKey
      }
    ) {
      webhook {
        ...WebhookFragment
      }
      webhookErrors {
        ...WebhookErrorFragment
      }
    }
  }
  ${webhookErrorFragment}
  ${webhookFragment}
`
