import { makeStyles } from '@material-ui/core'
import { theme } from 'theme'

const root = {
  marginRight: '24px',
  textTransform: 'capitalize',
  background: theme.palette.primary.dark,
  color: 'white',
  '&:hover': { background: theme.palette.primary.dark },
}

export const useCamerasStyle = makeStyles({ root })
