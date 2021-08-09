import { makeStyles } from '@material-ui/core'

const title = {
  fontSize: '2.8vw',
  paddingTop: '2vw',
  textAlign: 'center',
  justifyContent: 'center',
}

const floatImage = { float: 'left', paddingRight: '15px', paddingBottom: '10px' }

const display = { display: 'block' }

const box = { marginRight: '10px', paddingLeft: '10px' }

export const useStyles = makeStyles({ title, floatImage, display, box })
