import { makeStyles } from '@material-ui/core'

const position = theme => ({
  position: 'static',
  width: '100vw',
  bottom: theme.spacing(0),
})

export const useStyles = makeStyles(theme => ({
  title: { color: 'white' },
  footer: {
    backgroundColor: theme.palette.primary.main,
    ...position(theme),
    minHeight: '5vh',
  },
}))
