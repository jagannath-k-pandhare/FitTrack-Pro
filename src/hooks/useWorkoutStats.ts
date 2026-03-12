import { useWorkouts } from "./useWorkouts"

export function useWorkoutStats() {

  const { workouts } = useWorkouts()

  const totalWorkouts = workouts.length

  const totalVolume = workouts.reduce((sum, w) => {
    return sum + w.sets * w.reps * w.weight
  }, 0)

  const personalRecord = workouts.reduce((max, w) => {
    return w.weight > max ? w.weight : max
  }, 0)

  return {
    totalWorkouts,
    totalVolume,
    personalRecord
  }
}