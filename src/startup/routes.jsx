import { HomePage } from 'home'
import { DetectionPage } from 'detection'
import { About } from 'about'

export const routes = [
  {
    path: '/detection/:id',
    component: DetectionPage,
  },
  {

  path: '/about',
  component: About,
},
{
  path: '/admin',
  Component: Admin,
},
{
  path: '/',
  component: HomePage,
}]
