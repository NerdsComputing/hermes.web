import { makeStyles } from '@material-ui/core'

const root = { marginLeft: '16px' }
const addMargin = { marginLeft: '100px' }
const align = {
  justifyContent: 'center',
  marginTop: '150px',
}

export const useStyles = makeStyles(() => ({
  root,
  align,
  addMargin,
}))
