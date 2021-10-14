import React from 'react'
import { Box, Button, Grid } from '@material-ui/core'

import { useNavigation } from 'home/first-section/live/hooks/use-navigation'
import Arrow from 'home/first-section/live/buttons/arrow_right_alt_black_24dp.svg'
import { useStyles } from 'home/first-section/live/buttons/style'
import { useCamerasStyle } from 'home/first-section/live/buttons/hooks/use-cameras-style'

export const SeeCameras = () => <Grid item>
  <Box py={1}>
    <Button variant={'contained'} onClick={useNavigation('/cameras')} classes={useCamerasStyle()}>
      See Cameras
      <img src={Arrow} alt={'link'} className={useStyles().image} />
    </Button>
  </Box>
</Grid>
