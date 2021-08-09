import { makeStyles } from '@material-ui/core'

const position = theme => ({
  width: '100%',
})

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    ...position(theme),
    minHeight: '5vh',
    height: '5vh',
  },
}))
