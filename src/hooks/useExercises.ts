import { useState, useEffect } from "react"
import { fetchExercises } from "../services/exerciseService"

type Exercise = {
  id: number
  name: string
}

export function useExercises() {

  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const loadExercises = async () => {
      const data = await fetchExercises()
      setExercises(data)
      setLoading(false)
    }

    loadExercises()cl

  }, [])

  return { exercises, setExercises, loading }
}