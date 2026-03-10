type Exercise = {
  id: number
  name: string
}

export async function fetchExercises(): Promise<Exercise[]> {

  const data: Exercise[] = [
    { id: 1, name: "Squats" },
    { id: 2, name: "Bench Press" },
    { id: 3, name: "Deadlift" }
  ]

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
}