const sizeProps = {
  width: 467,
  height: 548,
}

const buildBorders = theme => `5px solid ${theme.palette.secondary.main}`

const border = {
  left: theme => ({ borderLeft: buildBorders(theme) }),
  right: theme => ({ borderRight: buildBorders(theme) }),
}

export const useStyleForVariant = variant => theme => ({
  root: {
    ...border[variant](theme),
    background: `${theme.palette.tertiary.main} 0% 0% no-repeat padding-box`,
    float: variant,
    ...sizeProps,
  },
})
