import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  root: {
    width: '600px',
    backgroundColor: theme.palette.background.paper,
  },
  title: { margin: '15px' },
}))
