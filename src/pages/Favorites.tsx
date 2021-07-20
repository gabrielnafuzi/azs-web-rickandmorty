import React, { useEffect } from 'react'

import { FavoritesTemplate } from '@/components/templates/FavoritesTemplate'

import { useFavorites } from '@/hooks/favorites'

export const Favorites = () => {
  const { favorites, getFavoritesWithData } = useFavorites()

  const getFavorites = async () => {
    getFavoritesWithData()
  }

  useEffect(() => {
    getFavorites()
  }, [favorites])

  return <FavoritesTemplate />
}
