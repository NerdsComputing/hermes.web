import { makeStyles } from '@material-ui/core'

const markerStyle = {
  border: '5px solid #f44336',
  borderRadius: 20,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
}
const markerPosition = {
  position: 'absolute',
  width: 50,
  height: 20,
  left: -20 / 2,
  top: -20 / 2,
  ...markerStyle,
}
const grid = {
  height: '80vh',
  width: '100%',
}
export const useStyles = makeStyles({ markerPosition, grid })
