import { makeStyles } from '@material-ui/core'

import { contentStyle } from 'home/first-section/link/content-style'

export const useContentFirstStyle = makeStyles(theme => ({
  root: {
    ...contentStyle,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
}))
