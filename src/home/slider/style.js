import { makeStyles } from '@material-ui/core'

const description = {
  fontSize: '2.5vw',
  paddingTop: '0.5vh',
}

const card = {
  borderRadius: 5,
  margin: 'auto',
  width: '65vw',
  boxShadow: '1.5vh 1.5vh 1.5vh black',
  display: 'flex',
  justifyContent: 'center',
}

export const useStyle = makeStyles(() => ({ card, description }))
