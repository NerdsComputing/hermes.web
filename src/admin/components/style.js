import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: { '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover } },
}))
