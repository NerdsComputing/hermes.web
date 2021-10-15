import { makeStyles } from '@material-ui/core'

import { contentStyle } from 'home/heading-section/link/content-style'

export const useContentStyle = makeStyles({
  root: {
    ...contentStyle,
    marginBottom: '20px',
  },
})
