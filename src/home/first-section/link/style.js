import { makeStyles } from '@material-ui/core'
import { theme } from 'theme'

const title = {
  paddingTop: '12vh',
  fontSize: '24px',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}
const contentFirst = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  whiteSpace: 'nowrap',
  display: 'inline',
  marginBottom: '20px',
}
const contentSecond = {
  fontSize: '16px',
  color: theme.palette.primary.main,
  whiteSpace: 'nowrap',
  display: 'inline',
  marginBottom: '20px',
}

export const useStyle = makeStyles({ title, contentFirst, contentSecond })
