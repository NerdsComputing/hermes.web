import { gql } from '@apollo/client'

export const GET_ALL_DETECTIONS = gql`
      query ($parameter: DetectionParameter!) {
   detections(parameter: $parameter){
    pageIndex
    pageSize
    totalCount
    items{
      id
      score
      class
      timestamp
      camera {
        id
        latitude
        longitude
      }
    }
  }
}`
