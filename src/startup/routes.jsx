import { HomePage } from 'home'
import { About } from 'about'
import { UserPage } from 'user'

export const routes = [{

  path: '/about',
  Component: About,
},
{
  path: '/user',
  Component: UserPage,
},
{
  path: '/',
  Component: HomePage,
}]
