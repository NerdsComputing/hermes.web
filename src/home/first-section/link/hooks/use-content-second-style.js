import { makeStyles } from '@material-ui/core'

import { contentStyle } from 'home/first-section/link/content-style'

export const useContentSecondStyle = makeStyles(theme => ({
  root: {
    ...contentStyle,
    marginBottom: '20px',
    color: theme.palette.primary.main,
  },
}))
