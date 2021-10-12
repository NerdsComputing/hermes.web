import { makeStyles } from '@material-ui/core'

import { theme } from 'theme'

const root = {
  color: theme.palette.secondary.main,
  paddingLeft: '5px',
  cursor: 'pointer',
  fontSize: 24,
}
export const useActiveStyle = makeStyles({ root })
