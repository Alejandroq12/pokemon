import { getPokemons } from '@/helpers/getPokemonOptions';

describe('getPokemonOptions helpers', () => {
  test('Should return an array of numbers', () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
  });
});
