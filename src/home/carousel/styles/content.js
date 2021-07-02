import { makeStyles } from '@material-ui/core'

const div = {
  textAlign: 'center',
  padding: '100px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
}
const head = {
  textAlign: 'center',
  padding: '50px',
  justifyContent: 'center',
}
export const useStyle = makeStyles(() => ({
  div,
  head,
}))
