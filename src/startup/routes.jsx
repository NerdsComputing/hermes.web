import { HomePage } from 'home'
import { DetectionPage } from 'detection'
import { About } from 'about'
import { Admin } from 'admin'
import { Detections } from 'detections'
import { Cameras } from 'cameras'

export const routes = [{

  path: '/detections',
  Component: Detections,
},
{
  path: '/detection/:id',
  component: DetectionPage,
},
{
  path: '/cameras',
  component: Cameras,
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
