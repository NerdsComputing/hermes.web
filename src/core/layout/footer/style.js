import { makeStyles } from '@material-ui/core'

const position = theme => ({
  bottom: theme.spacing(0),
  position: 'absolute',
  width: '100%',
})

export const useStyles = makeStyles(theme => ({
  content: { color: 'white' },
  root: {
    backgroundColor: theme.palette.primary.main,
    ...position(theme),
    minHeight: '5vh',
  },
}))
