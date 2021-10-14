import { makeStyles } from '@material-ui/core'

import { theme } from 'theme'

const description = {
  fontSize: '16px',
  color: theme.palette.primary.main,
}

export const useStyle = makeStyles({ description })
