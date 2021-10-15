import { makeStyles } from '@material-ui/core'

import { contentStyle } from 'home/first-section/link/content-style'

export const useTitleStyle = makeStyles({
  root: {
    ...contentStyle,
    fontWeight: 'bold',
  },
})
