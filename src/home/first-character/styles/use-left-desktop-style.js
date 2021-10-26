import { makeStyles } from '@material-ui/core'

import { commonStyle } from 'home/first-character/styles/style'

const root = {
  ...commonStyle,
  marginLeft: '250px',
}

export const useLeftDesktopStyle = makeStyles({ root })
