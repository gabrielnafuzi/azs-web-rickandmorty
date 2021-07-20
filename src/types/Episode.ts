import type { Character } from './Character'

export type Episode = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: Character[]
}
