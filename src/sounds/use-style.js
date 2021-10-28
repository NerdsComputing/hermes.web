import { makeStyles } from '@material-ui/core'

const root = {
  width: '25vw',
  marginLeft: '200px',
}

const text = { marginTop: '80px' }

export const useStyle = makeStyles(() => ({
  root,
  text,
}))
