import { makeStyles } from '@material-ui/core'

import { contentStyle } from 'home/first-section/link/content-style'

export const useContentStyle = makeStyles({
  root: {
    ...contentStyle,
    marginBottom: '20px',
  },
})
