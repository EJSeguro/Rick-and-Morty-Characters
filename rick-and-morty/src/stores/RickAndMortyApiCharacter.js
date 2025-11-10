import axios from 'axios'
import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useRickAndMortyApiCharacterStore = defineStore('rickAndMortyApiCharacter', () => {
 
    const characters = ref([])
    const currentPage = ref(1)
    const totalPages = ref(0)

    const fetchCharacters = async (page = currentPage.value) => {
      await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => {
        characters.value = response.data.results
        totalPages.value = response.data.info.pages
        currentPage.value = page
      })}
  return { characters, fetchCharacters, currentPage, totalPages }
})
