import { HomePage } from 'home'
import { DetectionPage } from 'detection'
import { About } from 'about'
import { Admin } from 'admin'
import { Detections } from 'detections'

export const routes = [{

  path: '/detections',
  Component: Detections,
},
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
