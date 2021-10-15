import { makeStyles } from '@material-ui/core'

import { contentStyle } from 'home/heading-section/link/content-style'

export const useTitleStyle = makeStyles({
  root: {
    ...contentStyle,
    fontWeight: 'bold',
  },
})
