import { makeStyles } from '@material-ui/core'

const paper = {
  width: '19.5vw',
  paddingTop: '1vh',
  paddingBottom: '1vh',
  textAlign: 'center',
  fontSize: '1vw',
  backgroundColor: 'transparent',
  boxShadow: 'none',
}

const grid = { marginBottom: '20vh' }

export const useStyle = makeStyles(() => ({ paper, grid }))
