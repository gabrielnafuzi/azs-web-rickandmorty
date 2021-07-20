import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
  useCallback
} from 'react'
import Cookies from 'js-cookie'

import { client } from '@/graphql/client'
import { GET_EPISODES_BY_IDS } from '@/graphql/queries/getEpisodesByIds'

import type { Episode } from '@/types'

type GetEpisodesByIdsResponse = {
  episodesByIds: Episode[]
}

type FavoritesContextData = {
  favorites: Array<string | number>
  favoritesWithData: Episode[]
  isLoading: boolean
  getFavoritesWithData: () => Promise<void>
  addFavorite: (favoriteId: number | string) => void
  removeFavorite: (favoriteId: number | string) => void
}

type FavoritesProviderProps = {
  children: ReactNode
}

const cookieName = '@azs-rickandmorty:favorites'

export const FavoritesContext = createContext({} as FavoritesContextData)

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Array<string | number>>([])
  const [favoritesWithData, setFavoritesWithData] = useState([] as Episode[])
  const [isLoading, setIsLoading] = useState(true)

  const getFavoritesWithData = useCallback(async () => {
    try {
      setIsLoading(true)
      const favoritesInStorage = Cookies.getJSON(cookieName)

      const { episodesByIds } = await client.request<GetEpisodesByIdsResponse>(
        GET_EPISODES_BY_IDS,
        {
          ids: favoritesInStorage
        }
      )

      setFavoritesWithData(episodesByIds)
    } catch (e) {
      throw new Error(e)
    } finally {
      setIsLoading(false)
    }
  }, [favorites])

  useEffect(() => {
    const favoritesInStorage = Cookies.getJSON(cookieName)

    setFavorites(favoritesInStorage || [])
  }, [])

  const addFavorite = useCallback(
    (favoriteId: number | string) => {
      const favoriteIdAlreadyExists = favorites.find(
        favorite => favorite === favoriteId
      )

      if (favoriteIdAlreadyExists) return

      const newFavorites = [...favorites, favoriteId]

      setFavorites(newFavorites)

      Cookies.set(cookieName, JSON.stringify(newFavorites))
    },
    [favorites]
  )

  const removeFavorite = useCallback(
    (favoriteId: number | string) => {
      const newFavorites = favorites.filter(favorite => favorite !== favoriteId)

      setFavorites(newFavorites)

      Cookies.set(cookieName, JSON.stringify(newFavorites))
    },
    [favorites]
  )

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        favoritesWithData,
        getFavoritesWithData,
        isLoading
      }}>
      {children}
    </FavoritesContext.Provider>
  )
}

const useFavorites = () => {
  const context = useContext(FavoritesContext)

  return context
}

export { useFavorites, FavoritesProvider }
