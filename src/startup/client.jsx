import { ApolloClient, InMemoryCache } from '@apollo/client'

import { settings } from 'settings'

export const client = () => new ApolloClient({
  uri: settings().apiUrl,
  cache: new InMemoryCache(),
})
