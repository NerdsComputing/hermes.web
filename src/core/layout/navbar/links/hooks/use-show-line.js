import { makeStyles } from '@material-ui/core'

import { theme } from 'theme'

const root = {
  borderBottom: `2px solid ${theme.palette.secondary.main}`,
  paddingBottom: 16,
}

export const useShowLine = makeStyles({ root })
