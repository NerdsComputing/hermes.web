import { makeStyles } from '@material-ui/core'

const root = theme => ({
  fontWeight: 'bold',
  color: theme.palette.white.main,
  width: '80%',
})

export const useStyles = makeStyles(theme => ({ root: root(theme) }))
