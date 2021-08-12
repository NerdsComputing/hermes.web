import { HomePage } from 'home'
import { DetectionPage } from 'detection'
import { About } from 'about'
import { Admin } from 'admin'
import { Detections } from 'detections'
import { Cameras } from 'cameras'
import { PageNotFound } from 'page-not-found'

export const routes = [{

  path: '/detections',
  component: Detections,
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
  component: Admin,
},
{

  path: '/about',
  component: About,
},
{
  path: '/',
  component: HomePage,
},
{
  path: '/pageNotFound',
  component: PageNotFound,
}]
