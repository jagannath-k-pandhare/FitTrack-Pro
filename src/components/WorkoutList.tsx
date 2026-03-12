import { useState } from "react"
import { useWorkouts } from "../hooks/useWorkouts"
import { useExercises } from "../hooks/useExercises"

function WorkoutList() {

  const { workouts, loading } = useWorkouts()
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("date-desc")
  const { exercises } = useExercises()

  const [filter, setFilter] = useState("")

  if (loading) {
    return <p>Loading workouts...</p>
  }

  const filteredWorkouts = workouts
  .filter(w =>
    filter ? w.exercise === filter : true
  )
  .filter(w =>
    w.exercise.toLowerCase().includes(search.toLowerCase())
  )

  const sortedWorkouts = [...filteredWorkouts].sort((a, b) => {

  if (sort === "date-desc") {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  }

  if (sort === "date-asc") {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  }

  if (sort === "weight-desc") {
    return b.weight - a.weight
  }

  if (sort === "exercise-asc") {
    return a.exercise.localeCompare(b.exercise)
  }

  return 0
})

  if (workouts.length === 0) {
    return <p className="text-gray-500">No workouts logged yet.</p>
  }

  return (
    
    <div className="grid gap-4">
        <div className="flex gap-4 mb-4">

  <input
    type="text"
    placeholder="Search workouts..."
    className="border p-2 rounded flex-1"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    className="border p-2 rounded w-56"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    <option value="">All Exercises</option>

    {exercises.map((ex) => (
      <option key={ex.id} value={ex.name}>
        {ex.name}
      </option>
    ))}

  </select>

  <select
  className="border p-2 rounded w-48"
  value={sort}
  onChange={(e) => setSort(e.target.value)}
>
  <option value="date-desc">Newest</option>
  <option value="date-asc">Oldest</option>
  <option value="weight-desc">Heaviest Weight</option>
  <option value="exercise-asc">Exercise Name</option>
</select>

</div>

      {sortedWorkouts.map((w) => (

        <div
          key={w.id}
          className="bg-white p-4 rounded-xl shadow"
        >

          <h3 className="text-lg font-semibold">
            {w.exercise}
          </h3>

          <p className="text-gray-600">
            {w.sets} sets × {w.reps} reps
          </p>

          <p className="text-gray-600">
            Weight: {w.weight} kg
          </p>

          <p className="text-sm text-gray-400">
            {new Date(w.date).toLocaleDateString()}
          </p>

        </div>

      ))}

    </div>
  )
}

export default WorkoutList