import { gql } from "@apollo/client"

export const webhookFragment = gql`
  fragment WebhookFragment on Webhook {
    id
    isActive
  }
`
export const webhookErrorFragment = gql`
  fragment WebhookErrorFragment on WebhookError {
    field
    code
  }
`
