import { useWorkouts } from "../hooks/useWorkouts";
import type { Workout } from "../types/workout";
import toast from "react-hot-toast";

type Props = {
  workout: Workout;
  onClose: () => void;
};

function DeleteWorkoutModal({ workout, onClose }: Props) {
  const { deleteWorkout } = useWorkouts();

  const handleDelete = () => {
    deleteWorkout(workout.id);
    toast.success("Workout deleted");
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow w-96">
        <h2 className="text-xl font-bold mb-4 text-red-600">Delete Workout</h2>

        <p className="mb-2 font-medium">{workout.exercise}</p>

        <p className="text-gray-600 mb-4">
          {workout.sets} × {workout.reps} @ {workout.weight} kg
        </p>

        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 border rounded" onClick={onClose}>
            Cancel
          </button>

          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteWorkoutModal;
