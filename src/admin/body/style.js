import { makeStyles } from '@material-ui/core'

const root = {
  maxHeight: '80vh',
  overflow: 'auto',
}
const alignment = {
  justify: 'center',
  alignContent: 'center',
}
export const useStyles = makeStyles(() => ({
  root,
  alignment,
}))
