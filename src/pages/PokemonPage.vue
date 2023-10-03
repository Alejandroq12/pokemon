<template>
  <h1>Who is this Pokemon?</h1>
  <PokemonPicture :pokemonId="9" :showPokemon="true"/>
  <PokemonOptions />
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions';

console.log(getPokemonOptions());
export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>

<style></style>
