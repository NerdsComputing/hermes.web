import { HomePage } from 'home'
import { About } from 'about'
import { User } from 'user'
import { Admin } from 'admin'

export const routes = [{

  path: '/about',
  Component: About,
},
{
  path: '/admin',
  Component: Admin,
},
{
  path: '/',
  Component: HomePage,
}, {
  path: '/user',
  Component: User,
}]

