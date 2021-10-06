import { bool, number, string } from 'prop-types'

export const Item = {
  id: string,
  longitude: number,
  latitude: number,
  show: bool,
  detections: number,
}
