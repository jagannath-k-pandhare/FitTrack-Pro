import { fetchExercises } from "../services/exerciseService"

useEffect(() => {

  const loadExercises = async () => {

    const data = await fetchExercises()
    setExercises(data)
    setLoading(false)

  }

  loadExercises()

}, [])