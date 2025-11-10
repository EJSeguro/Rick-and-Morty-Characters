<script setup>
const props = defineProps({
  character: Object
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', props.character)
}

</script>

<template>
    <div class="character-card">
        <img :src="props.character.image" alt="character.name">
        <div class="character-info">
            <h3>{{ props.character.name }}</h3>
            <p>{{ props.character.status }}</p>
            <p>{{ props.character.species }}</p>
            <p>{{ props.character.gender }}</p>
            <button @click="handleClick">Ver mais informações</button>
        </div>
    </div>

</template>

<style scoped>
.character-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

.character-card img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 0.5rem;
}

.character-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.character-info h3 {
    color: var(--color-verde);
    font-weight: bolder;
}

.character-info p {
    font-size: 0.9rem;
    color: #555;
}

button {
    background-color: var(--color-verde);
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: var(--color-verde-escuro);
}
</style>