import React, { createContext, ReactNode, useState, useContext } from 'react'

import { client } from '@/graphql/client'
import { GET_EPISODES, GET_EPISODE_BY_ID } from '@/graphql/queries'

import type { Episode, Info } from '@/types'

type EpisodesContextData = {
  episodes: Episode[]
  paginationInfo: Info
  episode: Episode
  getEpisodes: (payload?: GetEpisodeParams) => Promise<void>
  getEpisodeById: (id: number) => Promise<void>
  isLoading: boolean
  isSingleLoading: boolean
  currentPage: number
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

type GetEpisodeParams = {
  page?: number
  name?: string
}

type GetEpisodeByIdResponse = {
  episode: Episode
}

export const EpisodesContext = createContext({} as EpisodesContextData)

const EpisodesProvider = ({ children }: EpisodesProviderProps) => {
  const [episodes, setEpisodes] = useState([] as Episode[])
  const [paginationInfo, setPaginationInfo] = useState({} as Info)
  const [episode, setEpisode] = useState({} as Episode)
  const [isLoading, setIsLoading] = useState(true)
  const [isSingleLoading, setIsSingleLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const getEpisodes = async ({
    name = '',
    page = currentPage
  }: GetEpisodeParams = {}) => {
    try {
      setIsLoading(true)

      const { episodes } = await client.request<GetEpisodesResponse>(
        GET_EPISODES,
        {
          page,
          name
        }
      )

      setEpisodes(episodes.results)
      setPaginationInfo(episodes.info)
      setCurrentPage(page)
    } catch (e) {
      setEpisodes([])

      throw new Error(e)
    } finally {
      setIsLoading(false)
    }
  }

  const getEpisodeById = async (episodeId: number) => {
    try {
      setIsSingleLoading(true)
      setEpisode({} as Episode)

      const { episode } = await client.request<GetEpisodeByIdResponse>(
        GET_EPISODE_BY_ID,
        {
          id: episodeId
        }
      )

      setEpisode(episode)
    } catch (e) {
      setEpisode({} as Episode)

      throw new Error(e)
    } finally {
      setIsSingleLoading(false)
    }
  }

  return (
    <EpisodesContext.Provider
      value={{
        episodes,
        paginationInfo,
        episode,
        getEpisodes,
        getEpisodeById,
        isLoading,
        isSingleLoading,
        currentPage
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
