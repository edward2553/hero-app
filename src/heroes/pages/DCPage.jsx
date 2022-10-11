import React from 'react'
import { publishers } from '../../consts'
import { HeroList } from '../components/HeroList'

export const DCPage = () => {
  return (
    <>
      <h1>DCPage</h1>
      <hr />
      <HeroList publisher={publishers[1]} />
    </>

  )
}
