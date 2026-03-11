import { useExercises } from "../hooks/useExercises"
import { useState } from "react"
import ExerciseItem from "./ExerciseItem"
import ExerciseInput from "./ExerciseInput"

function ExerciseList() {

  const { exercises, loading, error, addExercise, deleteExercise, updateExercise } = useExercises()

  const [newExercise, setNewExercise] = useState("")

  const handleAdd = () => {
    if (!newExercise.trim()) return

    addExercise(newExercise)
    setNewExercise("")
  }

  const handleRemove = (id: number) => {
    deleteExercise(id)
  }

  const handleUpdate = (id: number, name: string) => {
    updateExercise({ id, name })
  }

  if (loading) {
    return <p className="p-6">Loading exercises...</p>
  }

  if (error) {
    return <p className="p-6 text-red-500">Failed to load exercises</p>
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Exercises
      </h2>

      <ExerciseInput
        value={newExercise}
        onChange={setNewExercise}
        onAdd={handleAdd}
      />

      <ul className="space-y-3">
        {exercises.map((exercise) => (
          <ExerciseItem
            key={exercise.id}
            id={exercise.id}
            name={exercise.name}
            onRemove={handleRemove}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>

    </div>
  )
}

export default ExerciseList