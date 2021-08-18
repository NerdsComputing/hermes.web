import React from 'react'
import * as Material from '@material-ui/core'

import { Content } from 'cameras/content'
import { useDefaultContext, Context } from 'cameras/context'
import { Sidebar } from 'cameras/sidebar'

export const Cameras = () => <Context.Provider value={useDefaultContext()}>
  <Material.Grid container>
    <Sidebar />
    <Content />
  </Material.Grid>
</Context.Provider>

