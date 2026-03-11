import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchExercises } from "../services/exerciseService"
import type { Exercise } from "../types/exercise"
import { 
  addExercise as addExerciseService,
  deleteExercise as deleteExerciseService,
  updateExercise as updateExerciseService
} from "../services/exerciseService"

export function useExercises() {
const queryClient = useQueryClient()

  const addMutation = useMutation({
  mutationFn: addExerciseService,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["exercises"] })
  }
})
const deleteMutation = useMutation({
  mutationFn: deleteExerciseService,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["exercises"] })
  }
})
const updateMutation = useMutation({
  mutationFn: ({ id, name }: { id: number; name: string }) =>
    updateExerciseService(id, name),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["exercises"] })
  }
})

  const query = useQuery<Exercise[]>({
    queryKey: ["exercises"],
    queryFn: fetchExercises
  })

  return {
  exercises: query.data ?? [],
  loading: query.isLoading,
  error: query.error,
  addExercise: addMutation.mutate,
  deleteExercise: deleteMutation.mutate,
  updateExercise: updateMutation.mutate
}


}