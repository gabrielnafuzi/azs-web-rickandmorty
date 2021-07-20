import React from 'react'

import { Routes } from '@/routes'
import { GlobalStyles } from '@/styles/GlobalStyle'
import { EpisodesProvider } from '@/hooks/episodes'
import { FavoritesProvider } from '@/hooks/favorites'

const App = () => {
  return (
    <>
      <EpisodesProvider>
        <FavoritesProvider>
          <Routes />
        </FavoritesProvider>
      </EpisodesProvider>

      <GlobalStyles />
    </>
  )
}

export default App
