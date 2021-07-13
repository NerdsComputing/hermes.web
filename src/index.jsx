import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client'

import { App } from 'app'

ApolloClient({
  uri: 'https://hermes.api.dev.k8s.nerds.sh/',
  cache: new InMemoryCache(),
})

ReactDOM.render(<React.StrictMode>
  <App />
</React.StrictMode>, document.getElementById('root'))
