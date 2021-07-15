import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.error.main,
    color: theme.palette.background.paper,
    '&:hover': { backgroundColor: theme.palette.error.dark },
  },
}))
