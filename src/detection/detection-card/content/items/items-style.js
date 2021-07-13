import { makeStyles } from '@material-ui/core'

const contentItem = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px 0 10px 0',
}

const contentText = { marginLeft: 5 }

export const useStyles = makeStyles({
  contentItem,
  contentText,
})
