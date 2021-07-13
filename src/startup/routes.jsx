import { HomePage } from 'home'
import { About } from 'about'
import { Admin } from 'admin'

export const routes = [{

  path: '/about',
  Component: About,
},
{
  path: '/',
  Component: HomePage,
},
{
  path: '/admin',
  Component: Admin,
}]
