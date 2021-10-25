import { makeStyles } from '@material-ui/core'

const sizeProps = {
  width: 467,
  height: 548,
}

const buildBorders = theme => `5px solid ${theme.palette.secondary.main}`

export const useStyles = makeStyles(theme => ({
  root: {
    borderLeft: buildBorders(theme),
    background: `${theme.palette.tertiary.main} 0% 0% no-repeat padding-box`,
    ...sizeProps,
  },
}))
