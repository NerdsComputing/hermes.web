import { makeStyles } from '@material-ui/core'

const root = variant => ({ opacity: variant })

export const useOpacity = variant => makeStyles({ root: root(variant) })
