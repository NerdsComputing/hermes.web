import { makeStyles } from '@material-ui/core'
import { commonStyle } from 'detection/card/common-style'

const root = { width: '70vw', ...commonStyle }

export const useDesktopStyle = makeStyles({ root })
