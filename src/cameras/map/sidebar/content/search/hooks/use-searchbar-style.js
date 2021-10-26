import { makeStyles } from '@material-ui/core'

const root = theme => ({
  margin: '5% 0 5% 0',
  border: `1px solid ${theme.palette.white.main}`,
  borderRadius: 4,
})

export const useSearchbarStyle = makeStyles(theme => ({ root: root(theme) }))
