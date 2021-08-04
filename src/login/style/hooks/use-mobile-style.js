import { makeStyles } from '@material-ui/core'

const buttonstyle = {
  borderRadius: '40px',
  marginRight: '15px',
  backgroundColor: '#FFFF',
}

const root = {
  width: '29vw',
  height: '4vh',
  ...buttonstyle,
}

export const useMobileStyles = makeStyles({ root })
