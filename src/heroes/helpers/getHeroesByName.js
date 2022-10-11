import heroes from "../../mocks/heroes";

export const getHeroesByName = (name = "") => {
  name = name.toLocaleLowerCase().trim();
  if (name.length === 0) return [];

  return heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(name));
};
