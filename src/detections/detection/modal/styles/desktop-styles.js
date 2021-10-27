import { makeStyles } from '@material-ui/core'

const root = theme => ({
  width: '600px',
  height: '351px',
  backgroundColor: theme.palette.white.main,
  padding: '32px',
})

export const useDesktopStyles = makeStyles(theme => ({ root: root(theme) }))
