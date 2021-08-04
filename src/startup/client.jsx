import { ApolloClient, InMemoryCache } from '@apollo/client'

import { settings } from 'settings'

export const Client = () => new ApolloClient({
  uri: settings().url,
  cache: new InMemoryCache(),
})
