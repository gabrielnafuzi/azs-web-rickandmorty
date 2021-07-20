import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { GoToFavoritesButton } from '@/components/molecules/GoToFavoritesButton'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/episodes/:episodeId" exact={true} component={Home} />

      <GoToFavoritesButton />
    </BrowserRouter>
  )
}
