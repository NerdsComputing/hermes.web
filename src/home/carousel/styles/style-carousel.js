import { makeStyles } from '@material-ui/core'

const description = {
  paddingTop: '20px',
  marginTop: '20px',
  fontSize: 25,
}

const card = {
  borderRadius: 5,
  margin: '0px 25px',
  width: '800px',
  height: '500px',
  boxShadow: '10px 10px 10px black',
  display: 'flex',
  justifyContent: 'center',
}

export const useStyle = makeStyles(() => ({ card, description }))
