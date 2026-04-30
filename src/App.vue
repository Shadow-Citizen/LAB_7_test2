<script setup lang="ts">
import { useWorkoutStore } from '@/stores/useWorkoutStore'

const store = useWorkoutStore()
</script>

<template>
  <header>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600&display=swap" rel="stylesheet">
    <h1>Спортивний клуб Energy</h1>
  </header>

<nav aria-label="Основна навігація">
  <ul>
    <li>
      <RouterLink to="/">Головна</RouterLink>
    </li>
    <li>
      <RouterLink to="/schedule">Розклад</RouterLink>
    </li>
    <li>
      <RouterLink to="/workouts">Тренування</RouterLink>
    </li>
    <li>
      <RouterLink to="/profile">Профіль</RouterLink>
    </li>
  </ul>
</nav>
<div class="content-wrapper">
<aside>
        <h2>Вітаємо у Energy! </h2>
        <p>Використовуйте навігацію для перегляду розділів.</p>
        <ul class="side-menu">
            <li>Акції місяця</li>
            <li>Записатись на візит</li>
            <li>Блог про здоров'я</li>
        </ul>
</aside>

  <main>
    <RouterView />
  </main>
</div>

  
</template>