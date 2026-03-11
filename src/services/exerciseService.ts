import type { Exercise } from "../types/exercise"

let exercises: Exercise[] = [
  { id: 1, name: "Squats" },
  { id: 2, name: "Bench Press" },
  { id: 3, name: "Deadlift" }
]

export async function fetchExercises(): Promise<Exercise[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...exercises])
    }, 500)
  })
}

export async function addExercise(name: string): Promise<Exercise> {
  const newExercise = { id: Date.now(), name }
  exercises.push(newExercise)
  return newExercise
}

export async function deleteExercise(id: number): Promise<number> {
  exercises = exercises.filter(e => e.id !== id)
  return id
}

export async function updateExercise(id: number, name: string): Promise<Exercise> {
  exercises = exercises.map(e =>
    e.id === id ? { ...e, name } : e
  )
  return { id, name }
}