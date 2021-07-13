import { makeStyles } from '@material-ui/core'

const desktopScreen = {
  width: '50vw',
  height: '60vh',
  borderRadius: '50px',
}

const mobileScreen = {
  width: '90vw',
  height: '60vh',
  borderRadius: '50px',
}

export const useStyles = makeStyles({ desktopScreen, mobileScreen })
