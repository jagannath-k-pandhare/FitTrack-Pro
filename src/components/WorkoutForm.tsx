import { useState } from "react";
import { useWorkouts } from "../hooks/useWorkouts";
import { useExercises } from "../hooks/useExercises";
import toast from "react-hot-toast";

function WorkoutForm() {
  const { addWorkout } = useWorkouts();
  const { exercises } = useExercises();

  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleSubmit = () => {
    if (!exercise) return;

    addWorkout({
      id: Date.now(),
      exercise,
      sets,
      reps,
      weight,
      date: new Date().toISOString(),
    });

    toast.success("Workout saved");

    setExercise("");
    setSets(0);
    setReps(0);
    setWeight(0);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Log Workout</h2>

      <select
        className="border p-2 rounded w-full mb-3"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      >
        <option value="">Select Exercise</option>

        {exercises.map((ex) => (
          <option key={ex.id} value={ex.name}>
            {ex.name}
          </option>
        ))}
      </select>

      <input
        className="border p-2 rounded w-full mb-3"
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(Number(e.target.value))}
      />

      <input
        className="border p-2 rounded w-full mb-3"
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(Number(e.target.value))}
      />

      <input
        className="border p-2 rounded w-full mb-3"
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Save Workout
      </button>
    </div>
  );
}

export default WorkoutForm;
