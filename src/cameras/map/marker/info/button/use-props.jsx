import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { useNavigation } from 'detections/table/hooks/use-navigation'

export const useProps = cameraId => ({
  variant: 'contained',
  color: 'secondary',
  endIcon: <ArrowRightAltIcon />,
  onClick: useNavigation(`/detections?cameraId=${cameraId}`),
})
