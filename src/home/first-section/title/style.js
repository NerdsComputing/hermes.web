import { makeStyles } from '@material-ui/core'

import { theme } from 'theme'

const head = {
  margin: '80px 0 0 0',
  fontSize: '64px',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}

export const useStyle = makeStyles({ head })
