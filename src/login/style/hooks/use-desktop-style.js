import { makeStyles } from '@material-ui/core'

const buttonstyle = {
  borderRadius: '40px',
  marginRight: '15px',
  backgroundColor: '#FFFF',
}

const root = {
  width: '8vw',
  height: '3vh',
  ...buttonstyle,
}

export const useDesktopStyles = makeStyles({ root })
