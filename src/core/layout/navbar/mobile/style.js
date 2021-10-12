import { makeStyles } from '@material-ui/core'

const drawerWidth = 240
const drawer = theme => ({
  [theme.breakpoints.up('md')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
})
const appBar = theme => ({
  [theme.breakpoints.up('md')]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
})
const menuButton = theme => ({
  marginTop: 25,
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: { display: 'none' },
  color: 'black',
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
