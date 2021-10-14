import { makeStyles } from '@material-ui/core'
import { theme } from 'theme'

const root = {
  marginRight: '24px',
  textTransform: 'capitalize',
  background: theme.palette.secondary.main,
  color: 'white',
  '&:hover': { background: theme.palette.secondary.main },
}

export const useDetectionsStyle = makeStyles({ root })
