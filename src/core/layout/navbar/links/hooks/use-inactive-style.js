import { makeStyles } from '@material-ui/core'
import { theme } from 'theme'

const root = {
  color: theme.palette.primary.main,
  paddingLeft: '5px',
  cursor: 'pointer',
  fontSize: 24,
}
export const useInactiveStyle = makeStyles({ root })
