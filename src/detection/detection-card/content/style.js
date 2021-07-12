import { makeStyles } from '@material-ui/core'

const contentRoot = {
  width: '100%',
  height: '60%',
  padding: 0,
}

const contentGrid = {
  width: '100%',
  height: '100%',
}

const contentBox = {
  width: '60%',
  height: '60%',
  padding: 15,
  border: '5px solid black',
}

const contentItem = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px 0 10px 0',
}

const contentText = { marginLeft: 5 }

export const useStyles = makeStyles({
  contentRoot,
  contentGrid,
  contentBox,
  contentItem,
  contentText,
})
