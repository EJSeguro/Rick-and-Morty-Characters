<script setup>
import { onUnmounted, watch } from 'vue'

const props = defineProps({
    character: Object,
    modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
    emit('update:modelValue', false)
}

watch(() => props.modelValue, (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
})

onUnmounted(() => {
    document.body.style.overflow = ''
})

</script>

<template>
    <div v-if="modelValue" class="modal-overlay" @click.self="close">
        <div class="modal-content">
            <h2>{{ character.name }}</h2>
            <img :src="character.image" :alt="character.name" />
            <p>Status: {{ character.status }}</p>
            <p>Espécie: {{ character.species }}</p>
            <p>Gênero: {{ character.gender }}</p>
            <p>Origem: {{ character.origin.name }}</p>
            <p>Localização: {{ character.location.name }}</p>
            <p>Episódios: {{ character.episode.length }}</p>
            <button @click="close">Fechar</button>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 5vh;
    z-index: 1000;
}

.modal-content {
    color: black;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.episodes-scroll {
    max-height: 20%;
    overflow-y: auto;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 6px;
}
</style>
