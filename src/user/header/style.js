import { makeStyles } from '@material-ui/core'

const title = {
  textAlign: 'center',
  fontSize: '2vw',
  backgroundColor: 'transparent',
  boxShadow: 'none',
}

const subtitles = {
  width: '19vw',
  paddingTop: '1vh',
  paddingBottom: '1vh',
  textAlign: 'center',
  fontSize: '1vw',
}

export const useStyle = makeStyles(() => ({ title, subtitles }))
