import { makeStyles } from '@material-ui/core'

const head = {
  margin: '80px 0 0 0',
  fontSize: '64px',
  fontWeight: 'bold',
}

export const useStyle = makeStyles(theme => ({
  root: {
    ...head,
    color: theme.palette.primary.main,
  },
}))
