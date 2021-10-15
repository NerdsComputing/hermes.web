import { makeStyles } from '@material-ui/core'

import { buttonStyle } from 'home/heading-section/live/see-button/button-style'

export const useDetectionsStyle = makeStyles(theme => ({
  root: {
    ...buttonStyle,
    background: theme.palette.secondary.main,
    '&:hover': { background: theme.palette.secondary.main },
  },
}))
