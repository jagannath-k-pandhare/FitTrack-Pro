import { useExercises } from "../hooks/useExercises"
import {useState, useEffect} from "react"
import ExerciseItem from "./ExerciseItem"
import ExerciseInput from "./ExerciseInput"

function ExerciseList(){

    // const { exercises, setExercises, loading } = useExercises()
    const { exercises, setExercises, loading, error } = useExercises()

    const [newExercise, setNewExercise] = useState("")
    
    const addExercise = () => {
    
        if(!newExercise.trim()) return

        const exercise = {
            id: Date.now(),
            name: newExercise
        }
        setExercises([...exercises, exercise])
        setNewExercise("")
    }

    const removeExercise = (id:number) => {
        const updatedExercises = exercises.filter(
            exercise => exercise.id !== id 
        )
        setExercises(updatedExercises)
    }

    const updateExercise = (id:number, newName: string ) => {
        const updated = exercises.map((exercise) => 
        exercise.id === id
        ? {...exercise, name:newName}
        : exercise
        )
        setExercises(updated)
    }
    if (loading) {
        return <p className="p-6">Loading exercises...</p>
    }
    if (error) {
    return (
        <p className="text-red-500">
        {error}
        </p>
    )
    }
    return(
        <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-xl font-bold mb-4">
                Exercises
            </h2>
            <ExerciseInput 
                value={newExercise}
                onChange={setNewExercise}
                onAdd={addExercise}
            />

            <ul className="space-y-3">
                {loading ? (
                    <p>Loading exercises...</p>
                ) : (
                    exercises.map((exercise) => (
                    <ExerciseItem
                        key={exercise.id}
                        id={exercise.id}
                        name={exercise.name}
                        onRemove={removeExercise}
                        onUpdate={updateExercise}
                    />
                    ))
                )}

                </ul>
        </div>
    )
}
export default ExerciseList