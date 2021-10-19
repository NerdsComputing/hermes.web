import { makeStyles } from '@material-ui/core'

const desktop = ({
  position: 'absolute',
  marginLeft: '250px',
  marginTop: '180px',
})

const tablet = ({
  position: 'absolute',
  marginLeft: '400px',
  marginTop: '180px',
})

const phone = ({ marginTop: '600px' })

const common = ({ width: '50%' })

const style = theme => ({
  root: {
    ...common,
    [theme.breakpoints.up('md')]: { ...desktop },
    [theme.breakpoints.between('sm', 'md')]: { ...tablet },
    [theme.breakpoints.down('xs')]: { ...phone },
  },
})

export const useLeftStyle = makeStyles(theme => style(theme))
