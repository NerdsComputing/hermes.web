import { makeStyles } from '@material-ui/core'

const root = {
  width: '100%',
  backgroundColor: '#F5F7FA',
  minHeight: '72px',
  opacity: '1',
}
const content = {
  color: 'black',
  font: 'normal normal normal 16px/19px Roboto',
}

const image = {
  filter: 'invert(55%) sepia(83%) saturate(351%) hue-rotate(111deg) brightness(86%) contrast(87%)',
  height: '17px',
  marginBottom: '-3px',
}

export const useStyles = makeStyles({ root, content, image })
