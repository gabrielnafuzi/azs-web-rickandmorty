import React from 'react'

import { Routes } from '@/routes'
import { GlobalStyles } from '@/styles/GlobalStyle'
import { EpisodesProvider } from '@/hooks/episodes'

const App = () => {
  return (
    <>
      <EpisodesProvider>
        <Routes />
      </EpisodesProvider>

      <GlobalStyles />
    </>
  )
}

export default App
