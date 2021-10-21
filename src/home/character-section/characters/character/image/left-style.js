import { makeStyles } from '@material-ui/core'

const root = theme => ({
  width: 467,
  height: 548,
  float: 'left',
  borderRight: `5px solid ${theme.palette.secondary.main}`,
  background: '#E4E7EB 0% 0% no-repeat padding-box',
})

export const useLeftStyle = makeStyles(theme => ({ root: root(theme) }))
