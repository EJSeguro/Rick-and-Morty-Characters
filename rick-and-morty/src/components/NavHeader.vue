<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


</script>
<template>
    <nav class="nav-header">
        <h1 class="nav-title">Rick and Morty</h1>
        <ul class="nav-links">
            <li>
                <RouterLink to="/">Início</RouterLink>
            </li>
            <li>
                <RouterLink to="/characters">Personagens</RouterLink>
            </li>
            <li>
                <RouterLink to="/favorites">Favoritos</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style>
.nav-links li a.router-link-exact-active {
    color: #35e35e;
    font-weight: bold;
}

.nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    background-color: #282c34;
    color: white;
}

.nav-title {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    color: white;
    list-style: none;
    display: flex;
    justify-content: end;
    gap: 1rem;
}

.nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
}
</style>
