import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.error.main,
    cursor: 'pointer',
    '&:hover': { color: theme.palette.error.dark },
  },
}))
