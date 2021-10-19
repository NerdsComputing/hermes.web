import { makeStyles } from '@material-ui/core'

const desktop = ({ width: '26vw' })

const phone = ({ width: '100%' })

const common = ({
  fontSize: '29px',
  fontWeight: 'bold',
})

const style = theme => ({
  root: {
    ...common,
    [theme.breakpoints.up('xs')]: { ...desktop },
    [theme.breakpoints.down('xs')]: { ...phone },
  },
})

export const useCharacterTitleStyle = makeStyles(theme => style(theme))
