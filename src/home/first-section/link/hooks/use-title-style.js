import { makeStyles } from '@material-ui/core'

const titleStyle = {
  paddingTop: '12vh',
  fontSize: '24px',
  fontWeight: 'bold',
}

export const useTitleStyle = makeStyles(theme => ({
  root: {
    ...titleStyle,
    color: theme.palette.primary.main,
  },
}))
