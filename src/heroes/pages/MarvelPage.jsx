import React from 'react'
import { publishers } from '../../consts'
import { HeroList } from '../components'

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Page</h1>
      <hr />
      <HeroList publisher={publishers[0]} />
    </>
  )
}
