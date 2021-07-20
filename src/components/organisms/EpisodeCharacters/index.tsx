import React from 'react'

import { useEpisodes } from '@/hooks/episodes'

import { BaseCard } from '@/components/molecules/BaseCard'
import { CardsGrid } from '@/components/bosons/CardsGrid'
import { Spinner } from '@/components/atoms/Spinner'

import * as S from './styles'

export const EpisodeCharacters = () => {
  const { episode, isSingleLoading } = useEpisodes()

  if (isSingleLoading) return <Spinner />

  return (
    <S.Container>
      <h2>Personagens que aparecem nesse episódio:</h2>

      <S.CharactersWrapper>
        <CardsGrid>
          {episode?.characters?.map(character => (
            <BaseCard imgSrc={character.image} key={character.id}>
              <S.CharacterInfo status={character.status}>
                <h3>{character.name}</h3>

                <ul>
                  <li>
                    Status:
                    <span className="status"> {character.status}</span>
                  </li>

                  <li>
                    Espécie:
                    <span>{character.species}</span>
                  </li>
                </ul>
              </S.CharacterInfo>
            </BaseCard>
          ))}
        </CardsGrid>
      </S.CharactersWrapper>
    </S.Container>
  )
}
