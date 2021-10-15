import { makeStyles } from '@material-ui/core'

import { buttonStyle } from 'home/first-section/live/buttons/button-style'

export const useCamerasStyle = makeStyles(theme => ({
  root: {
    ...buttonStyle,
    background: theme.palette.primary.dark,
    '&:hover': { background: theme.palette.primary.dark },
  },
}))
