import heroes from "../../mocks/heroes"

export const getHeroesByID = (id) => {
    return heroes.find(hero => hero.id === id)
}