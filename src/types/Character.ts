export type Status = 'alive' | 'dead' | 'unknown'

export type Character = {
  id: string
  name: string
  status: Status
  species: string
  image: string
}
