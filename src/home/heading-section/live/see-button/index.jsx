import React from 'react'
import PropTypes from 'prop-types'

import { Box, Button, Grid } from '@material-ui/core'
import { useNavigation } from 'home/heading-section/live/hooks/use-navigation'
import Arrow from 'home/heading-section/live/see-button/arrow_right_alt_black_24dp.svg'
import { useStyles } from 'home/heading-section/live/see-button/style'
import { useButtonStyle } from 'home/heading-section/live/see-button/hooks/use-button-style'

export const SeeButton = ({ path, name }) => <Grid item>
  <Box py={1}>
    <Button variant={'contained'} onClick={useNavigation(path)} classes={useButtonStyle(path)}>
      {name}
      <img src={Arrow} alt={'link'} className={useStyles().image} />
    </Button>
  </Box>
</Grid>

SeeButton.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
