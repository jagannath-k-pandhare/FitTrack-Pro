import { useState, useEffect } from "react"
import { fetchExercises } from "../services/exerciseService"

type Exercise = {
  id: number
  name: string
}

export function useExercises() {

  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    const loadExercises = async () => {
      try {
          const data = await fetchExercises()
          setExercises(data)
        } catch (err: any) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
    }

    loadExercises()
  }, [])
   // return { exercises, setExercises, loading }
  return { exercises, setExercises, loading, error }
}