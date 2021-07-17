import { makeStyles } from '@material-ui/core'
import { commonStyle } from 'detection/card/common-style'

const root = { width: '90vw', ...commonStyle }

export const useMobileStyle = makeStyles({ root })
