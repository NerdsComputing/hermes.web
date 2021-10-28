import { makeStyles } from '@material-ui/core'

const root = theme => ({
  cursor: 'pointer',
  color: theme.palette.secondary.main,
  display: 'inline',
})

export const useTextStyles = makeStyles(theme => ({ root: root(theme) }))
