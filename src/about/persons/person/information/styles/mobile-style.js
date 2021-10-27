import { makeStyles } from '@material-ui/core'

const root = theme => ({
  width: '400px',
  backgroundColor: theme.palette.secondary.main,
  marginTop: '15px',
})

export const useMobileStyles = makeStyles(theme => ({ root: root(theme) }))
