import { makeStyles } from '@material-ui/core'

const root = theme => ({
  width: 460,
  backgroundColor: theme.palette.secondary.main,
  marginTop: 15,
})

export const useMobileStyles = makeStyles(theme => ({ root: root(theme) }))
