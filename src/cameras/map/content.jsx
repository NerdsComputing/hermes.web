import React from 'react'

import { Wrapper } from 'cameras/map/wrapper'
import { ShowMap } from 'cameras/map/show-map'
import { Sidebar } from 'cameras/map/sidebar'

export const Content = () => <Wrapper>
  <ShowMap />
  <Sidebar />
</Wrapper>
