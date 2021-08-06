import { makeStyles } from '@material-ui/core'

const drawerWidth = 240
const drawer = theme => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
})
const appBar = theme => ({
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
})
const menuButton = theme => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: { display: 'none' },
  color: 'white',
})
const content = theme => ({
  flexGrow: 1,
  padding: theme.spacing(3),
})
export const useStyles = makeStyles(theme => ({
  root: { display: 'flex' },
  drawer: { ...drawer(theme) },
  appBar: { ...appBar(theme) },
  menuButton: { ...menuButton(theme) },
  toolbar: theme.mixins.toolbar,
  content: { ...content(theme) },
}))
