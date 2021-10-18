import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

import { useContentStyle } from 'home/heading-section/description/hooks/use-content-style'
import { useWrapperStyle } from 'home/heading-section/description/hooks/use-wrapper-style'
import { useStyle } from 'home/heading-section/description/style'

const content = `Hermes is a microservice that offers fast deployments of AI characters. 
Each character can be an independent service with its own dashboard, database and 
graphql endpoint or it can connect to our global network.`

export const Description = () => <Box classes={useWrapperStyle()}>
  <Grid item classes={useContentStyle()}>
    <Typography variant={'p'} color={'primary'} classes={useStyle()}>
      {content}
    </Typography>
  </Grid>
</Box>
