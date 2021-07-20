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
  vieweds: Array<string | number>
  addViewed: (viewedId: string | number) => void
  removeViewed: (viewedId: string | number) => void
}

type ViewedsProviderProps = {
  children: ReactNode
}

const cookieName = '@azs-rickandmorty:vieweds'

export const ViewedsContext = createContext({} as ViewedsContextData)

const ViewedsProvider = ({ children }: ViewedsProviderProps) => {
  const [vieweds, setVieweds] = useState<Array<string | number>>([])

  useEffect(() => {
    const viewedsInStorage = Cookies.getJSON(cookieName)

    setVieweds(viewedsInStorage || [])
  }, [])

  const addViewed = useCallback(
    (viewedId: string | number) => {
      const viewedIdAlreadyExists = vieweds.find(viewed => viewed === viewedId)

      if (viewedIdAlreadyExists) return

      const newVieweds = [...vieweds, viewedId]

      setVieweds(newVieweds)

      Cookies.set(cookieName, JSON.stringify(newVieweds))
    },
    [vieweds]
  )

  const removeViewed = useCallback(
    (viewedId: string | number) => {
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
