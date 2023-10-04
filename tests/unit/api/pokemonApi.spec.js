import pokemonApi from '../../../src/api/pokemonApi';

describe('pokemonApi', () => {
  test('Axios should must be configured with the Pokemon Api', () => {
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
  });
});
