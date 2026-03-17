import { useState } from "react";
import { useWorkouts } from "../hooks/useWorkouts";
import type { Workout } from "../types/workout";
import toast from "react-hot-toast";

type Props = {
  workout: Workout;
  onClose: () => void;
};

function EditWorkoutModal({ workout, onClose }: Props) {
  const { updateWorkout } = useWorkouts();

  const [sets, setSets] = useState(workout.sets);
  const [reps, setReps] = useState(workout.reps);
  const [weight, setWeight] = useState(workout.weight);

  const handleSave = () => {
    updateWorkout({
      id: workout.id,
      exercise: workout.exercise,
      sets,
      reps,
      weight,
      date: workout.date,
    });

    toast.success("workout details updated");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow w-96">
        <h2 className="text-xl font-bold mb-4">Edit Workout</h2>

        <p className="mb-2 font-medium">{workout.exercise}</p>

        <input
          type="number"
          className="border p-2 rounded w-full mb-3"
          value={sets}
          onChange={(e) => setSets(Number(e.target.value))}
        />

        <input
          type="number"
          className="border p-2 rounded w-full mb-3"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
        />

        <input
          type="number"
          className="border p-2 rounded w-full mb-3"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />

        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 border rounded" onClick={onClose}>
            Cancel
          </button>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditWorkoutModal;
