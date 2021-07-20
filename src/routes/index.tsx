import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Episode } from '@/pages/Episode'
import { Favorites } from '@/pages/Favorites'

import { GoToFavoritesButton } from '@/components/molecules/GoToFavoritesButton'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/episodes/:episodeId" component={Episode} />
      <Route path="/favorites" component={Favorites} />

      <GoToFavoritesButton />
    </BrowserRouter>
  )
}
