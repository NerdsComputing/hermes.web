import { makeStyles } from '@material-ui/core'

const root = theme => ({
  fontWeight: 'bold',
  color: theme.palette.white.main,
})

export const useStyles = makeStyles(theme => ({ root: root(theme) }))
