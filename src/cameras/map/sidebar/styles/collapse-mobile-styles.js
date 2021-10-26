import { makeStyles } from '@material-ui/core'

const root = {
  height: '83px',
  width: 'calc(100% - 32px)',
  position: 'absolute',
  backgroundColor: 'white',
  marginBottom: 16,
  top: 56,
  left: 16,
}

export const useCollapseMobileStyles = makeStyles({ root })
