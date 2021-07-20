import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
  useCallback
} from 'react'

import Cookies from 'js-cookie'

type ViewedsContextData = {
  vieweds: number[]
  addViewed: (viewedId: number) => void
  removeViewed: (viewedId: number) => void
}

type ViewedsProviderProps = {
  children: ReactNode
}

const cookieName = '@azs-rickandmorty:vieweds'

export const ViewedsContext = createContext({} as ViewedsContextData)

const ViewedsProvider = ({ children }: ViewedsProviderProps) => {
  const [vieweds, setVieweds] = useState<number[]>([])

  useEffect(() => {
    const viewedsInStorage = Cookies.getJSON(cookieName)

    setVieweds(viewedsInStorage || [])
  }, [])

  const addViewed = useCallback(
    (viewedId: number) => {
      const viewedIdAlreadyExists = vieweds.find(viewed => viewed === viewedId)

      if (viewedIdAlreadyExists) return

      const newVieweds = [...vieweds, viewedId]

      setVieweds(newVieweds)

      Cookies.set(cookieName, JSON.stringify(newVieweds))
    },
    [vieweds]
  )

  const removeViewed = useCallback(
    (viewedId: number) => {
      const newVieweds = vieweds.filter(viewed => viewed !== viewedId)

      setVieweds(newVieweds)

      Cookies.set(cookieName, JSON.stringify(newVieweds))
    },
    [vieweds]
  )

  return (
    <ViewedsContext.Provider value={{ vieweds, addViewed, removeViewed }}>
      {children}
    </ViewedsContext.Provider>
  )
}

const useVieweds = () => {
  const context = useContext(ViewedsContext)

  return context
}

export { useVieweds, ViewedsProvider }
