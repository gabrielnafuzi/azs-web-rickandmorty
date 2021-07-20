import React from 'react'

import { Routes } from '@/routes'
import { GlobalStyles } from '@/styles/GlobalStyle'
import { EpisodesProvider } from '@/hooks/episodes'
import { FavoritesProvider } from '@/hooks/favorites'
import { ViewedsProvider } from '@/hooks/viewed'

const App = () => {
  return (
    <>
      <EpisodesProvider>
        <FavoritesProvider>
          <ViewedsProvider>
            <Routes />
          </ViewedsProvider>
        </FavoritesProvider>
      </EpisodesProvider>

      <GlobalStyles />
    </>
  )
}

export default App
