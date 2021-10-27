import { makeStyles } from '@material-ui/core'

const root = theme => ({
  backgroundColor: theme.palette.white.main,
  color: theme.palette.secondary.main,
})

export const useStyles = makeStyles(theme => ({ root: root(theme) }))
