import { gql } from '@apollo/client'

export const GET_CAMERAS = gql`
   query($parameter: CameraParameter!) {
    cameras(parameter: $parameter) {
        totalCount
        pageIndex
        pageSize
        items {
            id
            latitude
            longitude
        }
    }
}`
