import { HomePage } from 'home'
import { DetectionPage } from 'detection'
import { About } from 'about'
import { Admin } from 'admin'

export const routes = [{
  path: '/detection/:id',
  Component: DetectionPage,
},
{

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
}]
