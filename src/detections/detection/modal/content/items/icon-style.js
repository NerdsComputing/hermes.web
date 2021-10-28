import { makeStyles } from '@material-ui/core'

const root = theme => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
})

export const useIconStyle = makeStyles(theme => ({ root: root(theme) }))
