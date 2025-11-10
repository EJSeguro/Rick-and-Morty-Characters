<script setup>
import { onMounted } from 'vue'
import { useRickAndMortyApiCharacterStore } from '../stores/RickAndMortyApiCharacter.js'

const charactersStore = useRickAndMortyApiCharacterStore()

onMounted(() => {
    charactersStore.fetchCharacters()
})

const nextPage = () => {
    charactersStore.fetchCharacters(charactersStore.currentPage + 1)
}

const previousPage = () => {
    charactersStore.fetchCharacters(charactersStore.currentPage - 1)
}

const episodes = (character) => {
    return character.episode.map(url => url.split('/').pop())
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
                        <img :src="character.image" alt="character.name"></img>
                        <h3>{{ character.name }}</h3>
                        <p>{{ character.status }}</p>
                        <p>{{ character.species }}</p>
                        <p>{{ character.gender }}</p>
                        <p>{{ character.origin.name }}</p>
                        <p>{{ character.location.name }}</p>
                </li>
            </ul>
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