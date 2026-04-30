<script setup lang="ts">
import type { Workout } from '@/types'

defineProps<{ workout: Workout }>()
</script>

<template>
  <div class="card">
    <h3>{{ workout.type }}</h3>
    <p>Тривалість: {{ workout.duration }} хв</p>
    <p>Калорії: {{ workout.calories }}</p>
    <p>Тренер: {{ workout.trainer }}</p>
  </div>
</template>