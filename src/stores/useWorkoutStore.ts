import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Workout } from '@/types'

export const useWorkoutStore = defineStore('workout', () => {
  const workouts = ref<Workout[]>([
    { id: 1, type: 'Силове', duration: 60, calories: 500, date: '2026-04-01', trainer: 'Іваненко' },
    { id: 2, type: 'Кардіо', duration: 45, calories: 400, date: '2026-04-02', trainer: 'Петренко' },
    { id: 3, type: 'Йога', duration: 50, calories: 200, date: '2026-04-03', trainer: 'Сидоренко' },
    { id: 4, type: 'Кросфіт', duration: 70, calories: 650, date: '2026-04-04', trainer: 'Коваленко' },
    { id: 5, type: 'Фітнес', duration: 55, calories: 350, date: '2026-04-05', trainer: 'Іваненко' },
    { id: 6, type: 'Stretching', duration: 40, calories: 150, date: '2026-04-06', trainer: 'Петренко' }
  ])

  const sortedWorkouts = computed(() => {
    return [...workouts.value].sort((a, b) => b.calories - a.calories)
  })
  const totalCalories = computed(() =>
    workouts.value.reduce((sum, w) => sum + w.calories, 0)
  )

  const totalDuration = computed(() =>
    workouts.value.reduce((sum, w) => sum + w.duration, 0)
  )

  const addWorkout = (workout: Workout) => {
    workouts.value.push(workout)
  }

  return { workouts, sortedWorkouts, totalCalories, totalDuration, addWorkout }
})