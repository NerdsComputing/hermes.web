import { makeStyles } from '@material-ui/core'

const root = theme => ({
  width: '358px',
  height: '330px',
  backgroundColor: theme.palette.white.main,
  padding: '32px',
})

export const useMobileStyles = makeStyles(theme => ({ root: root(theme) }))
