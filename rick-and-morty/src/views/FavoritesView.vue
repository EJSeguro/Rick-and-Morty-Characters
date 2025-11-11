<script setup>
import { useFavoritesCharactersStore } from '@/stores/FavoritesCharacters.js'

import CharacterCard from '@/components/Charactercard.vue'

const favoritesStore = useFavoritesCharactersStore()
</script>

<template>
  <section class="characters-container">
    <h2>Favoritos</h2>
    <p>Veja os personagens que você marcou como favoritos.</p>

    <ul class="grid-container">
      <li v-for="character in favoritesStore.favorites" :key="character.id" class="character">
        <CharacterCard :character="character" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.characters-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
}

.characters-container h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.characters-container p {
    font-size: 1.2rem;
    color: #555;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    padding: 2rem;
}

li {
    list-style: none;
}
</style>
