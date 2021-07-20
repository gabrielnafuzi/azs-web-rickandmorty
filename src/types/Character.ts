export type Status = 'alive' | 'dead' | 'unknown'

export type Character = {
  id: string | number
  name: string
  status: Status
  species: string
  image: string
}
