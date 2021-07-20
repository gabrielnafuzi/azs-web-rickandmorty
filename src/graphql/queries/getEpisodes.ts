import { gql } from 'graphql-request'

export const GET_EPISODES = gql`
  query GET_EPISODES($name: String!, $page: Int) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
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
  }
`
