import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from '@/pages/Home'
import Episode from '@/pages/Episode'

import { GoToFavoritesButton } from '@/components/molecules/GoToFavoritesButton'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/episodes/:episodeId" component={Episode} />

      <GoToFavoritesButton />
    </BrowserRouter>
  )
}
