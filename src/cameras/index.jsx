import React from 'react'
import * as Material from '@material-ui/core'

import { Sidebar } from 'cameras/sidebar'
import { Content } from 'cameras/content'
import { useDefaultContext, Context } from 'cameras/context'

export const Cameras = () => <Context.Provider value={useDefaultContext()}>
  <Material.Grid container>
    <Sidebar />
    <Content />
  </Material.Grid>
</Context.Provider>

