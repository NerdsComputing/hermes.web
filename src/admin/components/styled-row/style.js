import { makeStyles } from '@material-ui/core'

const style = theme => ({ '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover } })

export const useStyles = makeStyles(theme => ({ root: { ...style(theme) } }))
