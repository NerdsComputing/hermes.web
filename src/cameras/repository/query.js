import { gql } from '@apollo/client'

export const GET_ALL_CAMERAS = gql`
   query($parameter: TPCamera!) {
  cameras(parameter: $parameter){
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
