import { makeStyles } from '@material-ui/core'

const root = theme => ({
  width: '80%',
  color: theme.palette.white.main,
})

export const useStyles = makeStyles(theme => ({ root: root(theme) }))
