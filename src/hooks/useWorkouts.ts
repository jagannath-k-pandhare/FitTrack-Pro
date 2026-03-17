import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchWorkouts, addWorkout, updateWorkout, deleteWorkout} from "../services/workoutService"

export function useWorkouts(){
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: ["workouts"],
        queryFn: fetchWorkouts
    })

    const addMutation = useMutation({
        mutationFn: addWorkout,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["workouts"]})
        }
    })

    const updateMutation = useMutation({
        mutationFn: updateWorkout,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["workouts"]})
        }
    })

    const deleteMutation = useMutation({
        mutationFn: deleteWorkout,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["workout"]})
        }
    })

    return {
        workouts: query.data ?? [],
        loading: query.isLoading,
        error: query.error,
        addWorkout: addMutation.mutate,
        updateWorkout: updateMutation.mutate,
        deleteWorkout: deleteMutation.mutate
    }
}