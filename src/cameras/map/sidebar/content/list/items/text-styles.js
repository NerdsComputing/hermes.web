import { makeStyles } from '@material-ui/core'

const root = theme => ({ color: theme.palette.primary.main })

export const useTextStyles = makeStyles(theme => ({ root: root(theme) }))
