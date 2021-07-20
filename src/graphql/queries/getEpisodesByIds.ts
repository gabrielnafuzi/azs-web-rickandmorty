import { gql } from 'graphql-request'

export const GET_EPISODES_BY_IDS = gql`
  query GET_EPISODES_BY_IDS($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`
