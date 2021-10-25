import { makeStyles } from '@material-ui/core'

const root = {
  width: 'calc(100% - 32px)',
  height: '500px',
  position: 'absolute',
  backgroundColor: 'white',
  top: 56,
  left: 16,
}

export const useExpandedMobileStyles = makeStyles({ root })
