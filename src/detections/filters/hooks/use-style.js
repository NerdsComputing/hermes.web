import { makeStyles } from '@material-ui/core'

import { buttonStyle } from 'detections/filters/button-style'

export const useStyle = makeStyles(theme => ({
  root: {
    ...buttonStyle,
    background: theme.palette.secondary.main,
    '&:hover': { background: theme.palette.secondary.main },
  },
  changeColor: { fill: '#FFFF' },
}))
