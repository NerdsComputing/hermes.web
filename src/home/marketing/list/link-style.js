import { makeStyles } from '@material-ui/core'

const root = {
  filter: 'invert(55%) sepia(83%) saturate(351%) hue-rotate(111deg) brightness(86%) contrast(87%)',
  height: '17px',
  marginBottom: '-3px',
  paddingLeft: '5px',
}

export const useLinkStyle = makeStyles({ root })
