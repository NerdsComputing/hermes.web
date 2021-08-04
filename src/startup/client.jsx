import { ApolloClient, InMemoryCache } from '@apollo/client'

import { settings } from 'settings'

export const client = () => new ApolloClient({
  uri: settings().url,
  cache: new InMemoryCache(),
})
