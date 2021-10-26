import { makeStyles } from '@material-ui/core'

const root = {
  font: 'Roboto Mono',
  textAlign: 'left',
  letterSpacing: '0px',
  opacity: '1',
  color: '#52606C',
  marginLeft: '30px',
}

const align = {
  justifyContent: 'left',
  marginTop: '150px',
}

export const useMobileStyle = makeStyles({ 
  root,
  align,
})
