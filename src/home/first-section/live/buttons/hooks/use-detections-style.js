import { makeStyles } from '@material-ui/core'

import { buttonStyle } from 'home/first-section/live/buttons/button-style'

export const useDetectionsStyle = makeStyles(theme => ({
  root: {
    ...buttonStyle,
    background: theme.palette.secondary.main,
    '&:hover': { background: theme.palette.secondary.main },
  },
}))
