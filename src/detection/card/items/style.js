import { makeStyles } from '@material-ui/core'

const root = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px 0 10px 0',
}

const contentText = { marginLeft: 5 }

const linkProps = {
  marginLeft: 5,
  cursor: 'pointer',
  color: '#3f51b4',
}

export const useStyles = makeStyles({
  root,
  contentText,
  linkProps,
})
