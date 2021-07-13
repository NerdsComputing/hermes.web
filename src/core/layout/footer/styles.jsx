import { makeStyles } from '@material-ui/core'

const position = theme => ({
  bottom: theme.spacing(0),
  position: 'absolute',
  width: '100%',
})

export const useStyles = makeStyles(theme => ({
  title: { color: 'white' },
  footer: {
    backgroundColor: theme.palette.primary.main,
    ...position(theme),
    minHeight: '5vh',
  },
}))
