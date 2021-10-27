import { makeStyles } from '@material-ui/core'

const root = theme => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
})

export const useStyles = makeStyles(theme => ({ root: root(theme) }))
