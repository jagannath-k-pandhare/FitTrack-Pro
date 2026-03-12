import type { Workout } from "../types/workout"

let workouts: Workout[] = []

export async function fetchWorkouts(): Promise<Workout[]>{
    return [...workouts]
}

export async function addWorkout(workout: Workout): Promise<Workout>{
    workouts.push(workout)
    return workout
}

