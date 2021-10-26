import { makeStyles } from '@material-ui/core'

import { commonStyle } from 'home/first-character/styles/style'

const root = {
  ...commonStyle,
  marginLeft: '400px',
}

export const useLeftTabletStyle = makeStyles({ root })
