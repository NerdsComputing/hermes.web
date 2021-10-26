import { makeStyles } from '@material-ui/core'

const text = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: 'calc(100% - 13px)',
  margin: 'auto 0',
}

const title = {
  fontWeight: 'bold',
  display: 'inline',
  marginRight: 5,
}

const coordinate = { display: 'inline' }

export const useStyles = makeStyles({ text, title, coordinate })
