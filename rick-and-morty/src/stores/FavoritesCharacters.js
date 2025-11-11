import { defineStore } from 'pinia'

export const useFavoritesCharactersStore = defineStore('favoritesCharacters', {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
  }),
  actions: {
    toggleFavorite(character) {
      const exists = this.favorites.find(c => c.id === character.id)
      if (exists) {
        this.favorites = this.favorites.filter(c => c.id !== character.id)
      } else {
        this.favorites.push(character)
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    isFavorite(id) {
      return this.favorites.some(c => c.id === id)
    }
  }
})
