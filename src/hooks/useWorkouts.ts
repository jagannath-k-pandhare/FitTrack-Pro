import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchWorkouts, addWorkout} from "../services/workoutService"
// import type { Workout } from "../types/workout"

export function useWorkouts(){
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: ["workouts"],
        queryFn: fetchWorkouts
    })

    const addMutation = useMutation({
        mutationFn: addWorkout,
        onSuccess: () =>{
            queryClient.invalidateQueries({queryKey: ["workouts"]})
        }
    })

    return {
        workouts: query.data ?? [],
        loading: query.isLoading,
        addWorkout: addMutation.mutate
    }
}