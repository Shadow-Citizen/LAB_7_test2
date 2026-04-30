<script setup lang="ts">
import { useWorkoutStore } from '@/stores/useWorkoutStore'
import WorkoutCard from '@/components/WorkoutCard.vue'

const store = useWorkoutStore()
</script>

<template>
  <section>
    <h2>Тренування</h2>

    <div v-for="w in store.sortedWorkouts" :key="w.id">
      <WorkoutCard :workout="w" />
    </div>
  </section>
  <footer>
    Калорії: {{ store.totalCalories }} |  Час: {{ store.totalDuration }}
  </footer>
</template> 