import { getPokemons } from '@/helpers/getPokemonOptions';

describe('getPokemonOptions helpers', () => {
  test('Should return an array of numbers', () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[500]).toBe(501);
    expect(pokemons[649]).toBe(650);
  });
});
