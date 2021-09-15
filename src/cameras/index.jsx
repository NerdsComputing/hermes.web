import React from 'react'
import { Grid } from '@material-ui/core'

import { Content } from 'cameras/content'
import { useDefaultContext, Context } from 'cameras/context'
import { Sidebar } from 'cameras/sidebar'

export const Cameras = () => <Context.Provider value={useDefaultContext()}>
  <Grid container>
    <Sidebar />
    <Content />
  </Grid>
</Context.Provider>

