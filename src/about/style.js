import { makeStyles } from '@material-ui/core'

const root = {
  margin: '0 auto',
  maxWidth: '1700px',
}
const title = {
  textAlign: 'center',
  marginBottom: '6%',
  color: '#89CFF0',
}
const name = { color: '#89CFF0' }
const img = {
  maxWidth: '30vw',
  maxHeight: '30vh',
  paddingBottom: 64,
}
const text = {
  fontStyle: 'italic',
  lineHeight: 1.7,
}
export const useStyles = makeStyles(() => ({
  root,
  title,
  img,
  text,
  name,
}))
