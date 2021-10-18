import { makeStyles } from '@material-ui/core'

const titleStyle = {
  paddingTop: '12vh',
  fontSize: '24px',
  fontWeight: 'bold',
}

export const useTitleStyle = makeStyles({ root: { ...titleStyle } })
