<script setup>
import { useFavoritesCharactersStore } from '@/stores/FavoritesCharacters.js'
import { onMounted, ref } from 'vue'
import CharacterCard from '@/components/Charactercard.vue'
import CharacterModal from '@/components/CharacterModal.vue'

const favoritesStore = useFavoritesCharactersStore()
const showModal = ref(false)

const selectedCharacter = ref(null)

const openModal = (character) => {
  selectedCharacter.value = character
  showModal.value = true
}

onMounted(() => {
  favoritesStore.favorites
})

</script>

<template>
  <section class="characters-container">
    <h2>Favoritos</h2>
    <p>Veja os personagens que você marcou como favoritos.</p>

    <ul class="grid-container">
      <li v-for="character in favoritesStore.favorites" :key="character.id" class="character">
        <CharacterCard :character="character" @click="openModal(character)" @select="selectedCharacter = $event" />
      </li>
    </ul>
    <CharacterModal v-model="showModal" :character="selectedCharacter" />
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
