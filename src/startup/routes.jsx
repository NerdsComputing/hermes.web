import { Home } from 'home'
import { Version } from 'version'

export const routes = [{
  path: '/status/version',
  Component: Version,
},
{
  path: '/',
  Component: Home,
}]
