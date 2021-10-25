import { makeStyles } from '@material-ui/core'

const root = {
  width: 500,
  height: 'calc(100% - 64px)',
  position: 'absolute',
  backgroundColor: 'white',
  top: 32,
  left: 32,
}

export const useDesktopStyles = makeStyles({ root })
