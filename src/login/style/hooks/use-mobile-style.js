import { makeStyles } from '@material-ui/core'

const buttonstyle = {
  borderRadius: '40px',
  marginRight: '15px',
  backgroundColor: '#FFFF',
}

const root = {
  width: '100%',
  height: '3vh',
  ...buttonstyle,
}

export const useMobileStyles = makeStyles({ root })
