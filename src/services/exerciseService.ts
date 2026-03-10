type Exercise = {
  id: number
  name: string
}

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