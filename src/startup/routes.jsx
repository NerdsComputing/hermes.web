import { HomePage } from 'home'
import { DetectionPage } from 'detection'
import { About } from 'about'
import { Admin } from 'admin'

export const routes = [
  {
    path: '/detection/:id',
    component: DetectionPage,
  },
  {
    path: '/admin',
    Component: Admin,
  },
  {

    path: '/about',
    component: About,
  },
  {
    path: '/',
    component: HomePage,
  }]
