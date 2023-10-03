<template>
  <h1 v-if="!pokemon">Please, wait...</h1>
  <div v-else>
    <h1>Who is this Pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
    <div>
      <h2 class="fade-in">{{ message }}</h2>
      <button>Play again</button>
    </div>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (selectedId === this.pokemon.id) {
        this.message = `Correct! This is ${this.pokemon.name}`;
      } else {
        this.message = `Wrong! This is ${this.pokemon.name}`;
      }
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style></style>
