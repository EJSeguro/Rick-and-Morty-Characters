<script setup>
import { onMounted, ref } from 'vue'
import { useRickAndMortyApiCharacterStore } from '../stores/RickAndMortyApiCharacter.js'
import CharacterCard from '../components/Charactercard.vue'
import CharacterModal from '../components/CharacterModal.vue'

const charactersStore = useRickAndMortyApiCharacterStore()
const showModal = ref(false)
const selectedCharacter = ref(null)

onMounted(() => {
    charactersStore.fetchCharacters()
})

const nextPage = () => {
    charactersStore.fetchCharacters(charactersStore.currentPage + 1)
}

const previousPage = () => {
    charactersStore.fetchCharacters(charactersStore.currentPage - 1)
}

const openModal = (character) => {
    selectedCharacter.value = character
    showModal.value = true
}

</script>

<template>
    <section class="characters-container">
        <div>
            <h2>Personagens de Rick and Morty</h2>
            <p>Explore a lista completa de personagens da série.</p>
        </div>
        <main>
            <ul class="grid-container">
                <li v-for="character in charactersStore.characters" :key="character.id" class="character">
                    <CharacterCard :character="character" @click="openModal(character)" @select="selectedCharacter = $event"/>
                </li>
            </ul>
            <CharacterModal v-model="showModal" :character="selectedCharacter" />

            <div class="pagination">
                <button @click="previousPage">Anterior</button>
                <span>{{ charactersStore.currentPage }} de {{ charactersStore.totalPages }}</span>
                <button @click="nextPage">Próxima</button>
            </div>
        </main>
    </section>


</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    padding: 2rem;
}

.character {
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 1rem;
    transition: transform 0.2s ease;
    list-style: none;
    height: auto;
}

.character h3 {
    color: var(--color-verde);
    font-weight: bolder;
}

.character:hover {
    transform: scale(1.03);
}

.character img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 0.5rem;
}

.pagination {
    display: flex;
    justify-content: space-between;
    width: 400px;

}

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
</style>