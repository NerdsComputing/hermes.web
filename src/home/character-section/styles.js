import { makeStyles } from '@material-ui/core'
import { theme } from 'theme'

const right = {
  float: 'right',
  borderRight: `5px solid ${theme.palette.secondary.main}`,
}

const left = {
  float: 'left',
  borderLeft: `5px solid ${theme.palette.secondary.main}`,
}

export const useStyles = makeStyles({ right, left })
