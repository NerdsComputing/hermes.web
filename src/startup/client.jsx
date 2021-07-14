import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://hermes.api.dev.k8s.nerds.sh/',
    cache: new InMemoryCache(),
})

