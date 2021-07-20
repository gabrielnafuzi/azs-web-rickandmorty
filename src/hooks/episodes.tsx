import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext
} from 'react'

import { client } from '@/graphql/client'
import type { Episode, Info } from '@/types'
import { GET_EPISODES } from '@/graphql/queries'

type EpisodesContextData = {
  episodes: Episode[]
  getEpisodes: (name?: string) => Promise<void>
  isLoading: boolean
}

type EpisodesProviderProps = {
  children: ReactNode
}

type GetEpisodesResponse = {
  episodes: {
    info: Info
    results: Episode[]
  }
}

export const EpisodesContext = createContext({} as EpisodesContextData)

const EpisodesProvider = ({ children }: EpisodesProviderProps) => {
  const [episodes, setEpisodes] = useState([] as Episode[])
  const [isLoading, setIsLoading] = useState(true)

  const getEpisodes = async (name = '') => {
    try {
      setIsLoading(true)

      const { episodes } = await client.request<GetEpisodesResponse>(
        GET_EPISODES,
        {
          name
        }
      )

      setEpisodes(episodes.results)
    } catch (e) {
      throw new Error(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getEpisodes()
  }, [])

  return (
    <EpisodesContext.Provider
      value={{
        episodes,
        getEpisodes,
        isLoading
      }}>
      {children}
    </EpisodesContext.Provider>
  )
}

const useEpisodes = () => {
  const context = useContext(EpisodesContext)

  return context
}

export { useEpisodes, EpisodesProvider }
