import type { Exercise } from "../types/exercise"

export async function fetchExercises(): Promise<Exercise[]> {
  
  if (Math.random() < 0.3) {
    throw new Error("Failed to load exercises")
  }  
  const data: Exercise[] = [
    { id: 1, name: "Squats" },
    { id: 2, name: "Bench Press" },
    { id: 3, name: "Deadlift" }
  ]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Failed to load exercises"))
      } else {
        resolve(data)
      }

    }, 2000)
  })
}

// export async function addExercise(name: string) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         id: Date.now(),
//         name
//       })
//     }, 500)
//   })
// }

// export async function deleteExercise(id: number) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(id)
//     }, 500)
//   })
// }

// export async function updateExercise(id: number, name: string) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id, name })
//     }, 500)
//   })
// }

export async function addExercise(name: string) {
  return { id: Date.now(), name }
}

export async function deleteExercise(id: number) {
  return id
}

export async function updateExercise(id: number, name: string) {
  return { id, name }
}