import { IncomingMessage, ServerResponse } from "http"
import { useMemo } from "react"
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client"

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createIsomorphLink(_context: ResolverContext = {}) {
  const { HttpLink } = require("@apollo/client"); // eslint-disable-line
  return new HttpLink({
    uri: "http://localhost:8000/graphql/",
  })
}

function createApolloClient(context?: ResolverContext) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphLink(context),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext
): ApolloClient<NormalizedCacheObject> {
  const localApolloClient = apolloClient ?? createApolloClient(context)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    localApolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return localApolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = localApolloClient

  return localApolloClient
}

export function getApolloClient(ctx) {
  return initializeApollo(null, ctx)
}

export function useApollo(initialState: any): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
