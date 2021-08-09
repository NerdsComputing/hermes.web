import { makeStyles } from '@material-ui/core'

const position = ({ width: '100%' })

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    ...position,
    minHeight: '5vh',
  },
}))
