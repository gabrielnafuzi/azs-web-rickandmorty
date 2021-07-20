import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
  useCallback
} from 'react'

import Cookies from 'js-cookie'

type FavoritesContextData = {
  favorites: number[]
  addFavorite: (favoriteId: number) => void
  removeFavorite: (favoriteId: number) => void
}

type FavoritesProviderProps = {
  children: ReactNode
}

const cookieName = '@azs-rickandmorty:favorites'

export const FavoritesContext = createContext({} as FavoritesContextData)

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const favoritesInStorage = Cookies.getJSON(cookieName)

    setFavorites(favoritesInStorage || [])
  }, [])

  const addFavorite = useCallback(
    (favoriteId: number) => {
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
    (favoriteId: number) => {
      const newFavorites = favorites.filter(favorite => favorite !== favoriteId)

      setFavorites(newFavorites)

      Cookies.set(cookieName, JSON.stringify(newFavorites))
    },
    [favorites]
  )

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

const useFavorites = () => {
  const context = useContext(FavoritesContext)

  return context
}

export { useFavorites, FavoritesProvider }
