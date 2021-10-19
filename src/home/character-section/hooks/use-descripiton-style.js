import { makeStyles } from '@material-ui/core'

const desktop = ({ width: '26vw' })

const phone = ({ width: '100%' })

const style = theme => ({
  root: {
    [theme.breakpoints.up('xs')]: { ...desktop },
    [theme.breakpoints.down('xs')]: { ...phone },
  },
})

export const useDescriptionStyle = makeStyles(theme => style(theme))
