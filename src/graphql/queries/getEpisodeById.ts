import { gql } from 'graphql-request'

export const GET_EPISODE_BY_ID = gql`
  query GET_EPISODE_BY_ID($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        image
        name
        species
        status
      }
    }
  }
`
